import { IsNotEmpty} from "class-validator";

export class assignAlternativeDriverDto {
    @IsNotEmpty()
    alternativeDiversId:string;

    @IsNotEmpty()
    numberplate:string;
}