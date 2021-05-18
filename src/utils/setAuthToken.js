import api from "../api/axios";

const setAuthToken = (adminAuthToken) => {
  if (adminAuthToken) {
    api.defaults.headers.common["Bearer"] = adminAuthToken;
    localStorage.setItem("admintoken", adminAuthToken);
  } else {
    delete api.defaults.headers.common["Bearer"];
    localStorage.removeItem("admintoken");
  }
};

export default setAuthToken;
