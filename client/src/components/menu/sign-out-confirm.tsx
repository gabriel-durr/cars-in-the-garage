import { useRef } from "react";
import {
	Button,
	AlertDialog,
	AlertDialogOverlay,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogCloseButton,
	AlertDialogFooter,
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

			<AlertDialogContent w="90%" alignItems="start" justifyContent="start">
				<AlertDialogHeader
					fontFamily="Roboto Slab"
					color="my.mustard"
					fontSize={["md", "2xl"]}
					fontWeight="medium">
					Tem certeza que deseja sair?
				</AlertDialogHeader>
				<AlertDialogCloseButton />
				<AlertDialogFooter w="100%">
					<Button
						w="50%"
						rounded="2"
						fontSize={["sm", "md"]}
						textTransform="uppercase"
						colorScheme="green"
						transition="all .4s"
						fontWeight="bold"
						ref={cancelRef}
						onClick={() => confirmDelete(false)}>
						cancelar
					</Button>
					<Button
						w="50%"
						rounded="2"
						fontSize={["sm", "md"]}
						textTransform="uppercase"
						color="#e3e3e3"
						fontWeight="black"
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
