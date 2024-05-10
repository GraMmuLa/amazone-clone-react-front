import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IUser from "../../interfaces/IUser";
import IJwtObject from "../../interfaces/IJwtObject";
import {jwtDecode} from "jwt-decode"
import IDecodedJwtToken from "../../interfaces/IDecodedJwtToken";



let initialState: IUser | {} = { };

const auth_token = sessionStorage.getItem("auth_token");

if(auth_token !== null) {
    const decoded: IDecodedJwtToken = jwtDecode(auth_token);
    var expDate=new Date('1970-01-01T00:00:00Z');
    expDate.setUTCSeconds(decoded.exp);
    if(expDate < new Date()) {
        sessionStorage.removeItem("auth_token");
    }
    else {
        initialState = {
            username: decoded.iss,
            firstname: decoded.firstname,
            middlename: decoded.middlename,
            surname: decoded.surname,
            email: decoded.email,
            phone: decoded.phone,
            roleName: decoded.roleName,
            favouriteProductColorIds: decoded.favouriteProductColorIds,
            isLogged: true
        }
    }
}

export const userSlice = createSlice({
    name: "userReducer",
    initialState: initialState as IUser,
    reducers: {
        init(state: IUser, action: PayloadAction<IJwtObject>) {
            try {
                const token = action.payload.token;
                const decoded: IDecodedJwtToken = jwtDecode(token);
                state.username = decoded.iss;
                state.firstname = decoded.firstname;
                state.middlename = decoded.middlename;
                state.surname = decoded.surname;
                state.email = decoded.email;
                state.phone = decoded.phone;
                state.roleName = decoded.roleName;
                state.favouriteProductColorIds = decoded.favouriteProductColorIds;
                state.isLogged = true;
            } catch (e) {
                console.log("Invalid token");
            }
        }
    }
});

export const {init} = userSlice.actions;

export default userSlice.reducer;