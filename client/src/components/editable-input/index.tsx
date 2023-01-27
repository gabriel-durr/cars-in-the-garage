import {EditableControls} from "./editable-controls";
import React from "react";
import {
	Editable,
	EditablePreview,
	Input,
	EditableTextarea,
	EditableInput as EditableInputChakra,
} from "@chakra-ui/react";

type EditableProps = {
	defaultValue: any;
	textSize: string | number;
	isPreviewFocus?: boolean;
	inputRef: React.RefObject<HTMLInputElement>;
	inputType?: "number" | "button";
	isTextArea?: boolean;
};

export const EditableInput = ({
	defaultValue,
	textSize,
	isPreviewFocus,
	inputRef,
	inputType,
	isTextArea,
}: EditableProps) => {
	return (
		<Editable
			textAlign="center"
			defaultValue={defaultValue}
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
				textAlign="left"
				ref={inputRef}
				fontSize={textSize}
				defaultValue={defaultValue}
				h={isTextArea ? 28 : 12}
				as={isTextArea ? EditableTextarea : EditableInputChakra}
				type={inputType}
			/>
			<EditableControls />
		</Editable>
	);
};
