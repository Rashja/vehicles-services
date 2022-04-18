import { IsNotEmpty} from "class-validator";

export class createVehicleDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    color:string;

    @IsNotEmpty()
    numberplate:string;

    @IsNotEmpty()
    owner:string;
}