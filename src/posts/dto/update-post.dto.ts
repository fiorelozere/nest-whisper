import { IsNotEmpty, IsUrl, IsUUID } from 'class-validator';

export class UpdatePostDto {

  title: string;

  @IsUrl()
  photoUrl: string;

  content: string;


  categoryId: number;

  tags: string;
}