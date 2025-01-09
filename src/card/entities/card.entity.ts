import { ImageEntity } from "src/image/entities/image.entity";
import { MarketEntity } from "src/market/entities/market.entity";
import { SetEntity } from "src/set/entities/set.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('card')
export class CardEntity {

    @PrimaryColumn()
    id: string;

    @OneToMany(()=> ImageEntity, (imageEntity) => imageEntity.cardEntity)
    imageEntity:ImageEntity[];

    @OneToMany(()=> MarketEntity, (marketEntity) => marketEntity.cardEntity)
    marketEntity:MarketEntity[];

    @Column()
    name: string;

    @Column()
    supertype: string;

    @Column({nullable:true})
    subtypes: string;

    @Column({nullable:true})
    types: string;

    @ManyToOne(()=>SetEntity, (setEntity)=>setEntity.cardEntity)
    @JoinColumn({name:'set_id'})
    setEntity:SetEntity
    @Column()
    set_id: string;

    @Column()
    number: string;

    @Column({nullable:true})
    rarity: string;
}