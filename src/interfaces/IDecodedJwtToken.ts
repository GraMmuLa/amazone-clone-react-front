export default interface IDecodedJwtToken {
    iss: string;
    iat: number;
    exp: number;
    id: number;
    firstname: string;
    middlename?: string;
    surname: string;
    email: string;
    phone: string;
    roleName: string;
    favouriteProductColorIds: number[];
    createdAt: number;
}