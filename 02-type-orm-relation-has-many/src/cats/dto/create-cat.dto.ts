import {MinLength, MaxLength, IsInt, IsNumber, Min, Max } from "class-validator";

export class CreateCatDto {
  @IsInt()
  readonly userId: number;
  
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

  @IsNumber()
  @Min(0)
  @Max(30)
  readonly age: number;

  @MaxLength(3, {
    message: "Breed is too long"
  })
  readonly breed: string;
}
