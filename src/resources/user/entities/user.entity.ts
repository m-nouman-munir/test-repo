import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Role } from "../../../enum/role";

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, default: null })
  email: string;

  @Prop({ required: true, default: null })
  password: string;

  @Prop({ required: true, enum: Role, default: undefined })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocumnet = User & Document;
