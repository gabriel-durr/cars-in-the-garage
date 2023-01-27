import {deleteCar} from "../services/requests";

import {useRef} from "react";
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogCloseButton,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	useToast,
} from "@chakra-ui/react";

type CarDeleteProps = {
	specificId: string;
	isOpenDel: boolean;
	onOpenDel: () => void;
	onCloseDel: () => void;
	message: string;
	setMessage: (message: string) => void;
};

export const CarDelete = ({
	specificId,
	isOpenDel,
	onOpenDel,
	onCloseDel,
	message,
	setMessage,
}: CarDeleteProps) => {
	const cancelRef = useRef(null);
	const toast = useToast();

	async function confirmDelete() {
		const res = await deleteCar(specificId);
		setMessage(res);

		toast({
			title: message,
			status: "warning",
			isClosable: true,
			position: "top",
		});

		onCloseDel();
	}

	return (
		<>
			<AlertDialog
				motionPreset="slideInBottom"
				leastDestructiveRef={cancelRef}
				onClose={onCloseDel}
				isOpen={isOpenDel}
				isCentered>
				<AlertDialogOverlay />

				<AlertDialogContent>
					<AlertDialogHeader>Quer excluir esse carro?</AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogBody>
						Se você confirmar o carro será excluído do nosso sistema, e não será
						possível recuperá-lo!
					</AlertDialogBody>
					<AlertDialogFooter>
						<Button colorScheme="green" ref={cancelRef} onClick={onCloseDel}>
							Cancelar
						</Button>
						<Button onClick={confirmDelete} colorScheme="red" ml={3}>
							Excluir
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
};
