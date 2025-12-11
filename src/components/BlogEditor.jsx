"use client";

import { useEffect, useMemo } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

const extensions = [
  StarterKit.configure({
    bold: {
      HTMLAttributes: {},
    },
    italic: {
      HTMLAttributes: {},
    },
    heading: {
      HTMLAttributes: {},
    },
  }),
  Placeholder.configure({ placeholder: "Write your blog content..." }),
  Link.configure({ openOnClick: false }),
  Image.configure({ inline: false }),
];

const controls = [
  {
    label: "B",
    command: (editor) => editor.chain().focus().toggleBold().run(),
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
        () => [
          "header",
          "bold",
          "italic",
          "underline",
          "list",
          "bullet",
          "link",
        ],
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
