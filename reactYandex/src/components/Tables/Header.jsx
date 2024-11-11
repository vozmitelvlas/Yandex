import user_logo from "/user.svg";
import exit from "/exit.svg";
import { getCurrentDate } from "./utils.jsx";
import { getCurrentTime } from "./utils.jsx";

import {useNavigate} from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const SignIn = () => { navigate("/"); };

  return (
    <header>
      <img src={user_logo}></img>
      <h3>{"vlas_vozmitel@yandex.ru"}</h3>
      <strong className="right_header">
        {getCurrentDate()}  &nbsp; {getCurrentTime() } &nbsp;
      </strong>
      <button className="exit_button" onClick={SignIn}><img src={exit}></img></button>
      
    </header>
  );
}
