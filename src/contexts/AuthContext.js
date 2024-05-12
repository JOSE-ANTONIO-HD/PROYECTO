import {useState, useEffect, createContext} from "react";
import {Auth, User} from "../api";
import {hasExpiredToken} from '../utils';

const authCtr=new Auth();
const userCtr=new User();

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const accessToken = authCtr.getAccessToken();
            const refreshToken = authCtr.getRefreshToken();

            await login(accessToken);

            if (!accessToken || !refreshToken) {
                logout();
                setLoading(false);
                return;
            }
            if (hasExpiredToken(accessToken)) {
                if (hasExpiredToken(refreshToken)) {
                    logout();
                } else {
                    await relogin(refreshToken);
                }
            } else {
                await login(accessToken);
            }

            setLoading(false);
        })();
    }, []);

    const login = async (accessToken) => {
        try {
            const response = await userCtr.getMe(accessToken);
            delete response.password;

            setUser(response);
            setToken(accessToken);
        } catch (error) {
            console.error(error);
        }
    }

    const relogin = async (refreshToken) => {
        try {
            const { accessToken } = await authCtr.refreshToken(refreshToken);
            authCtr.setAccessToken(accessToken);
            await login(accessToken);
        } catch (error) {
            console.error(error);
        }
    }

    const logout = () => {
        setUser(null);
        setToken(null);
        authCtr.removeToken();
    }

    const data = {
        accessToken: token,
        user,
        login,
        logout,
    }

    if (loading) {
        // Handle loading state here (e.g., render loading spinner)
        return null;
    }

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
