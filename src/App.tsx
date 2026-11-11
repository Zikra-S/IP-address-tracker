import { Header } from './components/header'
import { InfoCard } from './components/infoCard'
import { SearchBar } from './components/searchBar'

export default function App() {
  return (
    <>
      <Header>
        <SearchBar onSearch={(term) => console.log(term)} />
      </Header>

      <div className="relative z-[1001] -mt-24 flex justify-center px-6 md:-mt-20">
        <InfoCard
          ip="192.212.174.101"
          location="Brooklyn, NY 10001"
          timezone="-05:00"
          isp="SpaceX Starlink"
        />
      </div>
    </>
  )
}