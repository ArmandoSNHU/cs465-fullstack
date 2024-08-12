export interface Trip {
    _id: string, // Internal Primary key on Mongo DB
    code: string,
    name: string,
    length: string,
    start: Date,
    resort: string,
    perPerson: string,
    image: string,
    description: string
}