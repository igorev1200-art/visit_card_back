import { Query, Resolver } from '@nestjs/graphql';
import { MeService } from './me.service';
import {
  ContactModel,
  ExperienceModel,
  ProfileModel,
  ProjectModel,
  SkillModel,
} from './models/profile.model';

@Resolver()
export class MeResolver {
  constructor(private readonly meService: MeService) {}

  @Query(() => ProfileModel, { name: 'me' })
  me() {
    return this.meService.me();
  }

  @Query(() => [SkillModel], { name: 'skills' })
  skills() {
    return this.meService.skills();
  }

  @Query(() => [ProjectModel], { name: 'projects' })
  projects() {
    return this.meService.projects();
  }

  @Query(() => [ContactModel], { name: 'contacts' })
  contacts() {
    return this.meService.contacts();
  }

  @Query(() => [ExperienceModel], { name: 'experiences' })
  experiences() {
    return this.meService.experiences();
  }
}
