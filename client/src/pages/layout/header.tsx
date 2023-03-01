import {useAuth} from "../../hooks/use-auth";
import {HomeButtons} from "../../components/menu/home-buttons";
import {GarageButtons} from "../../components/menu/garage-buttons";
import {ProfileButtons} from "../../components/menu/profile-buttons";
import {SignOutConfirm} from "../../components/menu/sign-out-confirm";

import {useLocation, Link, useNavigate} from "react-router-dom";
import {Flex, HStack, Heading, Image, useDisclosure} from "@chakra-ui/react";

export const Header = () => {
	const {authSignOut} = useAuth();
	const navigate = useNavigate();
	const {pathname} = useLocation();
	const {isOpen, onClose, onOpen} = useDisclosure();

	const isRouteHome = pathname === "/";
	const isRouteGarage = pathname === "/garage";
	const isRouteProfile = pathname === "/profile";

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
			minH="28"
			px="4%"
			align="center"
			justify="space-around"
			gap="8"
			bg="whiteAlpha.400"
			shadow="sm">
			<HStack>
				<Link
					to="/"
					style={{
						color: "#000000de",
						display: "flex",
						alignItems: "flex-end",
						gap: "14px",
						textDecoration: "none",
					}}>
					<Image src="/logo.png" w="12" h="12" />

					<Heading
						fontFamily="Oswald"
						textTransform="uppercase"
						textShadow="0px 2px 2px #ca991238">
						Cars in The Garage
					</Heading>
				</Link>
			</HStack>
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
