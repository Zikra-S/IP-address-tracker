import { Header } from "./components/header";
import { SearchBar } from "./components/searchBar";

export default function App() {
  return (
    <Header>
      <SearchBar onSearch={(term) => console.log(term)} />
    </Header>
  );
}
