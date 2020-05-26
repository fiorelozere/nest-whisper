import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { Post } from '../posts/post.entity';
@Entity()
@Unique(['username'])
export class User extends BaseEntity{
  @PrimaryGeneratedColumn()
  id:string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @OneToMany(type => Post, post => post.user, {eager: true})
  posts: Post[];

  async validatePassword(password: string):Promise<boolean> {
   const hash = await bcrypt.hash(password, this.salt);
   return hash === this.password;
  }
}