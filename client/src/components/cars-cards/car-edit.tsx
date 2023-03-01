import {CarDelete} from "./car-delete";
import {ModalUpdate} from "./modal-update";

import {RepeatIcon, DeleteIcon} from "@chakra-ui/icons";
import {BsThreeDotsVertical} from "react-icons/bs";
import {useState} from "react";
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

export const CarEdit = ({_id, description, price}: CardEditProps) => {
	const [specificId, setSpecificId] = useState("");
	const {
		isOpen: isOpenDel,
		onOpen: onOpenDel,
		onClose: onCloseDel,
	} = useDisclosure();

	const {
		isOpen: isOpenUp,
		onClose: onCloseUp,
		onOpen: onOpenUp,
	} = useDisclosure();

	function openAlert() {
		onOpenDel();
		setSpecificId(_id);
	}

	function handleOpenUpdate() {
		onOpenUp();
	}

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
					onClick={handleOpenUpdate}
					icon={<RepeatIcon fontSize="sm" color="yellow.500" />}>
					Atualizar
					<ModalUpdate
						_id={_id}
						description={description}
						price={price}
						isOpenUp={isOpenUp}
						onCloseUp={onCloseUp}
					/>
				</MenuItem>

				<MenuItem
					onClick={openAlert}
					icon={<DeleteIcon fontSize="xs" color="red.500" />}>
					Excluir
					<CarDelete
						specificId={specificId}
						isOpenDel={isOpenDel}
						onCloseDel={onCloseDel}
						onOpenDel={onOpenDel}
					/>
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
