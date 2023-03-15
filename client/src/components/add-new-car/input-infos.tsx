import { speedList } from "@utils/speed-list";
import { FormPriceProps } from "@typings/form-types";

import {
	Text,
	Input,
	Select,
	HStack,
	FormLabel,
	FormControl,
} from "@chakra-ui/react";

type InputsInfosProps = FormPriceProps;

export const InputInfos = ({ register, errors }: InputsInfosProps) => {
	return (
		<HStack
			justify="space-between"
			w="100%"
			textTransform="uppercase"
			color="my.title_form"
			fontSize="0.96rem">
			<FormControl isRequired pos="relative">
				<FormLabel>Modelo</FormLabel>
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
				<FormLabel>Preço</FormLabel>

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
				<FormLabel>Velocidade</FormLabel>
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
							width: "4px",
						},
						"&::-webkit-scrollbar-thumb": {
							background: "gray",
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
		</HStack>
	);
};
