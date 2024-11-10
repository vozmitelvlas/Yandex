import Header from "./components/Header.jsx" 
import Table from "./components/Table.jsx";


export default function App() {
  return (
    <div className="all">
      <Header />
      <main>
        <h1><span>Т</span>аблицы</h1>
        <div className="tables">
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
        </div>
      </main>
    </div>
  );
}