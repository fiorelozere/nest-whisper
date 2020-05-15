import { IsNotEmpty, IsUrl } from 'class-validator';

export class UpdatePostDto {

  title: string;

  @IsUrl()
  photoUrl: string;

  content: string;
}