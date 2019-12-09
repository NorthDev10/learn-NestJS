import {MinLength, MaxLength, IsInt, IsNumber, Min, Max } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @IsInt()
  @ApiProperty()
  readonly userId: number;
  
  @ApiProperty()
  @MinLength(2, {
    message: "Name is too short"
  })
  @MaxLength(15, {
    context: {
      en: "Name is too long",
      ru: "TBD Name is too long",
      uk: "TBD2 Name is too long"
		}
  })
  readonly name: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(30)
  readonly age: number;

  @ApiProperty()
  @MaxLength(3, {
    message: "Breed is too long"
  })
  readonly breed: string;
}
