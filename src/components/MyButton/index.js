import {useEffect} from 'react';

function MyButton({title, handleClick, count}){
    useEffect(()=>{
        console.log('render button or update');

        return()=>{
            console.log('jnjvav')
        }
    }, []);

    return (
        <div>
            <button onClick={handleClick}>{title}</button>
            
        </div>
    )
}

export default MyButton;


