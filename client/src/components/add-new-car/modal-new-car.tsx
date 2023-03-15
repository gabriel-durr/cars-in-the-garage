import { CarYear } from "./car-year";
import { useForm } from "react-hook-form";
import { InputInfos } from "./input-infos";
import { SelectBrand } from "./select-brand";
import { UploadImages } from "./upload-images";
import { useUserData } from "@hooks/use-user-data";
import { FormNewCarInputs } from "@typings/form-types";
import { TextareaDescription } from "./textarea-description";
import { validationsNewCar } from "@utils/custom-form-validations";

import { useEffect } from "react";
import {
	Modal,
	VStack,
	Button,
	HStack,
	useToast,
	ModalBody,
	ModalHeader,
	ModalFooter,
	ModalContent,
	ModalOverlay,
	ModalCloseButton,
} from "@chakra-ui/react";

type ModalNewCarProps = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

export const ModalNewCar = ({ isOpen, onOpen, onClose }: ModalNewCarProps) => {
	const {
		register,
		handleSubmit,
		setValue,
		clearErrors,
		setError,
		watch,
		reset,
		formState: { errors, isSubmitting, isSubmitted },
	} = useForm<FormNewCarInputs>();

	const [images, brandIcon, year] = watch(["images", "brandIcon", "year"]);

	const toast = useToast();
	const { addNewCar } = useUserData();

	async function handleOnSubmit(data: FormNewCarInputs) {
		try {
			const msg = await addNewCar.mutateAsync({ carData: data });

			toast({
				title: msg,
				status: "success",
				position: "top",
			});

			onClose();
		} catch {}
	}

	useEffect(() => {
		if (!isOpen) {
			clearErrors();
			reset();
		}
	}, [isOpen]);

	useEffect(() => {
		if (isSubmitting) {
			validationsNewCar({
				images,
				brandIcon,
				year,
				clearErrors,
				isSubmitted,
				setError,
			});
		}
	}, [images, brandIcon, year, isSubmitting]);

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="5xl">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader
					bgImg="/wave.svg"
					bgPos="bottom"
					bgSize="cover"
					bgRepeat="no-repeat"
					bgBlendMode="luminosity"
					bgColor="my.dark"
					color="my.goldenLight"
					textShadow="0px 0px 8px black"
					fontFamily="Oswald"
					letterSpacing="wide"
					fontSize="2xl"
					textTransform="uppercase"
					fontWeight="bold"
					textAlign="center">
					Criar um novo carro
				</ModalHeader>
				<ModalCloseButton
					bg="orange.400"
					_hover={{
						bg: "orange.600",
						transition: "background .5s",
					}}
				/>
				<ModalBody>
					<VStack as="form" p="2.4rem" spacing="12" align="center">
						<UploadImages setValue={setValue} errors={errors} />

						<TextareaDescription register={register} errors={errors} />

						<InputInfos register={register} errors={errors} />

						<HStack w="100%" h="80px" justify="center" align="center">
							<CarYear errors={errors} setValue={setValue} />
							<SelectBrand errors={errors} setValue={setValue} />
						</HStack>
					</VStack>
				</ModalBody>
				<ModalFooter
					justifyContent="center"
					w="100%"
					bgSize="cover"
					bgRepeat="no-repeat"
					bgBlendMode="luminosity"
					bgColor="my.dark"
					bgImg="/wave.svg">
					<Button
						type="submit"
						shadow="base"
						variant="customLight"
						onClick={handleSubmit(handleOnSubmit)}>
						Enviar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
