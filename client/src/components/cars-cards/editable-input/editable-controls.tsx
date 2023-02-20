import {CheckIcon, CloseIcon, EditIcon} from "@chakra-ui/icons";

import {
	useEditableControls,
	ButtonGroup,
	IconButton,
	Flex,
} from "@chakra-ui/react";

export const EditableControls = () => {
	const {
		isEditing,
		getSubmitButtonProps,
		getCancelButtonProps,
		getEditButtonProps,
	} = useEditableControls();

	return isEditing ? (
		<ButtonGroup justifyContent="center" size="sm">
			<IconButton
				aria-label="submit button"
				icon={<CheckIcon />}
				{...getSubmitButtonProps()}
			/>
			<IconButton
				aria-label="close button"
				icon={<CloseIcon />}
				{...getCancelButtonProps()}
			/>
		</ButtonGroup>
	) : (
		<Flex justifyContent="center">
			<IconButton
				border="1px inset #4283dd"
				color="gray.900"
				shadow="md"
				aria-label="edit button"
				size="sm"
				icon={<EditIcon />}
				{...getEditButtonProps()}
			/>
		</Flex>
	);
};
