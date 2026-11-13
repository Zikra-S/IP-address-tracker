import { Header } from "./components/header";
import { InfoCard } from "./components/infoCard";
import { Map } from "./components/map";
import { SearchBar } from "./components/searchBar";
import { useIpData } from "./hooks/useIpData";
import { useSearch } from "./hooks/useSearch";

export default function App() {
  const setTerm = useSearch((state) => state.setTerm);
  const { data, isPending, isPlaceholderData, error } = useIpData();

  return (
    <div className="relative flex h-screen flex-col">
      <Header>
        <SearchBar onSearch={setTerm} />
      </Header>

      <div className="pointer-events-none absolute inset-x-0 top-52 z-1001 flex justify-center px-6 md:top-50 [&>*]:pointer-events-auto">
        {isPending && <p className="rounded-2xl bg-white px-8 py-6 shadow-lg">Loading...</p>}

        {error && <p className="rounded-2xl bg-white px-8 py-6 text-red-600 shadow-lg">{error.message}</p>}

        {data && !error && (
          <div className={isPlaceholderData ? "opacity-60" : ""}>
            <InfoCard
              ip={data.ip}
              location={`${data.location.city}, ${data.location.region} ${data.location.postalCode}`}
              timezone={data.location.timezone}
              isp={data.isp}
            />
          </div>
        )}
      </div>

      <main className="relative z-0 min-h-0 flex-1">{data && <Map lat={data.location.lat} lng={data.location.lng} />}</main>
    </div>
  );
}
