import {ModalUpdate} from "./modal-update";
import {CardDelete} from "./card-delete";

import {RepeatIcon, DeleteIcon} from "@chakra-ui/icons";

import {BsThreeDotsVertical} from "react-icons/bs";

import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	useDisclosure,
} from "@chakra-ui/react";

type CardEditProps = {
	_id: string;
	description: string;
	price: string;
};

export const CardEdit = ({_id, description, price}: CardEditProps) => {
	const {isOpen, onOpen, onClose} = useDisclosure();

	return (
		<Menu>
			<MenuButton
				as={Button}
				variant="ghost"
				colorScheme="gray"
				aria-label="See menu"
				rightIcon={<BsThreeDotsVertical />}
			/>
			<MenuList minW="min-content">
				<MenuItem
					onClick={onOpen}
					icon={<RepeatIcon fontSize="sm" color="yellow.500" />}>
					Atualizar
					<ModalUpdate
						onClose={onClose}
						isOpen={isOpen}
						onOpen={onOpen}
						_id={_id}
						description={description}
						price={price}
					/>
				</MenuItem>

				<MenuItem icon={<DeleteIcon fontSize="xs" color="red.500" />}>
					Excluir
					<CardDelete />
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
