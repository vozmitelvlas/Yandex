import Header from "./components/Header.jsx" 
import Table from "./components/Table.jsx";
import MainHeader from "./components/MainHeader.jsx";



export default function App() {
  return (
    <div className="all">
      <Header />
      <main>
        <MainHeader></MainHeader>        
        <div className="main_tables">
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
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