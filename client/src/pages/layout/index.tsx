import { Footer } from "./footer";
import { Header } from "./header";

import { Outlet } from "react-router-dom";

import { Flex } from "@chakra-ui/react";

export const Layout = () => {
	return (
		<Flex w="100vw" h="100vh" direction="column">
			<Header />
			<Outlet />
			<Footer />
		</Flex>
	);
};
