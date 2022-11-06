import { combineReducers } from "@reduxjs/toolkit";
import navbarToggler from "./navbarSlice";
import scrolling from "./scrollSlice";
import sidebarToggler from "./sidebarSlice";

export const rootReducer = combineReducers({
	scroll: scrolling,
	sidebar: sidebarToggler,
	navbar: navbarToggler,
});
