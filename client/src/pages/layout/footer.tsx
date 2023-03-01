import {Link} from "react-router-dom";
import {IconType} from "react-icons";
import {HStack, Icon, Text} from "@chakra-ui/react";
import {ImLinkedin, ImGithub, ImNewTab} from "react-icons/im";

type SocialMediaTypes = {
	id: string;
	url: string;
	size: number;
	icon: IconType;
	label: string;
}[];

export const Footer = () => {
	const socialMedia: SocialMediaTypes = [
		{
			id: "linkedIn",
			url: "https://www.linkedin.com/in/gabriel-durr/",
			size: 28,
			icon: ImLinkedin,
			label: "Link para meu perfil LinkedIn",
		},
		{
			id: "Github",
			url: "https://github.com/gabriel-durr",
			size: 32,
			icon: ImGithub,
			label: "Link para meu perfil Github",
		},
		{
			id: "Portfolio",
			url: "https://www.gabrieldurr.site/",
			size: 32,
			icon: ImNewTab,
			label: "Link para meu Portfolio",
		},
	];

	return (
		<HStack
			pos="fixed"
			bottom="0"
			as="footer"
			w="full"
			h="20"
			justify="center"
			bg="gray.900">
			<HStack spacing="8" mr="8">
				{socialMedia.map(({id, url, size, label, icon}) => (
					<Link key={id} to={url} target="_blank">
						<Icon
							aria-label={label}
							fontSize={size}
							as={icon}
							color="gray.400"
						/>
					</Link>
				))}
			</HStack>

			<Text fontFamily="sans-serif" color="my.mustard">
				By{" "}
				<Text as="strong" fontFamily="Oswald" color="whiteAlpha.800">
					Gabriel Dürr M.
				</Text>
			</Text>
		</HStack>
	);
};
