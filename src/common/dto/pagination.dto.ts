import { IsIn, IsInt, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDTO {
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Min(1)
  limit?: number;

  @IsInt()
  @IsOptional()
  @IsPositive()
  offset?: number;
}
