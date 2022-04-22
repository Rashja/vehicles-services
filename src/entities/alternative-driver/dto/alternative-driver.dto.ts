import { IsEmail,IsNotEmpty} from "class-validator";

export class CreateAlternativeDriverDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    lastname:string;

    @IsNotEmpty()
    age:number;

    @IsNotEmpty()
    license:string;
}