import { getTokensOrUserId } from "@storage/storageAuthToken";

import { RiContactsLine } from "react-icons/ri";
import { NavigateFunction } from "react-router-dom";
import { RxCardStack, RxExit } from "react-icons/rx";

import { HStack, IconButton } from "@chakra-ui/react";

type homeButtonProps = {
	navigate: NavigateFunction;
	handleSignOut: () => void;
};

export const HomeButtons = ({ navigate, handleSignOut }: homeButtonProps) => {
	const isToken = getTokensOrUserId("acessToken") !== null;

	function handleRouteAuth() {
		navigate("/auth");
	}

	function handleRouteGarage() {
		navigate("/dashboard-garage");
	}

	if (isToken)
		return (
			<HStack spacing={{ base: 2, md: 4 }}>
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
					aria-label="Button para sair da conta"
					icon={<RxExit />}
					onClick={handleSignOut}
				/>
			</HStack>
		);
	return (
		<IconButton
			aria-label="Button para entrar na conta"
			fontSize={{ base: 24, md: 24 }}
			icon={<RiContactsLine />}
			onClick={handleRouteAuth}
		/>
	);
};
