import './App.css'
import './CountryInfo.css'
import countries from 'world-countries'
import CountryInfo from './CountryInfo'

function App() {

  
  const sortedCountries = countries.toSorted((a, b) => b.area - a.area)
  const filteredSortedCountries = sortedCountries.filter((country) => country.name.common !== "Antarctica" )
  const slicedfilteredSortedCountries = filteredSortedCountries.slice(0,15)

  
  console.log(sortedCountries)

  return (
    <>
      {slicedfilteredSortedCountries.map((country) => <CountryInfo country={country} key = {country.cca3} />)}

    </>
  )
}

export default App