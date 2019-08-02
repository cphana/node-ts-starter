import { IWrite } from './interfaces/IWrite'
import { IRead } from './interfaces/IRead'

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    constructor(parameters) {}

    async create(item: T): Promise<boolean> {
        throw new Error('Method not implemented.')
    }
    updateOne(id: String, item: T): Promise<boolean> {
        throw new Error('Method not implemented.')
    }
    deleteOne(id: String): Promise<boolean> {
        throw new Error('Method not implemented.')
    }
    find(): Promise<[T]> {
        throw new Error('Method not implemented.')
    }
    findOne(id: String): Promise<T> {
        throw new Error('Method not implemented.')
    }
}
