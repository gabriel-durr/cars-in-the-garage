import {EditableInput} from "./editable-input";
import {formatBitcoin} from "../utils/formatBitcoin";
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
} from "@chakra-ui/react";

type EditProps = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	_id: string;
	description: string;
	price: string;
};

export const ModalUpdate = ({
	isOpen,
	onClose,
	onOpen,
	_id,
	description,
	price,
}: EditProps) => {
	const inputPrice = useRef<HTMLInputElement>(null);
	const inputDescription = useRef<HTMLInputElement>(null);

	async function handleSubmit(event: React.FormEvent<unknown>) {
		event.preventDefault();

		let priceValue = inputPrice.current?.value.toString();
		let description = inputDescription.current?.value;

		const price = formatBitcoin(priceValue);
		console.log(description);

		const res = await updateCar(_id, {price, description});
		console.log(res);
	}

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} size="3xl">
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
									textAlign="center"
									color="#5400e6"
									fontSize="0.96rem">
									PREÇO
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
									color="#5400e6"
									textAlign="center"
									fontSize="0.96rem">
									DESCRIÇÃO
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
