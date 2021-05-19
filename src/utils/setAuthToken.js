import api from "../api/axios";

export const setAuthToken = (adminAuthToken) => {
  if (adminAuthToken) {
    api.defaults.headers.common["Bearer"] = adminAuthToken;
    localStorage.setItem("admintoken", adminAuthToken);
  } else {
    delete api.defaults.headers.common["Bearer"];
    localStorage.removeItem("admintoken");
  }
};


export const setUserAuthToken = (userAuthToken) => {
  if (userAuthToken) {
    api.defaults.headers.common["Bearer"] = userAuthToken;
    localStorage.setItem("usertoken", userAuthToken);
  } else {
    delete api.defaults.headers.common["Bearer"];
    localStorage.removeItem("usertoken");
  }
};


