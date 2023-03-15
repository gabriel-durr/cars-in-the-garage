import { OptionChangeProps } from "@typings/form-types";
import { EditableInput } from "@components/editable-input";

import { useEffect } from "react";
import {
	Text,
	Input,
	HStack,
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
		<VStack spacing="4">
			<HStack w="100%" spacing="4" fontSize=".9rem">
				<Text textTransform="uppercase" color="my.white" fontWeight="bold">
					Email atual:
				</Text>
				<Text
					color="my.goldenLight"
					fontSize=".94rem"
					textShadow="0px 0px 8px black"
					fontWeight="medium">
					{profileOrigin?.email}
				</Text>
			</HStack>
			<FormControl
				display="flex"
				w="100%"
				justifyContent="space-between"
				alignItems="end">
				<FormLabel
					textTransform="uppercase"
					color="my.white"
					fontSize=".9rem"
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
