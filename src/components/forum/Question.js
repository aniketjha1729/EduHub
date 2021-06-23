import React from "react";

const Question = () => {
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
                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Your Queries</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlSelect1">
                      Subject
                    </label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
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
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="col-2">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="col-2">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="col-2">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="col-2">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="col-2">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-primary">
                    Submit
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

export default Question;
