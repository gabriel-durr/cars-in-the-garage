import {HookFormProps} from "../../@types";
import {carBrands} from "../../utils/car-static-data";

import {ChangeEvent, useState} from "react";
import {Select, FormControl, Box, Image, HStack, Text} from "@chakra-ui/react";

//TODO fazer um _hover ao passsar em cada item do select para que a imagem do carro seja exibida como preview antes de clicar

type Brand = {
	name: string;
	logo: string;
};

type SelectBrandProps = HookFormProps;

export const SelectBrand = ({register, errors}: SelectBrandProps) => {
	const [brand, setBrand] = useState({} as Brand);

	function handleSelectLogo(event: ChangeEvent<HTMLInputElement>) {
		const {value: brandSelected} = event.target;

		const brandFiltred = carBrands.find(brand => brand.name === brandSelected);

		setBrand(brandFiltred);
	}

	return (
		<FormControl>
			<>
				<HStack spacing="8">
					<Select
						w="xs"
						placeholder="Selecione a marca"
						{...register("select", {
							required: "É necessário Selecionar uma marca",
							onChange: handleSelectLogo,
						})}>
						{carBrands.map(brand => (
							<option key={brand.name}>
								<Text>{brand.name}</Text>
							</option>
						))}
					</Select>
					<Image src={brand.logo} alt={brand.name} boxSize="16" />
				</HStack>

				{errors.select && alert(errors.select.message)}
			</>
		</FormControl>
	);
};
