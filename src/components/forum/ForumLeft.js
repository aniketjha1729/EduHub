import React from "react";

const ForumLeft = () => {
  return(
  <div>
    <div className="col ForumLeftHomeCol">
      <a id="ForumLeftIDhome" href="../components/forum/Forum.js">Home</a>
    </div><hr/>
    <div className="col ForumLeftQuestionCol">
      <a id="ForumLeftIDquestion" href="../components/forum/Forum.js">Question</a>
    </div><br/>
    <div className="col ForumLeftTagCol">
      <a id="ForumLeftIDtag" href="../components/forum/Forum.js">Tag</a>
    </div>
  </div>
  )
};
export default ForumLeft;
