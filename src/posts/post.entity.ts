import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../categories/category.entity';

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

  @ManyToOne(type => Category, category => category.post, {eager: false, nullable: false})
  category: Category;

  @Column()
  categoryId: number;

  @Column()
  tags: string;
}