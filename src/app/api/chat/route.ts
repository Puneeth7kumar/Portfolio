import OpenAI from "openai";
import { NextResponse } from "next/server";
import { projects } from "@/features/home/data/projects";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(req: Request) {
  try {
    const groqKey = process.env.GROQ_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;
    const apiKey = groqKey || openaiKey;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Set GROQ_API_KEY (or OPENAI_API_KEY) in your env file." },
        { status: 500 }
      );
    }

    const body = (await req.json()) as { messages?: ChatMessage[] };
    const messages = body.messages ?? [];

    const isGroqKey = apiKey.startsWith("gsk_");
    const client = new OpenAI({
      apiKey,
      baseURL: isGroqKey
        ? "https://api.groq.com/openai/v1"
        : process.env.OPENAI_BASE_URL,
    });
    const projectContext = projects
      .map(
        (project) =>
          `- ${project.title}: ${project.description}. Stack: ${project.techStack.join(
            ", "
          )}. GitHub: ${project.githubUrl}. Live: ${project.liveUrl}. Details: ${project.details}`
      )
      .join("\n");

    const completion = await client.chat.completions.create({
      model: isGroqKey
        ? process.env.GROQ_MODEL || "llama-3.1-8b-instant"
        : process.env.OPENAI_MODEL || "gpt-4o-mini",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content:
            "You are Puneeth Kumar's portfolio assistant. Keep answers concise, helpful, and project-focused. Use only known project data. If info is missing, say so clearly and suggest checking the GitHub repo directly.",
        },
        {
          role: "system",
          content: `Portfolio projects:\n${projectContext}`,
        },
        ...messages.map((message) => ({
          role: message.role,
          content: message.content,
        })),
      ],
    });

    const answer =
      completion.choices[0]?.message?.content ??
      "I could not generate a response. Please try again.";

    return NextResponse.json({ answer });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected provider error";
    return NextResponse.json(
      { error: `Chat provider error: ${message}` },
      { status: 500 }
    );
  }
}
