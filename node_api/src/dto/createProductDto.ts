import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty({ message: 'Name is required.' })
  @MaxLength(100, { message: 'Name cannot exceed 100 characters.' })
  name!: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Price is required.' })
  @Min(0, { message: 'Price must be at least 0.' })
  price!: number;

  @IsString()
  @IsOptional()
  @MaxLength(500, { message: 'Description cannot exceed 500 characters.' })
  description?: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Quantity is required.' })
  @Min(0, { message: 'Quantity must be at least 0.' })
  quantity!: number;

  @IsString()
  @IsNotEmpty({ message: 'Category is required.' })
  @MaxLength(50, { message: 'Category cannot exceed 50 characters.' })
  category!: string;
}
