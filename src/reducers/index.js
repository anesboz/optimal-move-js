import { combineReducers } from "redux";
import onglets from "./ongletsReducer"
import data from "./dataReducer"

export default combineReducers({ onglets, data });
