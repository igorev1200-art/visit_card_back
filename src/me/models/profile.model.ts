import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SkillModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  category: string;

  @Field(() => Int)
  sortOrder: number;
}

@ObjectType()
export class ProjectModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  role: string;

  @Field(() => String, { nullable: true })
  company?: string | null;

  @Field(() => String)
  description: string;

  @Field(() => [String])
  highlights: string[];

  @Field(() => [String])
  stack: string[];

  @Field(() => Date, { nullable: true })
  startedAt?: Date | null;

  @Field(() => Date, { nullable: true })
  endedAt?: Date | null;

  @Field(() => Int)
  sortOrder: number;
}

@ObjectType()
export class ContactModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  type: string;

  @Field(() => String)
  label: string;

  @Field(() => String)
  value: string;

  @Field(() => String, { nullable: true })
  href?: string | null;

  @Field(() => Int)
  sortOrder: number;
}

@ObjectType()
export class ExperienceModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  company: string;

  @Field(() => String)
  role: string;

  @Field(() => String, { nullable: true })
  location?: string | null;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => [String])
  highlights: string[];

  @Field(() => [String])
  stack: string[];

  @Field(() => Date)
  startedAt: Date;

  @Field(() => Date, { nullable: true })
  endedAt?: Date | null;

  @Field(() => Int)
  sortOrder: number;
}

@ObjectType()
export class ProfileModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  fullName: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  headline: string;

  @Field(() => String)
  bio: string;

  @Field(() => String)
  location: string;

  @Field(() => Date, { nullable: true })
  birthDate?: Date | null;

  @Field(() => String, { nullable: true })
  education?: string | null;

  @Field(() => String, { nullable: true })
  githubUrl?: string | null;

  @Field(() => String, { nullable: true })
  avatarUrl?: string | null;

  @Field(() => [SkillModel], { nullable: true })
  skills?: SkillModel[];

  @Field(() => [ProjectModel], { nullable: true })
  projects?: ProjectModel[];

  @Field(() => [ContactModel], { nullable: true })
  contacts?: ContactModel[];

  @Field(() => [ExperienceModel], { nullable: true })
  experiences?: ExperienceModel[];
}
