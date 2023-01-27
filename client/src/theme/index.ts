import {extendTheme} from "@chakra-ui/react";

const colors = {
	my: {
		100: "#5967b8",
		200: "#ef2159",
		300: "#a9d4af",
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
