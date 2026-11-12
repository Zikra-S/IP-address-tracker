import { Header } from "./components/header";
import { InfoCard } from "./components/infoCard";
import { Map } from "./components/map";
import { SearchBar } from "./components/searchBar";

export default function App() {
  return (
    <div className="relative flex h-screen flex-col">
      <Header>
        <SearchBar onSearch={(term) => console.log(term)} />
      </Header>

      <div className="pointer-events-none absolute inset-x-0 top-52 z-[1001] flex justify-center px-6 md:top-50 [&>*]:pointer-events-auto">
        <InfoCard ip="192.212.174.101" location="Brooklyn, NY 10001" timezone="-05:00" isp="SpaceX Starlink" />
      </div>

      <main className="relative z-0 min-h-0 flex-1">
        <Map lat={40.6782} lng={-73.9442} />
      </main>
    </div>
  );
}
