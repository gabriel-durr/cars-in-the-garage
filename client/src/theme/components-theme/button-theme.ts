import {defineStyle, defineStyleConfig} from "@chakra-ui/react";

const customLight = defineStyle({
	rounded: 2,
	shadow: "sm",
	w: "242px",
	h: "33.2px",
	bg: "#f3f3f4",
	fontSize: ".9rem",
	letterSpacing: "1px",
	color: "gray.800",
	textTransform: "capitalize",
	fontFamily: "Roboto Slab",
});

export const butonTheme = defineStyleConfig({
	variants: {customLight},
});
