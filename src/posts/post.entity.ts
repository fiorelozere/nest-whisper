import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../categories/category.entity';
import { User } from '../auth/user.entity';

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
  createdAt: string;

  @ManyToOne(type => Category, category => category.post, {eager: false, nullable: false})
  category: Category;

  @Column()
  categoryId: number;

  @Column()
  tags: string;

  @ManyToOne(type => User, user => user.posts, {eager: false})
  user: User;

  @Column({nullable: true})
  username: string;

  @Column()
  visibleUsername: boolean;

}