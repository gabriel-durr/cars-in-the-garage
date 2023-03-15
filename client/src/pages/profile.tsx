import { useUserData } from "@hooks/use-user-data";
import { LoadingAnimation } from "@components/loading-animation";
import { UploadAvatar } from "@components/change-profile/upload-avatar";
import { OptionsChange } from "@components/change-profile/options-change";
import { FormProfileInputs, UploadAvatarProps } from "@typings/form-types";

import { useForm } from "react-hook-form";

import { useState } from "react";
import {
	Flex,
	Box,
	Avatar,
	HStack,
	Button,
	useToast,
	AbsoluteCenter,
} from "@chakra-ui/react";

type AvatarType = UploadAvatarProps["avatar"];

export const Profile = () => {
	const [isVisibleButton, setIsVisibleButton] = useState(false);
	const [avatar, setAvatar] = useState<AvatarType>([]);

	const {
		register,
		setValue,
		handleSubmit,
		watch,
		reset,
		formState: { errors, isValid, isSubmitted },
	} = useForm<FormProfileInputs>();

	const {
		user: { cars, ...profileOrigin },
		isLoading,
		updateUser,
	} = useUserData();

	const toast = useToast();

	const tenSeconds = 7 * 1000;
	const originAvatarOrUp = avatar[0]?.dataURL || profileOrigin?.avatar;
	const errorExists = !!Object.keys(errors).length;
	const isDisabled = (isSubmitted && !isValid) || errorExists;

	async function handleOnSubmit(data: Partial<FormProfileInputs>) {
		try {
			const msg = await updateUser.mutateAsync(data);

			toast({
				title: msg,
				variant: "left-accent",
				status: "success",
				position: "top",
				duration: tenSeconds,
				isClosable: true,
			});
		} catch (error: any) {
			const {
				data: { msg },
			} = error.response;

			toast({
				title: msg,
				variant: "left-accent",
				status: "error",
				position: "top",
				duration: tenSeconds,
				isClosable: true,
			});
		}
	}

	if (isLoading) <LoadingAnimation />;

	return (
		<Flex
			boxSize="full"
			bg="my.dark"
			bgImg="/wave-bg.svg"
			bgPos="center"
			bgRepeat="no-repeat">
			<AbsoluteCenter
				display="flex"
				flexDir="column"
				justifyContent="space-evenly"
				alignItems="center"
				w="container.lg"
				bg="my.dark"
				h="500px"
				rounded="md">
				<HStack
					pos="relative"
					w="90%"
					h="68%"
					spacing="12"
					align="start"
					justify="space-around"
					p="8">
					<Avatar
						pos="relative"
						overflow="hidden"
						name={profileOrigin?.name}
						src={originAvatarOrUp}
						borderWidth="4px"
						borderColor="#999999"
						size="2xl">
						<UploadAvatar
							avatar={avatar}
							setAvatar={setAvatar}
							setValue={setValue}
						/>
					</Avatar>

					<OptionsChange
						errors={errors}
						register={register}
						profileOrigin={profileOrigin}
						reset={reset}
						setIsVisibleButton={setIsVisibleButton}
					/>

					{(Boolean(avatar.length) || isVisibleButton) && (
						<Button
							type="submit"
							variant="customLight"
							pos="absolute"
							bottom="2"
							right="28%"
							isDisabled={isDisabled}
							value="Alterar informações"
							onClick={handleSubmit(handleOnSubmit)}>
							Alterar Informações
						</Button>
					)}
				</HStack>

				<Box
					h="30%"
					w="100%"
					bgSize="cover"
					bgRepeat="no-repeat"
					bgBlendMode="luminosity"
					bgColor="my.dark"
					bgImg="/wave.svg"
				/>
			</AbsoluteCenter>
		</Flex>
	);
};
