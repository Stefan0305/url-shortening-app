import copy from "copy-to-clipboard";
import { useState } from "react";

function ShortenedLinkContainer(props) {
  const [linkToCopy, setlinkToCopy] = useState(props.value.short_link);
  const [linkState, setlinkState] = useState("Copy");
  function handleCopy() {
    copy(linkToCopy);
    setlinkState("Copied!");
  }
  return (
    <div className="link-wrapper">
      <div>
        <p className="full-link">{props.value.original_link}</p>
        <p className="short-link" id="short-link">
          {linkToCopy}
        </p>
      </div>
      <button
        className={linkState === "Copy" ? "button" : "button active"}
        onClick={handleCopy}
      >
        {linkState}
      </button>
    </div>
  );
}
export default ShortenedLinkContainer;
