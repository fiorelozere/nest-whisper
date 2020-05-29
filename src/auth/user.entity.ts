import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { Post } from '../posts/post.entity';
import { Comment } from '../comments/comments.entity';



@Entity()
@Unique(['username'])
export class User extends BaseEntity{
  @PrimaryGeneratedColumn()
  id:string;

  @Column()
  roles: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @OneToMany(type => Post, post => post.user, {eager: true})
  posts: Post[];

  @OneToMany(type => Comment, comment => comment.user, {eager: true})
  comments: Comment[]

  async validatePassword(password: string):Promise<boolean> {
   const hash = await bcrypt.hash(password, this.salt);
   return hash === this.password;
  }
}