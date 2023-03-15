import {
	UseFormRegister,
	FieldErrorsImpl,
	UseFormSetValue,
	UseFormSetError,
	UseFormClearErrors,
	UseFormReset,
} from "react-hook-form";

import { ImageListType } from "react-images-uploading";

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

export type CustomFormValidationNewCar = {
	images?: string[];
	brandIcon?: string;
	year?: number;
	isSubmitted: boolean;
	setError: UseFormSetError<FormNewCarInputs>;
	clearErrors: UseFormClearErrors<FormNewCarInputs>;
};

// Profile

export type FormProfileInputs = {
	name: string;
	avatar: string;
	email: string;
};

export type UploadAvatarProps = {
	setValue: UseFormSetValue<FormProfileInputs>;
	setAvatar(avatar: ImageListType): void;
	avatar: ImageListType;
};

export type OptionChangeProps = {
	errors: Partial<FieldErrorsImpl<FormProfileInputs>>;
	register: UseFormRegister<FormProfileInputs>;
	profileOrigin: FormProfileInputs;
	reset: UseFormReset<FormProfileInputs>;
	setIsVisibleButton(value: boolean): void;
};

export type FormChangePassword = {
	currentPassword: string;
	newPassword: string;
	confirmNewPassword: string;
};
