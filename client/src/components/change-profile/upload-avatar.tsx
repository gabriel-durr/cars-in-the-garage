import { UploadAvatarProps } from "@typings/form-types";

import ImageUploading from "react-images-uploading";

import { Box } from "@chakra-ui/react";

type AvatarType = UploadAvatarProps["avatar"];

export const UploadAvatar = ({
	setValue,
	setAvatar,
	avatar,
}: UploadAvatarProps) => {
	const maxNumber = 1;
	const isHaveAvatar = avatar.length > 0;

	const onChange = (avatar: AvatarType, _: any) => {
		const photoUrl = avatar[0].dataURL as string;

		setValue("avatar", photoUrl);

		setAvatar(avatar);
	};

	function handleRemoveAvatar() {
		setAvatar([]);
		setValue("avatar", "");
	}

	return (
		<>
			<ImageUploading
				multiple
				value={avatar}
				onChange={onChange}
				acceptType={["jpg", "jpeg", "png"]}
				maxNumber={maxNumber}>
				{({ onImageUpload, dragProps }) => (
					<Box
						{...dragProps}
						pos="absolute"
						gap="12"
						zIndex="1"
						bottom="0"
						w="full"
						width="100%"
						draggable={false}
						height="48px"
						padding="6px"
						userSelect="none"
						cursor="pointer"
						transition="background .4s"
						fontWeight="thin"
						background="#000000d9"
						borderRadius="4%"
						fontSize="0.74rem"
						textAlign="center"
						color={isHaveAvatar ? "my.redLove" : "#fff"}
						onClick={
							isHaveAvatar ? () => handleRemoveAvatar() : () => onImageUpload()
						}
						_hover={{
							background: "#020101f1",
							fontWeight: "medium",
						}}>
						{isHaveAvatar ? "Cancelar" : "Alterar Foto"}
					</Box>
				)}
			</ImageUploading>
		</>
	);
};
