import {
	UseFormRegister,
	FieldErrorsImpl,
	UseFormSetValue,
	UseFormSetError,
	UseFormClearErrors,
} from "react-hook-form";

// Authentication

export type FormAuthInputs = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
};

// Forms (Change, Update, Delete, Edit)

export type FormNewCarInputs = {
	model: string;
	brandIcon: string;
	images: string[];
	year: number;
	speed: string;
	price: string;
	description: string;
};

export type HookFormNewCarProps = {
	register: UseFormRegister<FormNewCarInputs>;
	errors: Partial<FieldErrorsImpl<FormNewCarInputs>>;
	setValue: UseFormSetValue<FormNewCarInputs>;
};

export type FormSelectBrandNewCarProps = Omit<HookFormNewCarProps, "register">;

export type FormUploadImageProps = Omit<HookFormNewCarProps, "register">;

export type FormCarYarProps = Omit<HookFormNewCarProps, "register">;

export type FormTextAreaProps = Omit<HookFormNewCarProps, "setValue">;

export type FormPriceProps = Omit<HookFormNewCarProps, "setValue">;

export type FormEditInputs = {
	price: string;
	description: string;
};

export type customFormValidationProps = {
	images: string[] | undefined;
	brandIcon: string | undefined;
	year: number | undefined;
	isSubmitted: boolean;
	setError: UseFormSetError<FormNewCarInputs>;
	clearErrors: UseFormClearErrors<FormNewCarInputs>;
};
