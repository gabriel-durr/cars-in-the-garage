import {NavigateFunction} from "react-router-dom";
import {RxCardStack, RxExit} from "react-icons/rx";

import {HStack, IconButton} from "@chakra-ui/react";

type ProfileButtonsProps = {
	navigate: NavigateFunction;
	handleSignOut: () => void;
};

export const ProfileButtons = ({
	handleSignOut,
	navigate,
}: ProfileButtonsProps) => {
	function handleRouteGarage() {
		navigate("/garage");
	}

	return (
		<HStack>
			<IconButton
				aria-label="Button para voltar para Garagem"
				size="md"
				icon={<RxCardStack fontSize="24" />}
				onClick={handleRouteGarage}
			/>
			<IconButton
				color="red.300"
				_hover={{
					color: "red.500",
					transition: "color .4s",
				}}
				size="md"
				aria-label="Button para fazer Sign Up"
				icon={<RxExit fontSize="24" />}
				onClick={handleSignOut}
			/>
		</HStack>
	);
};
