import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  uuid: string;

  @Column()
  title: string;

  @Column()
  photoUrl: string;

  @Column()
  content: string;

  @Column()
  views: number;

  @Column()
  upVotes: number;

  @Column()
  downVotes: number;
}