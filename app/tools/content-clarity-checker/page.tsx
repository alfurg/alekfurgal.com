"use client";

import { useMemo, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type ContentBlock = {
  type: string;
  level: number | null;
  text: string;
  isEmpty: boolean;
};

function extractTextFromNode(node: any): string {
  if (!node) return "";

  if (node.type === "text") {
    return node.text || "";
  }

  if (!node.content) return "";

  return node.content.map(extractTextFromNode).join(" ");
}

function extractBlocksFromJson(json: any): ContentBlock[] {
  const blocks = json?.content || [];

  return blocks.map((block: any) => {
    const text = extractTextFromNode(block).trim();

    return {
      type: block.type,
      level: block.attrs?.level || null,
      text,
      isEmpty: text.length === 0,
    };
  });
}

const vagueWords = [
  "innovative",
  "seamless",
  "powerful",
  "cutting-edge",
  "next-generation",
  "robust",
  "scalable",
  "all-in-one",
  "streamline",
  "unlock",
  "revolutionary",
  "transform",
  "effortless",
  "world-class",
];
function analyzeStructure(blocks: any[]) {
  const headings = blocks.filter((block) => block.type === "heading");
  const paragraphs = blocks.filter((block) => block.type === "Paragraph");

  return {
    headingCount: headings.length,
    paragraphCount: paragraphs.length,
    headings: headings.map((heading) => ({
      level: heading.level,
      text: heading.text,
      wordCount: heading.text.split(/\s+/).filter(Boolean).length,
      isVague: vagueWords.some((word) =>
        heading.text.toLowerCase().includes(word)
      ),
    })),
  };
}

function analyzeCopy(text: string, blocks: any[]) {
  const cleanText = text.trim();
  const words = cleanText.split(/\s+/).filter(Boolean);
  const sentences = cleanText.split(/[.!?]+/).filter(Boolean);

  const lowerText = cleanText.toLowerCase();

  const foundVagueWords = vagueWords.filter((word) =>
    lowerText.includes(word)
  );

  const hasAudienceSignal =
    /\b(for|built for|designed for|made for|helps|teams|founders|marketers|businesses|creators)\b/i.test(
      cleanText
    );

  const hasProblemSignal =
    /\b(problem|struggle|challenge|manual|slow|difficult|waste|confusing|friction|bottleneck)\b/i.test(
      cleanText
    );

  const hasOutcomeSignal =
    /\b(save|increase|reduce|improve|grow|faster|easier|better|clarity|convert|rank|understand)\b/i.test(
      cleanText
    );

  let score = 100;

  if (words.length < 80) score -= 15;
  if (!hasAudienceSignal) score -= 20;
  if (!hasProblemSignal) score -= 15;
  if (!hasOutcomeSignal) score -= 15;
  score -= Math.min(foundVagueWords.length * 5, 25);

  const priority =
    !hasAudienceSignal
      ? "Make it clearer who this page is for."
      : !hasProblemSignal
      ? "Name the problem or situation the visitor is dealing with."
      : !hasOutcomeSignal
      ? "Make the promised outcome more specific."
      : foundVagueWords.length > 0
      ? "Replace vague claims with more concrete language."
      : "The copy has the basic clarity signals. Next, check whether the first screen explains the offer quickly enough.";

  return {
    score: Math.max(score, 0),
    wordCount: words.length,
    sentenceCount: sentences.length,
    structure: analyzeStructure(blocks),
    foundVagueWords,
    checks: {
      hasAudienceSignal,
      hasProblemSignal,
      hasOutcomeSignal,
    },
    priority,
  };
}

export default function ContentClarityCheckerPage() {
  
  const [text, setText] = useState("");
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "min-h-[420px] rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm leading-6 text-neutral-900 outline-none transition focus:border-neutral-400 focus:bg-white",
      },
    },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      const extractedBlocks = extractBlocksFromJson(json);
      const plainText = extractedBlocks
        .filter((block) => !block.isEmpty)
        .map((block) => block.text)
        .join("\n\n");;

      setBlocks(extractedBlocks);
      setText(plainText);
  },
});

const result = useMemo(() => {
  if (!text.trim()) return null;
  return analyzeCopy(text, blocks);
}, [text, blocks]);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
          Free SEO tool
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
          Content clarity checker
        </h1>

        <p className="mt-5 text-lg leading-8 text-neutral-700">
          Paste homepage or landing page copy to check whether it clearly
          explains what the page is about, who it is for, and why it matters.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
          <label
            htmlFor="page-copy"
            className="mb-3 block text-sm font-medium text-neutral-800"
          >
            Page copy
          </label>

          <div className="tiptap-editor">
            <EditorContent editor={editor} />
          </div>
          
        </section>

{blocks.length > 0 && (
  <div className="mt-4 rounded-2xl bg-neutral-100 p-4 text-xs text-neutral-700">
    <p className="mb-2 font-medium">Detected structure</p>

    <ul className="space-y-1">
      {blocks.map((block, index) => (
        <li key={index} className={block.isEmpty ? "text-neutral-400" : ""}>
          {block.type}
          {block.level ? ` H${block.level}` : ""}
          {block.isEmpty ? ": [Empty line break]" : `: ${block.text}`}
        </li>
      ))}
    </ul>
  </div>
)}

        <aside className="rounded-3xl border border-neutral-200 bg-neutral-950 p-5 text-white shadow-sm">
          <h2 className="text-xl font-semibold">Clarity report</h2>

          {!result ? (
            <p className="mt-4 text-sm leading-6 text-neutral-300">
              Your report will appear here once you paste some copy.
            </p>
          ) : (
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-sm text-neutral-400">Clarity score</p>
                <p className="mt-1 text-5xl font-semibold">
                  {result.score}
                  <span className="text-2xl text-neutral-400">/100</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-semibold">{result.wordCount}</p>
                  <p className="mt-1 text-sm text-neutral-400">words</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-semibold">
                    {result.sentenceCount}
                  </p>
                  <p className="mt-1 text-sm text-neutral-400">sentences</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-200">
                  Signals found
                </h3>

                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    {result.checks.hasAudienceSignal ? "✓" : "✕"} Audience
                    clarity
                  </li>
                  <li>
                    {result.checks.hasProblemSignal ? "✓" : "✕"} Problem
                    clarity
                  </li>
                  <li>
                    {result.checks.hasOutcomeSignal ? "✓" : "✕"} Outcome
                    clarity
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-200">
                  Structure
                </h3>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-semibold">
                      {result.structure.headingCount}
                    </p>
                    <p className="mt-1 text-sm text-neutral-400">headings</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-semibold">
                      {result.structure.paragraphCount}
                    </p>
                    <p className="mt-1 text-sm text-neutral-400">paragraphs</p>
                  </div>
                </div>
              </div>

              {result.structure.headings.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-neutral-200">
                    Detected headings
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                    {result.structure.headings.map((heading, index) => (
                      <li key={index} className="rounded-2xl bg-white/10 p-3">
                        <span className="text-neutral-500">H{heading.level}</span>{" "}
                        {heading.text}
                        {heading.isVague && (
                          <span className="ml-2 text-neutral-400">
                            vague
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="text-sm font-medium text-neutral-200">
                  Vague words detected
                </h3>

                {result.foundVagueWords.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {result.foundVagueWords.map((word) => (
                      <span
                        key={word}
                        className="rounded-full bg-white/10 px-3 py-1 text-sm text-neutral-200"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-sm text-neutral-400">
                    No obvious vague words detected.
                  </p>
                )}
              </div>

              <div className="rounded-2xl bg-white p-4 text-neutral-950">
                <h3 className="text-sm font-medium">Suggested next step</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-700">
                  {result.priority}
                </p>
              </div>
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}