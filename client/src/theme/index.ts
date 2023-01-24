import {extendTheme} from "@chakra-ui/react";

const colors = {
	brand: {
		900: "#276C23",
		800: "#153e75",
		700: "#2a69ac",
	},
};
const fonts = {
	body: {
		fontFamily: "Roboto Slab, serif",
		fontWeight: 200,
	},
	heading: {
		fontFamily: "Oswald, sans-serif",
		fontWeight: 700,
	},
};

const styles = {
	global: {
		body: {
			bg: "gray.400",
			color: "gray.700",
			fontSize: "0.88rem",
		},

		a: {
			color: "teal.500",
			_hover: {
				textDecoration: "underline",
			},
		},
	},
};

export const theme = extendTheme({
	fonts,
	colors,
	styles,
});
