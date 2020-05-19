import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Post } from '../posts/post.entity';


@Entity()
@Unique(['categoryName'])
export class Category extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: string
  @Column()
  uuid:string
  @Column()
  categoryName: string
  @OneToMany(type => Post, post => post.category, {eager: true})
  post: Post[]
}