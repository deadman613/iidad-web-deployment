"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const toolbarOptions = [
  [{ header: [2, 3, false] }],
  ["bold", "italic", "underline"],
  [{ list: "ordered" }, { list: "bullet" }],
  ["link"],
  ["clean"],
];

const BlogEditor = ({ value, onChange }) => {
  const modules = useMemo(
    () => ({
      toolbar: toolbarOptions,
      keyboard: {
        bindings: {
          bold: { key: "b", shortKey: true, handler: () => {} },
          italic: { key: "i", shortKey: true, handler: () => {} },
          underline: { key: "u", shortKey: true, handler: () => {} },
          link: { key: "k", shortKey: true, handler: () => {} },
        },
      },
    }),
    []
  );

  const formats = useMemo(
    () => ["header", "bold", "italic", "underline", "list", "bullet", "link"],
    []
  );

  return (
    <div className="editor">
      <ReactQuill
        theme="snow"
        value={value || ""}
        onChange={(content) => onChange?.(content || "")}
        modules={modules}
        formats={formats}
        placeholder="Write your blog content..."
      />
    </div>
  );
};

export default BlogEditor;
