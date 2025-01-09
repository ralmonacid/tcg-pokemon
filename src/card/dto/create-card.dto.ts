import { IsString, IsNumber, IsBoolean, IsEmail, IsOptional } from "class-validator";
export class CreateCardDto {

    @IsString()
    id: string;

    @IsString()
    name: string;

    @IsString()
    supertype: string;

    @IsString()
    subtypes: string;

    @IsString()
    types: string;

    @IsString()
    set_id: string;

    @IsString()
    number: string;

    @IsString()
    rarity: string;
}
