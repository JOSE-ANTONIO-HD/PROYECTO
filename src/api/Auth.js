import { ENV } from "../utils";

export class Auth{
    baseApi= ENV.BASE_API;

    async Login(data){
        try {
            const url=`${this.baseApi}/${ENV.API_ROUTES.LOGIN}`;
            const params={
                method:"POST",
                Headers:{
                    "Content-Type":"application/json"
                },
                boby: JSON.stringify(data)
            }

            const response=await fetch(url, params);
            const result=await response.json();

            if(response.status !==200) throw result;

            return result;

        }catch (error){
            throw error;
        }
    }
    async refreshToken(refreshToken){
        try {
            const url=`${this.baseApi}/${ENV.API_ROUTES.REFRESHTOKEN}`;
            const params={
                methods:"POST",
                Headers:{
                    "Content-Type":"application/json"
                },
                boby: JSON.stringify({
                    token: refreshToken
                }
                )
            }

            const response=await fetch(url, params);
            const result=await response.json();

            if(response.status !==200) throw result;

            return result;

        } catch (error) {
            throw error
        }
    }

    setAccessToken(token){
        localStorage.setItem(ENV.JWT.ACCESS, token);
    }
    getAccessToken(){
        return localStorage.getItem(ENV.JWT.ACCESS)
    }

    setRefreshToken(token){
        localStorage.setItem(ENV.JWT.REFRESH, token);
    }
    getRefreshToken(){
        return localStorage.getItem(ENV.JWT.REFRESH)
    }

    removeToken(){
        localStorage.removeItem(ENV.JWT.ACCESS);
        localStorage.removeItem(ENV.JWT.REFRESH);
    }
}