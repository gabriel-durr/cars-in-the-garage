import { speedList } from "@utils/speed-list";
import { FormPriceProps } from "@typings/form-types";

import {
	Text,
	Input,
	Stack,
	Select,
	FormLabel,
	FormControl,
} from "@chakra-ui/react";

type InputsInfosProps = FormPriceProps;

export const InputInfos = ({ register, errors }: InputsInfosProps) => {
	return (
		<Stack
			direction={{ base: "column", lg: "row" }}
			justify="space-between"
			align="center"
			textTransform="uppercase"
			color="my.title_form">
			<FormControl isRequired pos="relative">
				<FormLabel fontSize={{ base: ".92rem", md: ".98rem" }}>
					Modelo
				</FormLabel>
				<Input
					variant="customLight"
					{...register("model", {
						required: "Informe o nome do Modelo do carro",
					})}
				/>
				<Text pos="absolute" pt="0.7rem" color="my.error" fontSize="0.8rem">
					{errors.model && errors.model.message}
				</Text>
			</FormControl>

			<FormControl isRequired pos="relative">
				<FormLabel fontSize={{ base: ".92rem", md: ".98rem" }}>Preço</FormLabel>

				<Input
					variant="customLight"
					{...register("price", {
						required: "Informe o Preço do carro",
						minLength: {
							value: 4,
							message: "Preço ter pelo menos 4 Caracteres",
						},
					})}
				/>
				<Text
					pos="absolute"
					pl="1"
					pt="0.7rem"
					color="my.error"
					fontSize="0.8rem">
					{errors.price && errors.price.message}
				</Text>
			</FormControl>

			<FormControl isRequired pos="relative">
				<FormLabel fontSize={{ base: ".91rem", md: ".94rem" }}>
					Velocidade
				</FormLabel>
				<Select
					rounded="2"
					w="254px"
					h="31.8px"
					fontSize=".88rem"
					border="1px solid gray"
					color="gray.900"
					bg="my.light"
					fontFamily="Roboto Slab"
					sx={{
						"&::-webkit-scrollbar": {
							w: "4px",
						},
						"&::-webkit-scrollbar-thumb": {
							bg: "gray",
							borderRadius: "full",
						},
					}}
					{...register("speed", {
						required: "Informe a velocidade do carro",
					})}
					placeholder="Selecionar Velocidade">
					{speedList.map(speed => (
						<option value={speed}>{speed}</option>
					))}
				</Select>
				<Text
					pos="absolute"
					pl="1"
					pt="0.7rem"
					color="my.error"
					fontSize="0.8rem">
					{errors.speed && errors.speed.message}
				</Text>
			</FormControl>
		</Stack>
	);
};
