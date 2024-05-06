import { ENV } from "../utils";

export class Auth{
    baseApi= ENV.BASE_API;

    async login(data){
        try {
            const url=`${this.baseApi}/${ENV.API_ROUTES.LOGIN}`;
            const params={
                methods:"POST",
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
        
        } catch (error) {
            throw error
        }
    }
}