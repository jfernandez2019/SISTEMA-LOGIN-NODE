import '../styles/LoginStyle.css';
import { transitionLabel } from '../helpers/transitionLabel.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [isLogin, setisLogin] = useState(true) //Estado para controlar si estamos en Login

    const navigate = useNavigate(); //se usa navigate para ir por la paginas

    useEffect(() => {
        transitionLabel();
    }, [])

    useEffect(() => {
        // Si el usuario ya ha iniciado sesión, redirigir a la página Home
        if (!isLogin) {
            navigate('/Home');
            window.location.reload()
            return null
        }
    }, [isLogin, navigate]); // Dependencias de useEffect

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginApi = async (email, password) => {
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


            } catch (error) {
                throw error; //se lanza el error para manejarlo fuera de la consola
            }


        }
        if (isLogin) {
            try {
                const response = await loginApi(email, password);
                //const token = response.headers['authorization'];
                //localStorage.setItem('accessToken', token);
                //navigate('/Home')
                setisLogin(false)
            } catch (error) {
                console.error(error)
            }

        } else {
            //Logica para registro
        }
    }

    return (
        <div className='body-login'>
            <div className="container-login">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-control-login">
                        <input type="text" required value={email} onChange={(e) => setemail(e.target.value)} />
                        <label>Email</label>
                    </div>

                    <div className="form-control-login">
                        <input type="password" required value={password} onChange={(e) => setpassword(e.target.value)} />
                        <label>Password</label>
                    </div>

                    <button type="submit" className="btn">INGRESAR</button>

                    <p className="text">No tienes una cuenta? Registrar </p>
                </form>
            </div>
        </div>
    )
}

