import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
const PostQuestion = () => {
  const [values, setValues] = useState({
    description: "",
    subject: "",
    tags: "",
    document: "",
    formData: "",
  });

  const { description, subject, tags, formData } = values;

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const handleChange = (name) => (event) => {
    const value =
      name === "document" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const { data } = await axios.post("/forum/question", formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container questionContainer">
      <div className="row forumBody ">
        <div className="col-1"></div>
        <div className="col-11">
          <div className="card">
            <h5 className="card-header text-center">
              Drop your Qustion here:{" "}
            </h5>
            <div className="card-body">
              <h5 className="card-title">
                <form onSubmit={onSubmit}>
                  <div className="form-group ForumLabel">
                    <label for="exampleInputEmail1">Your Queries</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="4"
                      name="description"
                      onChange={handleChange("description")}
                      value={description}
                    ></textarea>
                  </div>
                  <label for="exampleFormControlSelect1">Files</label>
                  <div className="custom-file">
                    <label
                      className="custom-file-label UserHome-custom-file-label"
                      for="validatedCustomFile"
                      placeholder="Click here to select a file"
                    >
                      {/* {document.name} */}
                      <input
                        type="file"
                        name="document"
                        className="custom-file-input"
                        id="validatedCustomFile"
                        accept="image"
                        placeholder="Click here to select a file"
                        onChange={handleChange("document")}
                      />
                    </label>
                  </div>
                  <div className="form-group ForumLabel">
                    <label for="exampleFormControlSelect1">Subject</label>
                    <select
                      className="form-control forum-question-drop"
                      id="exampleFormControlSelect1"
                      name="subject"
                      onChange={handleChange("subject")}
                    >
                      <option>Select</option>
                      <option>DBMS</option>
                      <option>DS-ALGO</option>
                      <option>Maths</option>
                      <option>Compiler Design</option>
                      <option>Digital Electornics</option>
                      <option>Mechanics</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlSelect1">Tags</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="tags"
                      onChange={handleChange("tags")}
                      value={tags}
                    />
                    <small
                      id="tagHelp"
                      className="form-text text-muted text-center"
                    >
                      Seperate your tags with ","
                    </small>
                  </div>
                  <button
                    type="submit"
                    className="btn forum-question-submit-button"
                  >
                    Share Your Queries
                  </button>
                </form>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostQuestion;
