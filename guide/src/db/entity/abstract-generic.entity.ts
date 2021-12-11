import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiHideProperty,
} from '@nestjs/swagger';

@Entity()
export abstract class GenericEntity {
  @PrimaryGeneratedColumn()
  @ApiHideProperty()
  id: number;

  @Column({ type: 'text'})
  @IsNotEmpty()
  @ApiProperty({ type: String })
  name_blr: string;

  @Column({ nullable: true, type: 'text' })
  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  description_blr?: string;

  @Column({ nullable: true, type: 'text' })
  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  name_ru?: string;

  @Column({ nullable: true, type: 'text' })
  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  description_ru?: string;

  @Column({ nullable: true, type: 'text'})
  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  name_en?: string;

  @Column({ nullable: true, type: 'text' })
  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  description_en?: string;
}
