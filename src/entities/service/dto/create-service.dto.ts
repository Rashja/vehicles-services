import { IsEnum, IsNotEmpty} from "class-validator";

export enum Types {
  WASHING = 'WASHING',
  REPAIR = 'REPAIR',
  PAINTING = 'PAINTING',
}

export class CreateServiceDto {
    @IsNotEmpty()
    title:string;

    @IsEnum(Types)
    type:string;

    @IsNotEmpty()
    price:string;

    @IsNotEmpty()
    branchUuid:string;
}