import {SECRET} from "../config";

import jwt from "jsonwebtoken";

type VerifyTokenType = string;

type JwtTokenProps = {
	id: string;
	email: string;
};

function verifyToken(refreshToken: VerifyTokenType): VerifyTokenType | null {
	try {
		const decoded = jwt.verify(refreshToken, SECRET) as JwtTokenProps;
		return decoded.id;
	} catch (error) {
		return null;
	}
}

export {verifyToken};
