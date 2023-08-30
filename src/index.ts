import JWTDecode from 'jwt-decode';
import { IKeycloak } from './Interfaces/IKeycloakJS';

export default {
    get(name: string): IKeycloak | null {
        try {
            const value = '; ' + document.cookie;
            const parts = value.split('; ' + name + '=');

            if (parts.length === 2) {
                const bearer = parts.pop()?.split(';').shift() || null;

                if (bearer) {
                    const decoded: any = JWTDecode(bearer)

                    if (decoded.exp && new Date(decoded.exp * 1000) > new Date()) {
                        return {
                            username: decoded.preferred_username,
                            email: decoded.email,
                            firstName: decoded.given_name,
                            lastName: decoded.family_name,
                            iss: decoded.iss,
                            sub: decoded.sub,
                            aud: decoded.aud,
                            typ: decoded.typ,
                            exp: decoded.exp,
                            iat: decoded.iat,
                            auth_time: decoded.auth_time,
                            azp: decoded.azp,
                            roles: decoded.resource_access,
                            'allowed-origins': decoded['allowed-origins'],
                        };
                    }
                }
            }

            return null;
        } catch (err) {
            return null;
        }
    },

    set(name: string, value: string, expires: string, path: string = ''): string | null {
        try {
            const formattedCookie = `${name}=${value}; expires=${expires}; path=${path}; SameSite=None; Secure=True;`;
            document.cookie = formattedCookie;
            return formattedCookie;
        } catch (err) {
            return null;
        }
    },

    delete(name: string): void {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}