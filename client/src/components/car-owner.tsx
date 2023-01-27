import {Flex, HStack, VStack, Heading, Text, Avatar} from "@chakra-ui/react";

type OwnerProps = {
	name: string;
	avatar: string;
	email: string;
	phone: string;
};

export const CarOwner = ({name, avatar, email, phone}: OwnerProps) => {
	return (
		<Flex direction="column" gap="6" w="full">
			<Heading
				w="min-content"
				size="xs"
				textTransform="uppercase"
				borderBottom="1px solid #6f6f6f40">
				Proprietário
			</Heading>
			<HStack w="100%" justify="space-between">
				<VStack color="gray.800" fontSize="0.8rem" w="100%" align="start">
					<Text>
						<Text fontWeight="bold" as="span">
							Nome:{" "}
						</Text>
						{name}
					</Text>
					<Text>
						<Text fontWeight="bold" as="span">
							Email:{" "}
						</Text>
						{email}
					</Text>
					<Text>
						<Text fontWeight="bold" as="span">
							Telefone:{" "}
						</Text>
						{phone}
					</Text>
				</VStack>

				<Avatar size="md" name="Segun Adebayo" src={avatar} />
			</HStack>
		</Flex>
	);
};
