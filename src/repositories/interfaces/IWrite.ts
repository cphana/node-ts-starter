export interface IWrite<T> {
    create(item: T): Promise<boolean>
    updateOne(id: String, item: T): Promise<boolean>
    deleteOne(id: String): Promise<boolean>
}
