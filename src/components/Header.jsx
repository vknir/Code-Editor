import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';

import { useSetRecoilState } from 'recoil';
import html from '../store/htmlState';
import js from '../store/jsState';
import css from '../store/cssState';

import './header.css'



function Header(){
    const setCSSState=useSetRecoilState(css)
    const setHtmlState=useSetRecoilState(html)
    const setJSState=useSetRecoilState(js)

    function reset(){
        setCSSState(prev=>{ return {...prev, value:'/* Write your CSS here */\n' }});
        setHtmlState(prev=>{ return {...prev, value:'<!--Write your HTML here -->\n' }});
        setJSState(prev=>{ return {...prev, value:'//Write your JavaScript here \n' }});   
    }

return <>
        <header>
            <h1>
                <span>{'</> '}</span>
                Code Editor
            </h1>     
            <div className="repeat-img">
                <FontAwesomeIcon onClick={()=>reset()} icon={faRepeat} />
            </div>
        </header>
    </>
}

export default Header;