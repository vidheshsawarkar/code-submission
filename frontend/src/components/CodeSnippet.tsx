import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import java from "highlight.js/lib/languages/java";
import python from "highlight.js/lib/languages/python";
import cpp from "highlight.js/lib/languages/cpp";
import "highlight.js/styles/atom-one-dark.css";

import { useEffect, useRef } from "react";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("java", java);
hljs.registerLanguage("python", python);
hljs.registerLanguage("cpp", cpp);


const CodeSnippet = ({language, code}: any) => {
  const codeRef = useRef(null);
  
  useEffect(() => {
    // @ts-ignore
    hljs.highlightBlock(codeRef.current);
  }, []);

  return (
    <div className="pl-3">
      <pre>
        <code className={{language} + " bg-transparent"} ref={codeRef}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;