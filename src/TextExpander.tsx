import { useState } from "react";

type TextExpanderProps = {
  children: string;
  collapsedNumWords?: number;
  expandButtonText?: string;
  collapseButtonText?: string;
  buttonColor?: string;
  expanded?: boolean;
  className?: string;
};

const TextExpander = ({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
  className = "",
}: TextExpanderProps) => {
  const [expandedState, setExpandedState] = useState(expanded);
  const buttonStyle = {
    cursor: "pointer",
    backgroundColor: "transparent",
    fontSize: "1rem",
    fontWeight: "bold",
    border: "none",
    marginLeft: "5px",
    color: buttonColor,
  };

  //1-   CREATE ARRAY OF WORDS OF CHILDREN PROP
  const wordsArr = children.split(" ");

  //2- RETURN THE REQUIRED NUM OF WORDS OF THE WHOLE CHILDREN ARRAY OF WORDS
  const trunctatedText = wordsArr.slice(0, collapsedNumWords).join(" ");

  if (wordsArr.length <= collapsedNumWords)
    return <div className={className}>{children}</div>;

  return (
    <div className={className}>
      {expandedState ? children : `${trunctatedText} ...`}

      <button
        style={buttonStyle}
        onClick={() => setExpandedState((prev) => !prev)}
      >
        {expandedState ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};

export default TextExpander;
