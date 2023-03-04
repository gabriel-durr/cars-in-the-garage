import {Flex, HStack, VStack, Heading, Text} from "@chakra-ui/react";

type OwnerProps = {
	name: string;
	email: string;
};

export const CarOwner = ({name, email}: OwnerProps) => {
	return (
		<Flex direction="column" gap="2" w="full">
			<Heading
				alignSelf="start"
				w="min-content"
				size="xs"
				textTransform="uppercase"
				borderBottom="1px solid #6f6f6f40">
				Proprietário
			</Heading>
			<HStack w="90%" justify="space-between">
				<VStack color="gray.800" fontSize="0.8rem" w="100%" align="start">
					<Text as="strong">
						Nome:{" "}
						<Text as="span" fontWeight="medium">
							{name}
						</Text>
					</Text>

					<Text as="strong">
						E-mail:{" "}
						<Text as="span" fontWeight="medium">
							{email}
						</Text>
					</Text>
				</VStack>
			</HStack>
		</Flex>
	);
};
