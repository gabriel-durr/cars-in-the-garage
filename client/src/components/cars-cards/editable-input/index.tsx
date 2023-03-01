import {EditableControls} from "./editable-controls";

import {UseFormRegisterReturn} from "react-hook-form";
import {
	Editable,
	EditablePreview,
	Input,
	EditableTextarea,
	EditableInput as EditableInputChakra,
} from "@chakra-ui/react";

type EditableProps = {
	register: UseFormRegisterReturn;
	defaultValue: any;
	textSize: string | number;
	isPreviewFocus?: boolean;
	inputType?: "number" | "button";
	isTextArea?: boolean;
};

export const EditableInput = ({
	register,
	inputType,
	defaultValue,
	textSize,
	isPreviewFocus,
	isTextArea,
}: EditableProps) => {
	return (
		<Editable
			defaultValue={defaultValue}
			textAlign="center"
			fontSize={textSize}
			isPreviewFocusable={isPreviewFocus}>
			<EditablePreview
				color={!isTextArea ? "green" : "gray.700"}
				h={isTextArea ? 28 : 8}
				noOfLines={5}
				w="100%"
				overflow="hidden"
			/>

			<Input
				{...register}
				type={inputType}
				textAlign="left"
				fontSize={textSize}
				h={isTextArea ? 28 : 12}
				as={isTextArea ? EditableTextarea : EditableInputChakra}
			/>
			<EditableControls />
		</Editable>
	);
};
