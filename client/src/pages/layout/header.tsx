import { useAuth } from "@hooks/use-auth";
import { HomeButtons } from "@components/menu/home-buttons";
import { GarageButtons } from "@components/menu/garage-buttons";
import { ProfileButtons } from "@components/menu/profile-buttons";
import { SignOutConfirm } from "@components/menu/sign-out-confirm";

import { useLocation, Link as RouterLink, useNavigate } from "react-router-dom";

import { Flex, Heading, Link, Image, useDisclosure } from "@chakra-ui/react";

export const Header = () => {
	const { authSignOut } = useAuth();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { isOpen, onClose, onOpen } = useDisclosure();

	const isRouteHome = pathname === "/";
	const isRouteProfile = pathname === "/profile";
	const isRouteGarage = pathname === "/dashboard-garage";

	function handleSignOut() {
		onOpen();
	}

	function handleConfirmSignOut(confirm: boolean) {
		if (confirm) {
			onClose();
			authSignOut();
		}

		return onClose();
	}

	return (
		<Flex
			zIndex="17"
			w="full"
			minH={["74px", "92px", "112px", "84px", "112px"]}
			px="4%"
			align="center"
			justify="space-around"
			gap={8}
			bg="whiteAlpha.400"
			shadow="sm">
			<Link
				as={RouterLink}
				to="/"
				color="#000000de"
				display="flex"
				userSelect="none"
				alignItems="end"
				gap={{ base: "6px", md: "14px" }}
				textDecoration="none">
				<Image src="/logo.png" boxSize={{ base: 8, md: 12 }} />

				<Heading
					size={{ base: "md", md: "xl" }}
					fontFamily="Oswald"
					whiteSpace="nowrap"
					textTransform="uppercase"
					textShadow="0px 2px 2px #ca991238">
					Cars in The Garage
				</Heading>
			</Link>

			<SignOutConfirm
				confirmDelete={handleConfirmSignOut}
				isOpen={isOpen}
				onClose={onClose}
			/>

			{isRouteHome && (
				<HomeButtons navigate={navigate} handleSignOut={handleSignOut} />
			)}

			{isRouteGarage && (
				<GarageButtons navigate={navigate} handleSignOut={handleSignOut} />
			)}

			{isRouteProfile && (
				<ProfileButtons navigate={navigate} handleSignOut={handleSignOut} />
			)}
		</Flex>
	);
};
