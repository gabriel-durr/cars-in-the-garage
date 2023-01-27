import {EditableInput} from "./editable-input";
import {formatBitcoin} from "../utils/format-bitcoin";
import {updateCar} from "./../services/requests";

import React, {useRef} from "react";
import {
	Modal,
	Button,
	FormControl,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	ModalCloseButton,
	ModalHeader,
	FormLabel,
	useToast,
} from "@chakra-ui/react";

type EditProps = {
	_id: string;
	description: string;
	price: string;
	isOpenUp: boolean;
	onCloseUp: () => void;
	message: string;
	setMessage: (message: string) => void;
};

export const ModalUpdate = ({
	_id,
	description,
	price,
	isOpenUp,
	onCloseUp,
	message,
	setMessage,
}: EditProps) => {
	const inputPrice = useRef<HTMLInputElement>(null);
	const inputDescription = useRef<HTMLInputElement>(null);

	const toast = useToast();

	async function handleSubmit(event: React.FormEvent<unknown>) {
		event.preventDefault();

		let priceValue = formatBitcoin(inputPrice.current?.value.toString());
		let descriptionValue = inputDescription.current?.value;

		if (!priceValue || !descriptionValue) {
			toast({
				title: "Os campos não podem ficar vázios",
				status: "warning",
				isClosable: true,
				position: "top",
			});
			return;
		}

		const res = await updateCar(_id, {
			price: priceValue,
			description: descriptionValue,
		});

		setMessage(res);

		toast({
			title: message,
			status: "success",
			isClosable: true,
			position: "top",
		});

		onCloseUp();
	}

	return (
		<>
			<Modal isOpen={isOpenUp} onClose={onCloseUp} size="3xl">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader
						bg="gold"
						color="purple.900"
						fontSize="lg"
						fontWeight="bold"
						textAlign="center">
						Atualizar informações do Carro
					</ModalHeader>
					<ModalCloseButton
						bg="orange.400"
						transition="all ease .5s"
						_hover={{
							bg: "orange.600",
						}}
					/>
					<ModalBody>
						<form>
							<FormControl onSubmit={handleSubmit} mb="12">
								<FormLabel
									textTransform="uppercase"
									textAlign="center"
									color="#5400e6"
									fontSize="0.96rem">
									preço
								</FormLabel>
								<EditableInput
									defaultValue={price}
									inputType="number"
									isPreviewFocus
									textSize="sm"
									inputRef={inputPrice}
								/>
							</FormControl>

							<FormControl>
								<FormLabel
									textTransform="uppercase"
									color="#5400e6"
									textAlign="center"
									fontSize="0.96rem">
									descrição
								</FormLabel>
								<EditableInput
									defaultValue={description}
									isTextArea
									textSize="sm"
									inputRef={inputDescription}
								/>
							</FormControl>
						</form>
					</ModalBody>
					<ModalFooter justifyContent="center">
						<Button
							textTransform="uppercase"
							shadow="sm"
							h="8"
							w="32"
							type="submit"
							onClick={handleSubmit}>
							Enviar
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
