import { IsNotEmpty, IsUrl, IsUUID } from 'class-validator';

export class UpdatePostDto {

  title: string;


  photoUrl: string;

  content: string;


  categoryId: number;

  tags: string;

  visibleUsername: boolean;
}