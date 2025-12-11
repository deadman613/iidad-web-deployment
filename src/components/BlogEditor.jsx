"use client";

import { useEffect, useRef, useState } from "react";

const sanitizeEmpty = (html) => (html === "<p><br></p>" || html === "<div><br></div>" ? "" : html);

const BlogEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const [internal, setInternal] = useState(value || "");

  useEffect(() => {
    if (!editorRef.current) return;
    const incoming = value || "";
    if (incoming !== internal) {
      setInternal(incoming);
      editorRef.current.innerHTML = incoming || "";
    }
  }, [value, internal]);

  const emitChange = () => {
    if (!editorRef.current) return;
    const html = sanitizeEmpty(editorRef.current.innerHTML || "");
    setInternal(html);
    onChange?.(html);
  };

  const handleCommand = (command) => {
    if (!editorRef.current) return;
    editorRef.current.focus();
    document.execCommand(command, false, null);
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
        <button type="button" onClick={() => handleCommand("formatBlock", false, "H2")}>H2</button>
        <button type="button" onClick={() => handleCommand("formatBlock", false, "H3")}>H3</button>
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
        data-placeholder="Write your blog content..."
        dangerouslySetInnerHTML={{ __html: internal }}
      />
    </div>
  );
};

export default BlogEditor;
