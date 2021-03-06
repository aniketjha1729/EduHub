import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import Error from "../errors/Error";

const CreatePost = (props) => {
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    document: "",
    content: "",
    formData: "",
  });

  const { content, document, formData } = values;

  useEffect(() => {
    console.log(props.user);
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
      const { data } = await axios.post("/user/post/createPost", formData);
      setValues({
        ...values,
        document: "",
        content: "",
        formData: "",
      });
      props.getAllPost();
    } catch (err) {
      console.log(err);
      setValues({
        ...values,
        document: "",
        content: "",
        formData: "",
      });
      setError(err.response.data.errors[0].msg);
    }
  };
  return (
    <div className="card-body">
      <Error error={error} />
      <br />
      <button
        type="button"
        className="btn UserHome-TextBoxLikeButton"
        data-toggle="modal"
        data-target="#postModel"
      >
        Create a post
      </button>
      <div
        className="modal fade"
        id="postModel"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-center"
                id="exampleModalLongTitle"
              >
                Create Post
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <div className="form-group">
                    <input
                      onChange={handleChange("content")}
                      name="content"
                      type="text"
                      className="form-control example-input UserHome-example-input"
                      id="formGroupExampleInput"
                      placeholder={`What's on your mind, ${props?.user?.name} ?`}
                      value={content}
                    />
                  </div>
                  <div className="custom-file">
                    <label
                      className="custom-file-label UserHome-custom-file-label"
                      for="validatedCustomFile"
                      placeholder="Click here to select a file"
                    >
                      {document.name}
                      <input
                        type="file"
                        name="document"
                        onChange={handleChange("document")}
                        className="custom-file-input"
                        id="validatedCustomFile"
                        accept="image"
                        placeholder="Click here to select a file"
                      />
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  data-dismiss="modal"
                  onClick={onSubmit}
                  className="btn UserHome-modal-button"
                  value="Save changes"
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
