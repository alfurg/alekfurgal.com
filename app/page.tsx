import SinglePageLayout from "@/components/SinglePageLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Better websites start with better content",
  description: "This is where I share my writing and document what I’m learning as I think through problems, test ideas, and work out how parts of the web fit together."
};

export default function Home() {
  return (
    <SinglePageLayout
      eyebrow="SEO · content systems · brand positioning"
      title="Better websites start with better content"
    >
        <p>
          Content is how a website explains itself: what it offers, who it helps,
          and why it should be trusted.
        </p>

        <p>
          This is where I share my writing and document what I’m learning
          as I think through problems, test ideas, and work out how parts of the
          web fit together.
        </p>

        <p>
          If any of it resonates with you, please{" "}
          <a href="mailto:aleksanderfurgal@gmail.com" >
            reach out to me by email
          </a>
          .
        </p>
    </SinglePageLayout>
    );      
} 