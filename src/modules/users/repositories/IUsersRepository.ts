import User from '../infra/typeorm/entities/Users';
import ICreateUserTDO from '../dtos/ICreateUserDTO';

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserTDO): Promise<User>;
  save(user: User): Promise<User>;
}
