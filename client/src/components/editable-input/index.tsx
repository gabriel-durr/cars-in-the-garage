import {EditableControls} from "./editable-controls";

import {UseFormRegisterReturn} from "react-hook-form";

import {
	Input,
	Editable,
	EditablePreview,
	EditableTextarea,
	InputProps,
	EditablePreviewProps,
	EditableProps,
	EditableInput as EditableInputChakra,
} from "@chakra-ui/react";

type EditableTypesProps = {
	isTextArea?: boolean;
	isControls?: boolean;
	register: UseFormRegisterReturn;
	editableProps?: EditableProps;
	previewProps?: EditablePreviewProps;
	inputProps?: InputProps;
};

export const EditableInput = ({
	register,
	isTextArea = false,
	isControls = false,
	inputProps,
	previewProps,
	editableProps,
}: EditableTypesProps) => {
	return (
		<Editable {...editableProps}>
			<EditablePreview overflow="hidden" {...previewProps} />

			<Input
				{...register}
				{...inputProps}
				as={isTextArea ? EditableTextarea : EditableInputChakra}
			/>

			{isControls && <EditableControls />}
		</Editable>
	);
};
