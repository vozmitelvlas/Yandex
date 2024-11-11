import TableHeader from "./TableHeader.jsx";
import Button from "./Button.jsx";

export default function Table(){
    return (
        <div className="container">
            <TableHeader title="Ответы ДВК на маркетинг"/>

            <div className="upper_buttons">
                <Button text="Таблица"></Button>
                <Button text="Форма"></Button>
            </div>
            <div className="low_buttons">
                <Button text="Статистика и история"></Button>
                <Button text="Настройки доступа"></Button>
            </div>
        </div>
    )
}