import { carBrands } from "@utils/car-brands";
import { FormSelectBrandNewCarProps } from "@typings/form-types";

import { useState } from "react";
import {
	Menu,
	Text,
	Image,
	Stack,
	VStack,
	Button,
	MenuItem,
	MenuList,
	MenuButton,
} from "@chakra-ui/react";

type Brand = {
	name: string;
	logo: string;
};

type SelectBrandProps = FormSelectBrandNewCarProps;

export const SelectBrand = ({ errors, setValue }: SelectBrandProps) => {
	const [brand, setBrand] = useState({} as Brand);
	const [logo, setLogo] = useState("");

	function handleSelectLogo(brand: Brand) {
		setBrand(brand);
		setLogo(brand.logo);

		setValue("brandIcon", brand.name);
	}

	function handleLogoInHover(logo: string) {
		setLogo(logo);
	}

	return (
		<VStack pos={{ lg: "relative" }} left={{ lg: 32 }}>
			<Stack
				direction={{ base: "column", lg: "row" }}
				align="center"
				spacing="8">
				<Menu placement="top" autoSelect offset={[0, -30]}>
					{({ isOpen }) => (
						<>
							<MenuButton as={Button} variant="customLight" isActive={isOpen}>
								{logo ? "Alterar Marca" : "Selecionar uma Marca"}
							</MenuButton>

							<MenuList
								sx={{
									"&::-webkit-scrollbar": {
										w: "4px",
									},

									"&::-webkit-scrollbar-thumb": {
										bg: "gray",
										borderRadius: "full",
									},
									h: "270px",
									overflowY: "scroll",
									scrollBehavior: "auto",
								}}>
								{carBrands.map(brand => (
									<MenuItem
										key={brand.name}
										p="4"
										fontSize="md"
										onClick={() => handleSelectLogo(brand)}
										onMouseEnter={() => handleLogoInHover(brand.logo)}>
										{brand.name}
									</MenuItem>
								))}
							</MenuList>
						</>
					)}
				</Menu>
				<Image src={logo} alt={brand.name} boxSize="4.7rem" />
			</Stack>

			<Text
				pos="absolute"
				bottom="-7"
				pl="1"
				pt="2"
				color="my.error"
				fontSize="0.8rem"
				textTransform="uppercase">
				{errors.brandIcon && errors.brandIcon.message}
			</Text>
		</VStack>
	);
};
