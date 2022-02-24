import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tasks'})
export class TaskEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 50, nullable: false})
  title: string;

  @Column({type: 'varchar', length: 128, nullable: false})
  description: string;

  @Column()
  state: boolean;

}