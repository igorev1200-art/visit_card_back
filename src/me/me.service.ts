import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MeService {
  constructor(private readonly prisma: PrismaService) {}

  private async getProfileId() {
    const profile = await this.prisma.profile.findFirst({
      orderBy: { createdAt: 'asc' },
      select: { id: true },
    });
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    return profile.id;
  }

  async me() {
    const id = await this.getProfileId();
    return this.prisma.profile.findUniqueOrThrow({
      where: { id },
      include: {
        skills: { orderBy: { sortOrder: 'asc' } },
        projects: { orderBy: { sortOrder: 'asc' } },
        contacts: { orderBy: { sortOrder: 'asc' } },
        experiences: { orderBy: { sortOrder: 'asc' } },
      },
    });
  }

  async skills() {
    const profileId = await this.getProfileId();
    return this.prisma.skill.findMany({
      where: { profileId },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async projects() {
    const profileId = await this.getProfileId();
    return this.prisma.project.findMany({
      where: { profileId },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async contacts() {
    const profileId = await this.getProfileId();
    return this.prisma.contact.findMany({
      where: { profileId },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async experiences() {
    const profileId = await this.getProfileId();
    return this.prisma.experience.findMany({
      where: { profileId },
      orderBy: { sortOrder: 'asc' },
    });
  }
}
