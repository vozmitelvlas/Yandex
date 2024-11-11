import {useNavigate} from 'react-router-dom';
import "./SignIn.css"
import YandexIcon from '/Yandex_icon.svg'

export default function SignIn() {

    const navigate = useNavigate();
    const toTables = () => { navigate("/tables"); };

    return (
        <div className='SignIn'>
            <div className='In'>
                <p><strong>Яндекс </strong><span className='SignInSpan'>Трансфер</span></p>
                <p><strong>Войти с помощью Яндекса</strong></p>
                {/* <input type="text" className="text-field__input" placeholder="Логин"></input>
                <input type="text" className="text-field__input" placeholder="Пароль"></input> */}
                <button className="yandex" onClick={toTables}><img src={YandexIcon}></img></button>
            </div>
        </div>
    )
}