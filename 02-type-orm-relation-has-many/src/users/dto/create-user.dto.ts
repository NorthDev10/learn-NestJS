import {MinLength, MaxLength, IsInt, Min, Max } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

import { Cat } from '../../database/entities/cat.entity';

export class CreateUserDto {
  @ApiProperty()
  @MinLength(2, {
    message: "Name is too short"
  })
  @MaxLength(15, {
    message: "Name is too long"
  })
  readonly name: string;

  @ApiProperty()
  @IsInt()
  @Min(0)
  @Max(30)
  readonly age: number;

  readonly cats: Cat[];

  readonly active: boolean;
}
