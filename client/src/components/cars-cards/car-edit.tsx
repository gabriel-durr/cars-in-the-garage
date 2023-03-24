import { CarDelete } from "./car-delete";
import { ModalUpdate } from "./modal-update";

import { BsThreeDotsVertical } from "react-icons/bs";
import { RepeatIcon, DeleteIcon } from "@chakra-ui/icons";

import { useState } from "react";
import {
	Menu,
	Icon,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	useDisclosure,
	AbsoluteCenter,
} from "@chakra-ui/react";

type CardEditProps = {
	_id: string;
	description: string;
	price: string;
};

export const CarEdit = ({ _id, description, price }: CardEditProps) => {
	const [specificId, setSpecificId] = useState("");

	const {
		isOpen: isOpenDelete,
		onOpen: onOpenDelete,
		onClose: onCloseDelete,
	} = useDisclosure();

	const {
		isOpen: isOpenUpdate,
		onClose: onCloseUpdate,
		onOpen: onOpenUpdate,
	} = useDisclosure();

	function openAlert() {
		onOpenDelete();
		setSpecificId(_id);
	}

	function handleOpenUpdate() {
		onOpenUpdate();
	}

	return (
		<Menu>
			<MenuButton
				as={Button}
				pos="relative"
				variant="ghost"
				fontSize={{ base: "1.18rem", md: "1.28rem" }}
				transition="background .8s"
				maxW="1px"
				colorScheme="gray"
				aria-label="Menu de Opções">
				<AbsoluteCenter>
					<Icon as={BsThreeDotsVertical} />
				</AbsoluteCenter>
			</MenuButton>
			<MenuList minW="min-content" fontFamily="Oswald">
				<MenuItem
					onClick={handleOpenUpdate}
					fontSize={{ base: "xs", md: "sm" }}
					icon={<RepeatIcon fontSize="sm" color="yellow.500" />}>
					Atualizar
					<ModalUpdate
						_id={_id}
						description={description}
						price={price}
						isOpenUp={isOpenUpdate}
						onCloseUp={onCloseUpdate}
					/>
				</MenuItem>

				<MenuItem
					onClick={openAlert}
					fontSize={{ base: "xs", md: "sm" }}
					icon={<DeleteIcon fontSize="xs" color="red.500" />}>
					Excluir
					<CarDelete
						specificId={specificId}
						isOpenDel={isOpenDelete}
						onCloseDel={onCloseDelete}
						onOpenDel={onOpenDelete}
					/>
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
