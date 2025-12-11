"use client";

import { useEffect, useRef } from "react";

const sanitizeEmpty = (html) => (html === "<p><br></p>" || html === "<div><br></div>" ? "" : html);

const BlogEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);

  // Set initial content
  useEffect(() => {
    if (editorRef.current && typeof value === "string") {
      editorRef.current.innerHTML = value || "";
    }
  }, []);

  // Sync when external value changes
  useEffect(() => {
    if (!editorRef.current || typeof value !== "string") return;
    const incoming = value || "";
    const current = editorRef.current.innerHTML || "";
    if (incoming !== current && !(incoming === "" && current === "<p><br></p>")) {
      editorRef.current.innerHTML = incoming;
    }
  }, [value]);

  const emitChange = () => {
    if (!editorRef.current) return;
    const html = sanitizeEmpty(editorRef.current.innerHTML || "");
    onChange?.(html);
  };

  const handleCommand = (command, value = null) => {
    if (!editorRef.current) return;
    editorRef.current.focus();
    document.execCommand(command, false, value);
    emitChange();
  };

  const handleLink = () => {
    if (!editorRef.current) return;
    editorRef.current.focus();
    const url = window.prompt("Enter URL:", "https://");
    if (!url) return;
    document.execCommand("createLink", false, url);
    emitChange();
  };

  const handleInput = () => emitChange();

  return (
    <div className="editor">
      <div className="editor__toolbar">
        <button type="button" onClick={() => handleCommand("bold")}>B</button>
        <button type="button" onClick={() => handleCommand("italic")}>I</button>
        <button type="button" onClick={() => handleCommand("underline")}>U</button>
        <button type="button" onClick={() => handleCommand("insertUnorderedList")}>•</button>
        <button type="button" onClick={() => handleCommand("insertOrderedList")}>1.</button>
        <button type="button" onClick={() => handleCommand("formatBlock", "<h2>")}>H2</button>
        <button type="button" onClick={() => handleCommand("formatBlock", "<h3>")}>H3</button>
        <button type="button" onClick={handleLink}>🔗</button>
        <button type="button" onClick={() => { if (editorRef.current) { editorRef.current.innerHTML = ""; emitChange(); } }}>Clear</button>
      </div>
      <div
        ref={editorRef}
        className="plain-editor"
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onBlur={handleInput}
        onKeyUp={handleInput}
        onPaste={handleInput}
        data-placeholder="Write your blog content..."
      />
    </div>
  );
};

export default BlogEditor;
