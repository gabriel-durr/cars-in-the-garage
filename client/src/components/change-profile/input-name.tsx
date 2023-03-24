import { OptionChangeProps } from "@typings/form-types";

import { useEffect } from "react";
import {
	Text,
	Input,
	VStack,
	Stack,
	FormLabel,
	FormControl,
} from "@chakra-ui/react";

type InputNameProps = Omit<OptionChangeProps, "reset">;

export const InputName = ({
	errors,
	register,
	profileOrigin,
	setIsVisibleButton,
}: InputNameProps) => {
	useEffect(() => {
		setIsVisibleButton(true);

		return () => setIsVisibleButton(false);
	}, []);

	return (
		<VStack spacing="5" align="start">
			<Stack flexDir={{ base: "column", md: "row" }} justify="end" align="end">
				<Text
					textTransform="uppercase"
					color="my.titleFormLight"
					fontSize=".9rem"
					fontWeight="bold"
					mr="4">
					Nome atual:
				</Text>
				<Text
					color="my.goldenLight"
					textShadow="0px 0px 8px black"
					fontWeight="medium">
					{profileOrigin?.name}
				</Text>
			</Stack>

			<FormControl
				display="flex"
				flexDir={{ base: "column", md: "row" }}
				justifyContent="end">
				<FormLabel
					textTransform="uppercase"
					whiteSpace="nowrap"
					color="my.titleFormLight"
					fontSize=".9rem"
					fontWeight="bold">
					Novo nome:
				</FormLabel>

				<Input
					type="text"
					variant="customLight"
					placeholder="Digite aqui um novo nome"
					{...register("name", {
						required: "É necessário informar um nome",
						minLength: {
							value: 4,
							message: "O nome deve ter no minimo 4 Caracteres",
						},
						validate: value =>
							value !== profileOrigin.name ||
							"Esse nome já esta sendo utilizado.",
					})}
				/>
			</FormControl>
			<Text color="my.error" h="18px">
				{errors.name && errors.name.message}
			</Text>
		</VStack>
	);
};
