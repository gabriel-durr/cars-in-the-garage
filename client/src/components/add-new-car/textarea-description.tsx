import {HookFormProps} from "../../@types";

import {FormControl, FormLabel, Textarea} from "@chakra-ui/react";

type TextAreaProps = HookFormProps;

export const TextareaDescription = ({register, errors}: TextAreaProps) => {
	return (
		<FormControl isRequired>
			<>
				<FormLabel textTransform="uppercase" color="#5400e6" fontSize="0.96rem">
					descrição
				</FormLabel>
				<Textarea
					{...register("description", {
						required: "A descrição do carro não pode ser vazia",
					})}
				/>
				{errors.description && alert(errors.description.message)}
			</>
		</FormControl>
	);
};
