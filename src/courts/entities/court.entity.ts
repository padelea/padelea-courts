import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Court {

    @PrimaryGeneratedColumn("increment")
    id : number

    @Column("text")
    name: string

    @Column({default:false})
    enabled: boolean

    @Column('text')
    slug?:string

    //clubid

    @BeforeInsert()
    checkSlugInsert(){
        if (!this.slug){
            this.slug = this.name
        }
        this.slug = this.slug
        .toLocaleLowerCase()
        .replaceAll(' ', '_')
        .replaceAll("'", "")
    }

    @BeforeUpdate()
    checkSlugUpdate() {
         
        this.slug = this.slug
            .toLocaleLowerCase()
            .replaceAll(' ', '_')
            .replaceAll("'", "")
        
        
    }


}
