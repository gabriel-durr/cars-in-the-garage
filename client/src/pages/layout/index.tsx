import {Footer} from "./footer";
import {Header} from "./header";

import {Flex} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";

export const Layout = () => {
	return (
		<Flex w="100vw" h="100vh" direction="column">
			<Header />
			<Outlet />
			<Footer />
		</Flex>
	);
};
