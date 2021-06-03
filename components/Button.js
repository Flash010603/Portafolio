import { useContext } from 'react';
import { PageContext } from '../context/PageContext';
import main from '../styles/Main.module.css'

export const Button = ( { right=false } ) => {
    
    const { setCounter,counter } = useContext(PageContext);
    
    const onClick = () => {
        if(counter ===0 && !right){
            setCounter(2)
        }
        else if(counter <2){
            (right) ? setCounter( c => c + 1) : setCounter( c => c - 1);  
            console.log('1')
        }
        else if(counter === 2 && !right){
            setCounter( c => c - 1)
            console.log('2')
        }
        else{
            setCounter( 0 )
            console.log('4')
        }
    };

    console.log(counter)
    return (
        <>
            <div 
                className={(right) ? main.btn_left : main.btn_right}
                onClick={onClick}
            >
                <img  draggable={false} src="/right.png" alt="" />
            </div>
        </>
    )
}
