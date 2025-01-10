import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateSetDto {

    @IsString()
    id:string;

    @IsString()
    name:string;

    @IsString()
    series:string;

    @IsNumber()
    printed_total:number;

    @IsNumber()
    total:number;

    @IsString()
    ptcgo_code:string;

    @IsString()
    release_date:string;

    @IsDate()
    updated_at:Date;

    @IsString()
    symbol_url:string;

    @IsString()
    logo_url:string;

}
