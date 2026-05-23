import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function getTextFromChildren(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(getTextFromChildren).join("");
  }

  if (
    children &&
    typeof children === "object" &&
    "props" in children &&
    children.props &&
    typeof children.props === "object" &&
    "children" in children.props
  ) {
    return getTextFromChildren(children.props.children as ReactNode);
  }

  return "";
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children, ...props }) => {
      const id = slugifyHeading(getTextFromChildren(children));

      return (
        <h2 id={id} {...props}>
          {children}
        </h2>
      );
    },

    h3: ({ children, ...props }) => {
      const id = slugifyHeading(getTextFromChildren(children));

      return (
        <h3 id={id} {...props}>
          {children}
        </h3>
      );
    },

    ...components,
  };
}