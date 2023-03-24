import { NavigateFunction } from "react-router-dom";
import { RxCardStack, RxExit } from "react-icons/rx";

import { HStack, IconButton } from "@chakra-ui/react";

type ProfileButtonsProps = {
	navigate: NavigateFunction;
	handleSignOut: () => void;
};

export const ProfileButtons = ({
	handleSignOut,
	navigate,
}: ProfileButtonsProps) => {
	function handleRouteGarage() {
		navigate("/dashboard-garage");
	}

	return (
		<HStack>
			<IconButton
				aria-label="Button para voltar para Garagem"
				fontSize={{ base: 20, md: 24 }}
				icon={<RxCardStack />}
				onClick={handleRouteGarage}
			/>
			<IconButton
				color="red.300"
				_hover={{
					color: "red.500",
					transition: "color .4s",
				}}
				fontSize={{ base: 20, md: 24 }}
				aria-label="Button para fazer Sign Up"
				icon={<RxExit />}
				onClick={handleSignOut}
			/>
		</HStack>
	);
};
