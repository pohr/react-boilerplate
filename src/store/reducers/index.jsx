import { combineReducers } from "redux";
import count from "./count";
import fetch from "./fetch";

export default combineReducers({ count, fetch });
