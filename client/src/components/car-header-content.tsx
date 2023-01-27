import {CarEdit} from "./car-edit";
import {Cars} from "../types";

import {Heading, HStack, VStack, Image} from "@chakra-ui/react";

type CardHeaderProps = Cars & {
	message: string;
	setMessage: (message: string) => void;
};

export const CarHeaderContent = ({
	_id,
	description,
	price,
	model,
	brandIcon,
	message,
	setMessage,
}: CardHeaderProps) => {
	return (
		<VStack gap="4" align="center">
			<HStack justify="space-between" w="100%">
				<HStack w="78%" justify="space-between">
					<Heading size="sm">{model}</Heading>
					<Image w="28px" src={brandIcon} alt={model} />
				</HStack>

				<CarEdit
					_id={_id}
					description={description}
					price={price}
					message={message}
					setMessage={setMessage}
				/>
			</HStack>
		</VStack>
	);
};
