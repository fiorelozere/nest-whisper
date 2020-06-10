import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../categories/category.entity';
import { User } from '../auth/user.entity';
import { Comment } from '../comments/comments.entity';

@Entity()
export class Post extends BaseEntity{

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

  @Column()
  createdAt: string = this.getTime();

  @ManyToOne(type => Category, category => category.post, {eager: false, nullable: false})
  category: Category;

  @Column()
  categoryName: string;

  @Column()
  tags: string;

  @ManyToOne(type => User, user => user.posts, {eager: false})
  user: User;

  @Column()
  username: string;

  @Column()
  visibleUsername: boolean;

  @OneToMany(type => Comment, comment => comment.post, {eager: true})
  comments: Comment[];


  getTime(): string {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date+' '+time;
  }
}