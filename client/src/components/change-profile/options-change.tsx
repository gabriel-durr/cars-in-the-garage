import { InputName } from "./input-name";
import { InputEmail } from "./input-email";
import { InputPassword } from "./input-password";
import { OptionChangeProps } from "@typings/form-types";

import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

import { useState } from "react";
import {
	Stack,
	Icon,
	Text,
	VStack,
	Center,
	HStack,
	Flex,
	useDisclosure,
} from "@chakra-ui/react";

type OptionsTabProps = {
	title: string;
	key: "name" | "email" | "password";
}[];

export const OptionsChange = ({
	errors,
	register,
	profileOrigin,
	reset,
	setIsVisibleButton,
}: OptionChangeProps) => {
	const [keyComponent, setKeyComponent] = useState("");

	const optionsTab: OptionsTabProps = [
		{
			title: "Alterar nome",
			key: "name",
		},
		{
			title: "Alterar email",
			key: "email",
		},
		{ title: "Alterar senha", key: "password" },
	];

	const { isOpen, onClose, onOpen } = useDisclosure();

	function handleIsOpenComponent(key: string) {
		setKeyComponent(key);
		onOpen();
	}

	function handleCloseComponent() {
		reset();
		onClose();
	}

	return (
		<Stack boxSize="100%" px="4">
			{isOpen ? (
				<Flex direction="column" boxSize="92%">
					<HStack color="#fff" w="100%" h="40px" bg="#000" px="2">
						<Center
							gap="2"
							fontSize="0.8rem"
							cursor="pointer"
							onClick={handleCloseComponent}>
							<Icon as={TfiAngleLeft} />
							Voltar
						</Center>
					</HStack>
					<VStack
						justify="center"
						align="center"
						boxSize="100%"
						bg="my.ashenGray">
						{keyComponent === "name" && (
							<InputName
								errors={errors}
								register={register}
								profileOrigin={profileOrigin}
								setIsVisibleButton={setIsVisibleButton}
							/>
						)}

						{keyComponent === "email" && (
							<InputEmail
								errors={errors}
								register={register}
								profileOrigin={profileOrigin}
								setIsVisibleButton={setIsVisibleButton}
							/>
						)}
						{keyComponent === "password" && <InputPassword />}
					</VStack>
				</Flex>
			) : (
				optionsTab.map(({ title, key }) => (
					<Text
						key={key}
						pos="relative"
						cursor="pointer"
						p="2"
						color="my.titleFormLight"
						bg="whiteAlpha.100"
						_hover={{
							filter: "brightness(.8)",
							transition: "filter .4s",
						}}
						onClick={() => handleIsOpenComponent(key)}>
						{title}
						<Icon
							pos="absolute"
							right="2"
							fontSize="1.4rem"
							as={TfiAngleRight}
						/>
					</Text>
				))
			)}
		</Stack>
	);
};
