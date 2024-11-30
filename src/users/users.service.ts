import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: Prisma.UsersCreateInput) {
    return this.databaseService.users.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return this.databaseService.users.findMany();
  }

  async findOne(id: number) {
    const user = await this.databaseService.users.findUnique({
      where: {
        id: id,
      },
    });

    return user;
  }

  async update(id: number, updateUserDto: Prisma.UsersUpdateInput) {
    return this.databaseService.users.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.users.delete({
      where: {
        id,
      },
    });
  }
}
