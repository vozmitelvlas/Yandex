import user_logo from "/user.svg";
import exit from "/exit.svg";
import { getCurrentDate } from "../utils.jsx";
import { getCurrentTime } from "../utils.jsx";
console.log(getCurrentDate());

export default function Header() {
  return (
    <header>
      <img src={user_logo}></img>
      <h3>{"vlas_vozmitel@yandex.ru"}</h3>
      <strong className="right_header">
        {getCurrentDate()} {getCurrentTime()}
      </strong>
      <img src={exit}></img>
    </header>
  );
}
