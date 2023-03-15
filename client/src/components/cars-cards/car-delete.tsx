import { useUserData } from "@hooks/use-user-data";

import { useRef } from "react";
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
};

export const CarDelete = ({
	specificId,
	isOpenDel,
	onOpenDel,
	onCloseDel,
}: CarDeleteProps) => {
	const cancelRef = useRef(null);
	const toast = useToast();

	const { deleteCar } = useUserData();

	async function confirmDelete() {
		try {
			const msg = await deleteCar.mutateAsync({ carId: specificId });

			toast({
				title: msg,
				status: "success",
				isClosable: true,
				position: "top",
			});

			onCloseDel();
		} catch (error: any) {
			const {
				data: { msg },
			} = error.reponse;

			toast({
				title: msg,
				variant: "left-accent",
				status: "error",
				isClosable: true,
				position: "top",
			});
		}
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
					<AlertDialogHeader>
						Deseja mesmo excluir esse carro?
					</AlertDialogHeader>
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
