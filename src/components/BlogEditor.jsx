"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

// Dynamic import to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const BlogEditor = ({ value, onChange }) => {
  // Custom toolbar configuration with comprehensive formatting options
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          // Headers
          [{ header: [1, 2, 3, false] }],
          
          // Text formatting
          ["bold", "italic", "underline", "strike"],
          
          // Text color and background
          [{ color: [] }, { background: [] }],
          
          // Lists
          [{ list: "ordered" }, { list: "bullet" }],
          
          // Text alignment
          [{ align: [] }],
          
          // Indentation
          [{ indent: "-1" }, { indent: "+1" }],
          
          // Blockquote and code block
          ["blockquote", "code-block"],
          
          // Links and images
          ["link", "image"],
          
          // Clean formatting
          ["clean"],
        ],
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  // Quill formats to allow
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "align",
    "indent",
    "blockquote",
    "code-block",
    "link",
    "image",
  ];

  return (
    <div className="editor">
      <ReactQuill
        theme="snow"
        value={value || ""}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Write your blog content..."
        className="blog-editor-quill"
      />
    </div>
  );
};

export default BlogEditor;
