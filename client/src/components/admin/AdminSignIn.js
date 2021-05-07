import React, { useState } from "react";
const AdminSignIn = () => {
  const [password, setPasword] = useState("aniket");
  const [email, setEmail] = useState("aniket@gmail.com");
  const [errormsg, setErrormsg] = useState("");
  return (
    <div className="signin">
      <div
        className="card signin_card"
        style={{
          padding: "3%",
          textAlign: "center",
          margin: "20px auto",
          maxWidth: "400px",
          borderRadius: "10px",
          boxShadow: "5px 10px 20px #888888",
        }}
      >
        <h2>Admin Panel</h2>
        <br />
        {errormsg ? (
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            {errormsg}
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => setErrormsg("")}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPasword(e.target.value)}
        />
        <br />
        {/* <Link to="/reset">Forgot Password?</Link> */}
        <br />
        <button
          type="button"
          className="btn btn-primary"
          // onClick={() => PostData()}
        >
          SignIn
        </button>
        <br />
      </div>
    </div>
  );
};

export default AdminSignIn;
