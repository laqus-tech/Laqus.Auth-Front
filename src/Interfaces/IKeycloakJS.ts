
export interface IKeycloak {
    id?: string;
	username?: string;
	email?: string;
	firstName?: string;
	lastName?: string;
	enabled?: boolean;
	emailVerified?: boolean;
	createdTimestamp?: number;
    iss?: string;
	sub?: string;
	aud?: string;
    typ?: string;
	exp?: number;
	iat?: number;
	auth_time?: number;
	azp?: string;
	session_state?: string;
    roles: {
        [key: string]: string[]
    };
    'allowed-origins': string[];
}