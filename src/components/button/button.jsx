/* eslint-disable react/prop-types */
import './Button.css'

function Button ({ text }) {


    const clicked = () => {
        console.log('Нажал')
    }
    
    return (
        <>
            <button onClick={clicked}>{text}</button>
        </>
    )
}

export default Button;