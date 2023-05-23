import { 
  Field, 
  ObjectType,
  ID,
  InputType
} from "type-graphql";
import { 
  Column, 
  Entity, 
  PrimaryColumn 
} from "typeorm";

@ObjectType()
@Entity("country")
export class Country {
  @PrimaryColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  code: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  emoji: string;
}

@InputType({ description: "Create a Country" })
export class CountryInput {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string
}

@InputType()
export class CountryCodeInput {
	@Field()
	code: string;
}