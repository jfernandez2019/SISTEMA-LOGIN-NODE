// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = async() => {
        // Lógica para iniciar sesión
        const url = 'https://nodeauthapi-production.up.railway.app/auth/login'
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud')
            }
            //parseamos la respuesta como JSON
            const data = await response.json()
            //extraemos el token del cuerpo de la respuesta
            const token = data.token
            return token
            setIsLoggedIn(true);

        } catch (error) {
            throw error; //se lanza el error para manejarlo fuera de la consola
        }
        
    };

    const logout = () => {
        // Lógica para cerrar sesión
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
