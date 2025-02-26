import './input.css'

export const InputSearch = () => {

    return (
        <div className='input-wrapper'>
            <img src="/search.svg"alt="" />
            <input className='input-search' type="text" placeholder='Введите название' />
        </div>
    )
};

export default InputSearch