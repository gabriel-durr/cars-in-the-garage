import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(inputAnatomy.keys);

const customLight = definePartsStyle({
	field: {
		rounded: 2,
		w: "254px",
		h: "31.8px",
		px: "14px",
		fontSize: ".88rem",
		border: "1px solid gray",
		color: "gray.900",
		bg: "my.light",
	},
});

export const inputTheme = defineMultiStyleConfig({
	variants: { customLight },
});
