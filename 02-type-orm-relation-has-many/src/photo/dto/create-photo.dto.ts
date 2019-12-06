import { MinLength, MaxLength, IsInt, Min, Max, IsBoolean } from "class-validator";

export class CreatePhotoDto {
  @MinLength(2, {
    message: "Name is too short"
  })
  @MaxLength(15, {
    message: "Name is too long"
  })
  readonly name: string;

  @MinLength(10, {
    message: "Description is too short"
  })
  @MaxLength(65535, {
    message: "Description is too long"
  })
  readonly description: string;

  @MinLength(2, {
    message: "Filename is too short"
  })
  @MaxLength(15, {
    message: "Filename is too long"
  })
  filename: string;

  @IsInt()
  @Min(0)
  @Max(30)
  views: number;

  @IsBoolean()
  isPublished: boolean;
}
