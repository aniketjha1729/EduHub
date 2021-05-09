import api from "../api/axios";

const setAuthToken = (authToken) => {
  if (authToken) {
    api.defaults.headers.common["Bearer"] = authToken;
    localStorage.setItem("token", authToken);
    localStorage.setItem("isAuth", true);
  } else {
    delete api.defaults.headers.common["Bearer"];
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
  }
};

export default setAuthToken;
