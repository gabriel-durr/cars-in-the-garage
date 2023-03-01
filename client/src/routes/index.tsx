import Home from "../App";
import {Dashboard} from "../pages/dashboard";
import {ErrorPage} from "../pages/error-page";
import {PrivateRoute} from "./private-route";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Auth} from "../pages/auth";
import {Layout} from "../pages/layout";
import {Profile} from "../pages/profile";

const Pages = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
					<Route index element={<Home />} />
					<Route path="/auth" element={<Auth />} />
					<Route
						path="/garage"
						element={<PrivateRoute component={Dashboard} redirectTo="/auth" />}
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
