import { useUserData } from "@hooks/use-user-data";
import { LoadingAnimation } from "@components/loading-animation";

import { RxExit } from "react-icons/rx";
import { NavigateFunction } from "react-router-dom";

import {
	HStack,
	Avatar,
	IconButton,
	Text,
	VStack,
	Divider,
} from "@chakra-ui/react";

type GarageButtonsProps = {
	handleSignOut: () => void;
	navigate: NavigateFunction;
};

export const GarageButtons = ({
	navigate,
	handleSignOut,
}: GarageButtonsProps) => {
	const { isLoading, user } = useUserData();

	function handleRouteProfile() {
		navigate("/profile");
	}

	if (isLoading) return <LoadingAnimation />;

	return (
		<HStack spacing={{ base: 4, sm: 6, lg: 16 }}>
			<VStack
				onClick={handleRouteProfile}
				cursor="pointer"
				borderRadius="full"
				bg="gray.200"
				p={{ base: 2, xl: 3 }}
				shadow="sm"

				// borderRight="1px solid #0e0c0a17"
			>
				<Avatar
					boxSize={{ base: "1.6rem", sm: "2rem", md: "2.2rem", lg: "2.4rem" }}
					name={user?.name}
					src={user?.avatar}
				/>
				<Text
					textTransform="uppercase"
					fontSize={{ base: ".4rem", lg: ".5rem", xl: ".6rem" }}
					letterSpacing="2px"
					fontFamily="Roboto Slab"
					color="gray.700"
					fontWeight="bold">
					Perfil
				</Text>
			</VStack>

			<IconButton
				color="red.300"
				_hover={{
					color: "red.500",
					transition: "color .4s",
				}}
				fontSize={{ base: 20, md: 24 }}
				aria-label="Button para sair da conta"
				icon={<RxExit />}
				onClick={handleSignOut}
			/>
		</HStack>
	);
};
