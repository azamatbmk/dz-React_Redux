import './Nav.css'

export const Nav = () => {
    
    
    return (
        <div className='nav-container'>
            <img className='flag' src="/flag.svg" alt="" />
            <div className='menu-items'>
                <span>Поиск фильмов</span>
                <span>Мои фильмы</span>
                <span>Войти</span>
                <img src="/log_out.svg" alt="" />
            </div>
        </div>
    )
};

export default Nav;