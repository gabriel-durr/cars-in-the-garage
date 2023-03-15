import Home from "../App";
import {Auth} from "@pages/auth";
import {Layout} from "@pages/layout";
import {Profile} from "@pages/profile";
import {ErrorPage} from "@pages/error-page";
import {PrivateRoute} from "./private-route";
import {DashboardGarage} from "@pages/dashboard-garage";

import {BrowserRouter, Routes, Route} from "react-router-dom";

const Pages = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
					<Route index element={<Home />} />
					<Route path="/auth" element={<Auth />} />
					<Route
						path="/dashboard-garage"
						element={
							<PrivateRoute component={DashboardGarage} redirectTo="/auth" />
						}
					/>
					<Route
						path="/profile"
						element={<PrivateRoute component={Profile} redirectTo="/auth" />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Pages;
