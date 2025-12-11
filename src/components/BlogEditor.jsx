"use client";

import { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";

const toolbarOptions = [
  [{ header: [2, 3, false] }],
  ["bold", "italic", "underline"],
  [{ list: "ordered" }, { list: "bullet" }],
  ["link"],
  ["clean"],
];

const BlogEditor = ({ value, onChange }) => {
  const containerRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!containerRef.current || quillRef.current) return;
      const Quill = (await import("quill")).default;

      const q = new Quill(containerRef.current, {
        theme: "snow",
        placeholder: "Write your blog content...",
        modules: {
          toolbar: toolbarOptions,
          keyboard: {
            bindings: {
              bold: false,
              italic: false,
              underline: false,
              link: false,
            },
          },
        },
      });

      q.on("text-change", () => {
        const html = q.root.innerHTML;
        onChange?.(html === "<p><br></p>" ? "" : html);
      });

      if (typeof value === "string" && value) {
        q.root.innerHTML = value;
      }

      quillRef.current = q;
    })();

    return () => {
      mounted = false;
      quillRef.current = null;
    };
  }, [onChange]);

  useEffect(() => {
    const q = quillRef.current;
    if (q && typeof value === "string" && value !== q.root.innerHTML) {
      q.root.innerHTML = value || "";
    }
  }, [value]);

  return (
    <div className="editor">
      <div ref={containerRef} />
    </div>
  );
};

export default BlogEditor;
