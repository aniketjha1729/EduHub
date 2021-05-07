import api from "../api/axios";

const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Bearer"] = token;
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["Bearer"];
    localStorage.removeItem("token");
  }
};

export default setAuthToken;
