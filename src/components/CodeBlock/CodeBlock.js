import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs/";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs/";
import { zTouch } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ codeBlock, customStyle, showLineNumbers }) => {
  return (
    <ReactMarkdown
      children={codeBlock}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          console.log(match);
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={nightOwl}
              customStyle={customStyle}
              showLineNumbers={showLineNumbers || false}
              language={match[1]}
              lineProps={(lineNumber) => {
                let style = { display: "block" };
                if ([1].includes(lineNumber)) {
                  style.backgroundColor = "#dbffdb";
                } else if ([2].includes(lineNumber)) {
                  style.backgroundColor = "#ffecec";
                }
                return { style };
              }}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};

export default CodeBlock;
