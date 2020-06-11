import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from '../posts/post.entity';
import { User } from '../auth/user.entity';


@Entity()
export class Comment {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  commentString: string;

  @Column()
  upvotes: number;

  @Column()
  downvotes: number;

  @ManyToOne(type => Post,  post => post.comments, {eager: false})
  post: Post;

  @Column()
  postId: string;

  @Column()
  createdAt: string = this.getTime();

  @ManyToOne( type => User, user => user.comments, {eager: false})
  user: User;

  @Column()
  username: string;

  @Column()
  visibleUsername: boolean;


  getTime(): string {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date+' '+time;
  }
}