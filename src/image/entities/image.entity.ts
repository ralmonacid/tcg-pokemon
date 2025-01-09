import { CardEntity } from "src/card/entities/card.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('image')
export class ImageEntity {

    @PrimaryColumn()
    id: number;

    @ManyToOne(()=>CardEntity, (cardEntity)=>cardEntity.imageEntity)
    @JoinColumn({name:'card_id'})
    cardEntity: CardEntity;
    @Column()
    card_id: string;

    @Column()
    url: string;

    @Column()
    type: string;
}