import {InputInfos} from "./input-infos";
import {SelectBrand} from "./select-brand";
import {UploadImages} from "./upload-images";
import {useUserData} from "../../hooks/use-user-data";
import {TextareaDescription} from "./textarea-description";
import {FormNewCarInputs} from "./../../@types/form-types";
import {customFormValidations} from "../../utils/custom-form-validations";

import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	VStack,
	HStack,
	useToast,
} from "@chakra-ui/react";
import {CarYear} from "./car-year";

type ModalNewCarProps = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

export const ModalNewCar = ({isOpen, onOpen, onClose}: ModalNewCarProps) => {
	const {
		register,
		handleSubmit,
		setValue,
		clearErrors,
		setError,
		watch,
		reset,
		formState: {errors, isSubmitting, isSubmitted},
	} = useForm<FormNewCarInputs>();

	const [images, brandIcon, year] = watch(["images", "brandIcon", "year"]);

	const {addNewCar} = useUserData();
	const toast = useToast();

	async function handleOnSubmit(data: FormNewCarInputs) {
		try {
			const msg = await addNewCar.mutateAsync({carData: data});

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
		customFormValidations({
			images,
			brandIcon,
			year,
			clearErrors,
			isSubmitted,
			setError,
		});
	}, [isSubmitting, images, brandIcon, year]);

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="5xl">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader
					bg="gold"
					color="purple.900"
					fontFamily="Oswald"
					fontSize="2xl"
					letterSpacing="wide"
					textTransform="uppercase"
					fontWeight="bold"
					textAlign="center">
					Criar um novo carro
				</ModalHeader>
				<ModalCloseButton
					bg="orange.400"
					transition="all ease .5s"
					_hover={{
						bg: "orange.600",
					}}
				/>
				<ModalBody>
					<VStack as="form" spacing="8" align="center">
						<UploadImages setValue={setValue} errors={errors} />

						<TextareaDescription register={register} errors={errors} />

						<InputInfos register={register} errors={errors} />

						<HStack w="100%" h="80px" justify="center" align="center">
							<CarYear errors={errors} setValue={setValue} />
							<SelectBrand errors={errors} setValue={setValue} />
						</HStack>
					</VStack>
				</ModalBody>
				<ModalFooter justifyContent="center" w="100%" bg="my.mustard">
					<Button
						shadow="sm"
						h="10"
						w="64"
						type="submit"
						onClick={handleSubmit(handleOnSubmit)}>
						Enviar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
