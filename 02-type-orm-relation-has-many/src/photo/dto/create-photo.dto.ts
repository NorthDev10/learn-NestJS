import { MinLength, MaxLength, IsInt, Min, Max, IsBoolean } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreatePhotoDto {
  @ApiProperty()
  @IsInt()
  readonly catId: number;

  @ApiProperty()
  @MinLength(2, {
    message: "Name is too short"
  })
  @MaxLength(15, {
    message: "Name is too long"
  })
  readonly name: string;

  @ApiProperty()
  @MinLength(10, {
    message: "Description is too short"
  })
  @MaxLength(65535, {
    message: "Description is too long"
  })
  readonly description: string;

  @ApiProperty()
  @MinLength(2, {
    message: "Filename is too short"
  })
  @MaxLength(15, {
    message: "Filename is too long"
  })
  filename: string;

  @ApiProperty()
  @IsInt()
  @Min(0)
  @Max(30)
  views: number;

  @ApiProperty()
  @IsBoolean()
  isPublished: boolean;
}
