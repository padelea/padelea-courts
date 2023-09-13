import { IsBoolean, IsOptional, IsString, MinLength } from "class-validator"

export class CreateCourtDto {

    @IsString()
    @MinLength(3)
    name:string

    @IsBoolean()
    enable:boolean

    @IsOptional()
    slug?:string
}
