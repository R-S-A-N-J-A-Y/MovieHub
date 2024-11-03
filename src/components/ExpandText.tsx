import { useState } from "react";

interface Props {
  children: string;
  maxChar? : number;
}

const ExpandText = ({ children, maxChar = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChar) return <p>{children}</p>;
  else {
    let text = isExpanded ? children : children.substring(0, maxChar);
    console.log("else");
    return (
      <p>
        {text}{" "}
        {!isExpanded ? "..." : ""}
        <button
          onClick={() => {
            setExpanded(!isExpanded);
          }}
        >
          {!isExpanded ? "More" : "Less"}
        </button>{" "}
      </p>
    );
  }
};

export default ExpandText;
