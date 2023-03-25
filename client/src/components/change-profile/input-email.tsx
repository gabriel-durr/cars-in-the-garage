import { OptionChangeProps } from "@typings/form-types";

import { useEffect } from "react";
import {
	Text,
	Input,
	Stack,
	VStack,
	FormLabel,
	FormControl,
} from "@chakra-ui/react";

type InputEmailProps = Omit<OptionChangeProps, "reset">;

export const InputEmail = ({
	errors,
	register,
	profileOrigin,
	setIsVisibleButton,
}: InputEmailProps) => {
	const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

	useEffect(() => {
		setIsVisibleButton(true);

		return () => setIsVisibleButton(false);
	}, []);

	return (
		<VStack spacing={{ base: 8, md: 5 }} align="start">
			<Stack
				flexDir={{ base: "column", md: "row" }}
				justify="end"
				align={{ base: "start", md: "end" }}
				fontSize=".9rem">
				<Text
					whiteSpace="nowrap"
					textTransform="uppercase"
					color="my.white"
					fontWeight="bold"
					mr="4">
					Email atual:
				</Text>
				<Text
					color="my.goldenLight"
					textShadow="0px 0px 8px black"
					fontWeight="medium"
					borderBottom="1px solid #ffffff1a">
					{profileOrigin?.email}
				</Text>
			</Stack>

			<FormControl
				display="flex"
				flexDir={{ base: "column", md: "row" }}
				justifyContent="end"
				alignItems="start">
				<FormLabel
					textTransform="uppercase"
					whiteSpace="nowrap"
					color="my.white"
					fontSize={{ base: ".79rem", md: ".9rem" }}
					fontWeight="bold">
					Novo email:
				</FormLabel>

				<Input
					type="text"
					variant="customLight"
					placeholder="Digite aqui um novo nome"
					{...register("email", {
						minLength: {
							value: 5,
							message: "Minimo de 5 Caracteres",
						},
						pattern: {
							value: validateEmail,
							message: "Informe um email válido",
						},
						validate: value =>
							value !== profileOrigin?.email || "O email deve ser diferente",
					})}
				/>
			</FormControl>
			<Text color="my.error" h="18px">
				{errors.email && errors?.email.message}
			</Text>
		</VStack>
	);
};
