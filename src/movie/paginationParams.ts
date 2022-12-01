import { IsNumber, Min, IsOptional } from 'class-validator';

 
export class PaginationParams {
 
  @IsOptional()
  @IsNumber()
  @Min(0)
  skip?: number;
 
  @IsOptional()
  @IsNumber()
  @Min(1)
  limit?: number;
}