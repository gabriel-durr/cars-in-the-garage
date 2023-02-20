import {FormControl, HStack, FormLabel, Input} from "@chakra-ui/react";

export const InputInfos = () => {
	function testFn() {}

	//TODO Fazer validação dos inputs usando react-hook-form, seguir mesmo padrão dos outros inputs utilizando {...register} e importando as tipagens do form que estão na pasta types

	return (
		<FormControl isRequired>
			<HStack>
				<FormLabel textTransform="uppercase" color="#5400e6" fontSize="0.96rem">
					Modelo
				</FormLabel>
				<Input />
				<FormLabel textTransform="uppercase" color="#5400e6" fontSize="0.96rem">
					Ano
				</FormLabel>
				<Input type="date" datatype="yyyy" /> //TODO Fazer com que esse input de
				data, permita a seleção apenas de anos e mes/dia
				<FormLabel textTransform="uppercase" color="#5400e6" fontSize="0.96rem">
					Velocidade
				</FormLabel>
				<Input type="" />
			</HStack>
		</FormControl>
	);
};
