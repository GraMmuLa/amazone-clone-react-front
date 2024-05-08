export default interface IUser {
    id?: number,
    username: string,
    firstname: string,
    middlename?: string,
    surname: string,
    email: string,
    phone: string,
    roleName: string,
    isLogged?: boolean
}