import React from "react";

const ForumRight = () =>
{
  return(
    <div>
      <form>
        <textarea
          rows="15"
          cols="23"
          type="textarea"
          name="question"
          className="form-control UserHome-example-input example-input"
          id="ForumRightIDtextarea"
          // value={state.content || ""}
          placeholder="Type Question here"
          // onChange={handleInputChange}
        />
        <input id="ForumRightIDbutton" type="submit" value="Submit" />
      </form>
    </div>
  )
}
export default ForumRight;