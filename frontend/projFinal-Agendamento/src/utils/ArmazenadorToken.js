const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

export class ArmazenadorToken {
    static definirTokens(accessToken, refreshToken) {
        sessionStorage.setItem(ACCESS_TOKEN, accessToken)
        sessionStorage.setItem(REFRESH_TOKEN, refreshToken)
    }
    static efetuarLogout () {
        sessionStorage.removeItem(ACCESS_TOKEN)
        sessionStorage.removeItem(REFRESH_TOKEN)
        window.location.replace = '/login'
    }
    static get accessToken () {
        try {
            return sessionStorage.getItem(ACCESS_TOKEN) || null;
        } catch (error) {
            console.error('Erro ao obter accessToken:', error);
            return null;
        }
    }
    static get refreshToken () {
        try {
            return sessionStorage.getItem(REFRESH_TOKEN) || null;
        } catch (error) {
            console.error('Erro ao obter accessToken:', error);
            return null;
        }
    }
}