import jwt from "jsonwebtoken";

export function verifyToken(token: string): string | null {
	const SECRET = process.env.SECRET;

	try {
		const decoded = jwt.verify(token, SECRET) as {id: string};
		return decoded.id;
	} catch (error) {
		return null;
	}
}
