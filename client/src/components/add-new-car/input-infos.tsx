import {speedList} from "../../utils/speed-list";
import {FormPriceProps} from "../../@types/form-types";

import {
	FormControl,
	HStack,
	FormLabel,
	Input,
	Select,
	Text,
} from "@chakra-ui/react";
import {CarYear} from "./car-year";

type InputsInfosProps = FormPriceProps;

export const InputInfos = ({register, errors}: InputsInfosProps) => {
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
					color="gray.800"
					fontWeight="medium"
					fontSize="0.97rem"
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
