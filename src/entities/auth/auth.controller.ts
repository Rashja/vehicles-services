import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto"; 
import { AuthRoutes } from "../routes";

@Controller(AuthRoutes.LOGIN)
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @Post()
    async login(@Body() loginDto:LoginDto){
        return this.authService.login(loginDto)
    }
}

