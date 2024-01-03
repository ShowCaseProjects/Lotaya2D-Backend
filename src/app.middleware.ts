import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware
{
 private readonly logger=new Logger();

 use(req:any,res:Response,next:NextFunction)
 {
    if(!['/','/auth/login','/auth/register'].includes(req.url))
    {
        this.logger.debug(
        `api request [url=${req.originalUrl} , method=${req.method} , userId=${req.id}]`
        );
    }
    next();
 }
}