import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type userDocument = HydratedDocument<User>;

@Schema({ versionKey: false })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  email: string;

  @Prop({})
  password: string;

  @Prop({ required: false })
  socialMedia: string[];

  @Prop({ default: false })
  isFreelancer: boolean;

  @Prop({ required: false })
  idioma: string[];

  @Prop({ required: false })
  experiencia: string;

  @Prop({ required: false })
  categoria: string[];

  @Prop({ required: false })
  plan: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
