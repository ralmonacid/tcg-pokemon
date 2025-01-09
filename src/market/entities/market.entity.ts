import { CardEntity } from "src/card/entities/card.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('market')
export class MarketEntity {

    @PrimaryColumn()
    id: string;

    @ManyToOne(()=>CardEntity, (cardEntity)=>cardEntity.marketEntity)
    @JoinColumn({name:'card_id'})
    cardEntity: CardEntity;
    @Column()
    card_id: string;

    @Column()
    url: string;

    @Column({type:'date'})
    updated_at: string;

    @Column()
    market: string
}