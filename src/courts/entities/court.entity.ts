import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Court {

    @PrimaryGeneratedColumn("increment")
    id : number

    @Column("text")
    name: string

    @Column({default:false})
    enabled: boolean

    //clubid



}
