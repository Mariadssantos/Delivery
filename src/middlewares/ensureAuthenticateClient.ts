import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticateClient(req: Request, res: Response, next: NextFunction) {
    const authHearder = req.headers.authorization;

    if (!authHearder) {
        return res.status(401).json({
            message: "Token missing",
        });
    }

    const [, token] = authHearder.split(" ")

    try {
        const { sub } = verify(token, "aa1bf4646de67fd9086cf6c79007026c") as IPayload
        req.id_client = sub;
        return next();
    } catch (err) {
        return res.status(401).json({
            message: "Invalid Token.",
        });
    }
}