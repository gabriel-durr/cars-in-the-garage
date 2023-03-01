import {NavigateFunction} from "react-router-dom";
import {useUserData} from "../../hooks/use-user-data";
import {LoadingAnimation} from "../loading-animation";

import {RxExit} from "react-icons/rx";
import {HStack, Avatar, IconButton} from "@chakra-ui/react";

type GarageButtonsProps = {
	handleSignOut: () => void;
	navigate: NavigateFunction;
};

export const GarageButtons = ({
	navigate,
	handleSignOut,
}: GarageButtonsProps) => {
	const {isLoading, user} = useUserData();

	function handleRouteProfile() {
		navigate("/profile");
	}

	if (isLoading) return <LoadingAnimation />;

	return (
		<HStack spacing="14">
			<Avatar
				size="md"
				name={user?.name}
				src={user?.avatar}
				onClick={handleRouteProfile}
				cursor="pointer"
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
};
