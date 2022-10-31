import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Guest/LandingPage";

const SetupRouter = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default SetupRouter;
