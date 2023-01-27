import {FormControl, HStack, FormLabel, Input} from "@chakra-ui/react";

export const InputInfos = () => {
	function testFn() {}

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

				<Input type="date" datatype="yyyy" />
				<FormLabel textTransform="uppercase" color="#5400e6" fontSize="0.96rem">
					Velocidade
				</FormLabel>
				<Input type="" />
			</HStack>
		</FormControl>
	);
};
