import '../styles/NavStyle.css';
export const NavBar = () => {
    const handleLogout = () => {
        localStorage.removeItem('token'); // Elimina el token del almacenamiento local
        // Otras operaciones de limpieza aquí
        window.location.href = '/'; // Redirigir al usuario
    };
    return (
        <nav className='navbar'>
            <h1 className='navbar-title'>Tu Cine</h1>
            <button
                onClick={handleLogout}
                className='logout-button'>
                Logout
            </button>
        </nav>
    )
}

