import { useUserData } from "@hooks/use-user-data";
import { LoadingAnimation } from "@components/loading-animation";
import { UploadAvatar } from "@components/change-profile/upload-avatar";
import { OptionsChange } from "@components/change-profile/options-change";
import { FormProfileInputs, UploadAvatarProps } from "@typings/form-types";

import { useForm } from "react-hook-form";

import { useState } from "react";
import {
	Box,
	Flex,
	Stack,
	Avatar,
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
				justifyContent={{ base: "space-between", lg: "space-evenly" }}
				alignItems="center"
				h={["560px", "590px", "600px", "500px"]}
				w={["xs", "sm", "container.sm", "container.lg"]}
				bg="my.dark"
				rounded="sm">
				<Stack
					pos="relative"
					p={{ base: 2, md: 8 }}
					direction={{ base: "column", lg: "row" }}
					w={{ base: "100%", lg: "90%" }}
					h={{ base: "90%", lg: "75%" }}
					spacing={{ base: 8, lg: 12 }}
					align={{ base: "center", lg: "start" }}
					justify="space-around">
					<Avatar
						pos="relative"
						overflow="hidden"
						name={profileOrigin?.name}
						src={originAvatarOrUp}
						borderWidth="4px"
						borderColor="#999999"
						size={{ base: "xl", md: "2xl" }}>
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
							bottom={[5, 8, 14]}
							right={["12.6%", "18.5%", "22.4%", "21.1%", "21.3%"]}
							isDisabled={isDisabled}
							value="Alterar informações"
							onClick={handleSubmit(handleOnSubmit)}>
							Alterar Informações
						</Button>
					)}
				</Stack>

				<Box
					h={{ base: "10%", lg: "25%" }}
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
