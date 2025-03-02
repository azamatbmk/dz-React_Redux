import './Nav.css'

export const Nav = () => {
    
    
    return (
        <div className='nav-container'>
            <img className='flag' src="/flag.svg" alt="" />
            <div className='menu-items'>
                <a href="#">Поиск фильмов</a>
                <a href="#">Мои фильмы</a>
                <a href="#">Войти</a>
                <img src="/log_out.svg" alt="" />
            </div>
        </div>
    )
};

export default Nav;