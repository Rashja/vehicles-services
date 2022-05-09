import { IsEmail,IsNotEmpty} from "class-validator";

export class CreateBranchDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    address:string;

    @IsNotEmpty()
    tel:string;
}