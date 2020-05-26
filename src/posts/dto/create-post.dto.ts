import { IsBoolean, IsNotEmpty, IsNumber, IsUrl, IsUUID } from 'class-validator';


export class CreatePostDto {

  @IsNotEmpty()
  title: string;

  @IsUrl()
  photoUrl: string;

  @IsNotEmpty()
  content: string;

  categoryId: number;

  tags: string;


  visibleUsername: boolean;
}