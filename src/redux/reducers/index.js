import { combineReducers } from "redux";
import admin from "./admin";
import user from "./user";

export default combineReducers({ admin, user });
