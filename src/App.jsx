import './App.css'
import './CountryInfo.css'
import countries from 'world-countries'
import CountryInfo from './CountryInfo'

function App() {

  
  const sortedCountries = countries.toSorted((a, b) => b.area - a.area)
  const filteredSortedCountries = sortedCountries.filter((country) => country.name.common !== "Antarctica" )
  const slicedfilteredSortedCountries = filteredSortedCountries.slice(0,15)
  
  let maxArea = slicedfilteredSortedCountries[0].area

  const topFive = slicedfilteredSortedCountries.slice(0,5)
  const rest = slicedfilteredSortedCountries.slice(5,15)

  console.log(topFive)
  console.log(rest)

  /*      {slicedfilteredSortedCountries.map((country) => <CountryInfo country={country} maxArea={maxArea} key = {country.cca3} />)}
 */

  return (
    <>
        {topFive.map((country) => <CountryInfo country={country} maxArea={maxArea} key = {country.cca3} detailed = {true}/>)}
        {rest.map((country) => <CountryInfo country={country} maxArea={maxArea} key = {country.cca3} detailed = {false} />)}
    </>
  )
}

export default App