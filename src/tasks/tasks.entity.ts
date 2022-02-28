import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tasks'})
export class TasksEntity {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({type: 'varchar', length:20, nullable: false})
  title: string;

  @Column({type: 'varchar', length:20, nullable: false})
  description: string;
  
}