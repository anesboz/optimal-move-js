import { combineReducers } from "redux";
import ongletsBranch from "./ongletsReducer"
import data from "./dataReducer"

export default combineReducers({ ongletsBranch, data })
