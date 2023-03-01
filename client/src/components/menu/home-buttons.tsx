import {HStack, IconButton} from "@chakra-ui/react";
import {RiContactsLine} from "react-icons/ri";
import {RxCardStack, RxExit} from "react-icons/rx";
import {NavigateFunction} from "react-router-dom";
import {getTokensOrUserId} from "../../storage/storageAuthToken";

type homeButtonProps = {
	navigate: NavigateFunction;
	handleSignOut: () => void;
};

export const HomeButtons = ({navigate, handleSignOut}: homeButtonProps) => {
	const isToken = getTokensOrUserId("acessToken") !== null;

	function handleRouteAuth() {
		navigate("/auth");
	}

	function handleRouteGarage() {
		navigate("/garage");
	}

	if (isToken)
		return (
			<HStack>
				<IconButton
					aria-label="Button para voltar para Garagem"
					size="md"
					icon={<RxCardStack fontSize="24" />}
					onClick={handleRouteGarage}
				/>
				<IconButton
					size="md"
					color="red.300"
					_hover={{
						color: "red.500",
						transition: "color .4s",
					}}
					aria-label="Button para fazer Sign Up"
					icon={<RxExit fontSize="24" />}
					onClick={handleSignOut}
				/>
			</HStack>
		);
	return (
		<IconButton
			size="md"
			aria-label="Icon-Button responsável por fazer Sign"
			icon={<RiContactsLine fontSize="24" />}
			onClick={handleRouteAuth}
		/>
	);
};
