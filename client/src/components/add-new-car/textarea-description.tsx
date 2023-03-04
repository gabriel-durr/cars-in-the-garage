import {FormTextAreaProps} from "@typings/form-types";

import {FormControl, FormLabel, Textarea, Text} from "@chakra-ui/react";

type TextAreaProps = FormTextAreaProps;

export const TextareaDescription = ({register, errors}: TextAreaProps) => {
	return (
		<FormControl isRequired>
			<>
				<FormLabel
					textTransform="uppercase"
					color="my.title_form"
					fontSize="0.96rem">
					descrição
				</FormLabel>
				<Textarea
					{...register("description", {
						required: "A descrição do carro não pode ser vazia",
						minLength: {
							value: 70,
							message: "A descrição deve ter no mínimo 70 Caracteres",
						},
						maxLength: {
							value: 500,
							message: "A descrição deve ter no máximo 500 Caracteres",
						},
					})}
				/>
				<Text
					pos="absolute"
					pt="2"
					color="my.error"
					fontSize="0.8rem"
					textTransform="uppercase">
					{errors.description && errors.description.message}
				</Text>
			</>
		</FormControl>
	);
};
