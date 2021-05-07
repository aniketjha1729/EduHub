import api from "../api/axios";

const setAuthToken = (authToken) => {
  if (authToken) {
    api.defaults.headers.common["Bearer"] = authToken;
    localStorage.setItem("token", authToken);
  } else {
    delete api.defaults.headers.common["Bearer"];
    localStorage.removeItem("token");
  }
};

export default setAuthToken;
