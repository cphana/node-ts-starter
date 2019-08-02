export interface IRead<T> {
    find(): Promise<[T]>
    findOne(id: String): Promise<T>
}
