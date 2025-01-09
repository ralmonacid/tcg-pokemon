import { CardEntity } from "src/card/entities/card.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity('set')
export class SetEntity {

    @PrimaryColumn()
    id: string;

    @Column()
    name:string;

    @Column()
    series: string;

    @Column({nullable:true})
    printed_total: number;

    @Column({nullable:true})
    total: number;

    @Column({nullable:true})
    ptcgo_code: string;

    @Column({nullable:true, type:'date'})
    release_date: string;

    @Column({type: 'timestamptz',nullable:true})
    updated_at: Date;

    @Column({nullable:true})
    symbol_url: string;

    @Column({nullable:true})
    logo_url: string;

    @OneToMany(()=>CardEntity, (cardEntity)=> cardEntity.setEntity)
    cardEntity: CardEntity[];
}