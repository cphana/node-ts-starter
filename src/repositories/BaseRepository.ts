import { IWrite } from './interfaces/IWrite';
import { IRead } from './interfaces/IRead';

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    constructor() {}

    async create(item: T): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    async updateOne(id: String, item: T): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    async deleteOne(id: String): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    async find(): Promise<[T]> {
        throw new Error('Method not implemented.');
    }
    async findOne(id: String): Promise<T> {
        throw new Error('Method not implemented.');
    }
}
