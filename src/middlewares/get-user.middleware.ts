import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, Request } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class GetUserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
      const authJwtToken = req.headers.authorization;
    if (!authJwtToken) {
      next();
      return;
    }

    try {
      const user = jwt.verify(authJwtToken, process.env.DATABASE_JWT_SECRET);
      if (user) {
        console.log('Found User Details In JWT: ', user);
        req['user'] = user;
        
      }
    } catch (error) {
      console.log('Error handling authentication JWT: ', error);
    }
    next();
  }
}
