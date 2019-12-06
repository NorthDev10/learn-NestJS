import {MinLength, MaxLength, IsInt, Min, Max } from "class-validator";

export class CreateCatDto {
  @IsInt()
  readonly userId: number;
  
  @MinLength(2, {
    message: "Name is too short"
  })
  @MaxLength(15, {
    message: "Name is too long"
  })
  readonly name: string;

  @IsInt()
  @Min(0)
  @Max(30)
  readonly age: number;

  @MaxLength(3, {
    message: "Breed is too long"
  })
  readonly breed: string;
}
