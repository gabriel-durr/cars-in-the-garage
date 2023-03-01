import {useRef} from "react";
import {
	AlertDialog,
	AlertDialogOverlay,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogCloseButton,
	AlertDialogFooter,
	Button,
} from "@chakra-ui/react";

type SignOutConfirmProps = {
	onClose: () => void;
	isOpen: boolean;
	confirmDelete: (confirm: boolean) => void;
};

export const SignOutConfirm = ({
	onClose,
	isOpen,
	confirmDelete,
}: SignOutConfirmProps) => {
	const cancelRef = useRef<any>();

	return (
		<AlertDialog
			motionPreset="slideInBottom"
			leastDestructiveRef={cancelRef}
			onClose={onClose}
			isOpen={isOpen}
			isCentered>
			<AlertDialogOverlay />

			<AlertDialogContent>
				<AlertDialogHeader
					pl="8"
					fontFamily="Roboto Slab"
					color="my.mustard"
					fontSize="2xl"
					fontWeight="medium">
					Tem certeza que deseja sair?
				</AlertDialogHeader>
				<AlertDialogCloseButton />
				<AlertDialogFooter alignItems="center" justifyContent="center">
					<Button
						flex="1"
						rounded="2"
						textTransform="uppercase"
						colorScheme="green"
						transition="all .4s"
						fontWeight="bold"
						ref={cancelRef}
						onClick={() => confirmDelete(false)}>
						cancelar
					</Button>
					<Button
						flex="1"
						textTransform="uppercase"
						color="#e3e3e3"
						fontWeight="black"
						rounded="2"
						onClick={() => confirmDelete(true)}
						variant="unstyled"
						bg="red.400"
						_hover={{
							bg: "red.500",
							transition: "bg .4s ease",
						}}
						ml={3}>
						sair
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
