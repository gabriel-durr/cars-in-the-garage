import { OptionChangeProps } from "@typings/form-types";

import { useEffect } from "react";
import {
	Text,
	Input,
	VStack,
	HStack,
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
		<VStack spacing="4">
			<HStack w="100%" spacing="4" fontSize=".9rem">
				<Text
					textTransform="uppercase"
					color="my.titleFormLight"
					fontWeight="bold">
					Nome atual:
				</Text>
				<Text
					color="my.goldenLight"
					fontSize=".94rem"
					textShadow="0px 0px 8px black"
					fontWeight="medium">
					{profileOrigin?.name}
				</Text>
			</HStack>

			<FormControl
				display="flex"
				w="100%"
				justifyContent="space-between"
				alignItems="end">
				<FormLabel
					textTransform="uppercase"
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
