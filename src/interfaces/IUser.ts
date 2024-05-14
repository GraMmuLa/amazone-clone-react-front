import IEntity from "./IEntity";

export default interface IUser extends IEntity {
    username: string,
    firstname: string,
    middlename?: string,
    surname: string,
    email: string,
    phone: string,
    roleName: string,
    favouriteProductColorIds?: number[],
    productIds?: number[],
    isLogged?: boolean
}