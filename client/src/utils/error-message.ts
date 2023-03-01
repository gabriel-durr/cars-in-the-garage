export class ErrorMessage {
	message: string;

	constructor(message: string) {
		this.message = message;
	}
}

//TODO usar esse erro message personalizado para usar nas exceções do CRUD

// } catch (error) {
// 	const title =
// 	  error instanceof AppError
// 		? error.message
// 		: "Não foi possível registar o exercício.";

// 	Toast.show({
// 	  title,
// 	  placement: "top",
// 	  bgColor: "red.500",
