import './App.css'
import './CountryInfo.css'
import countries from 'world-countries'
import CountryInfo from './CountryInfo'

function App() {
  //sorterar alla länder från största till minsta area
  const sortedCountries = countries.toSorted((a, b) => b.area - a.area)
  //Tar bort antarctica
  const filteredSortedCountries = sortedCountries.filter((country) => country.name.common !== "Antarctica" )
  //Tar de 15 första länderna i listan
  const slicedfilteredSortedCountries = filteredSortedCountries.slice(0,15)
  
  //Tar den största arean
  let maxArea = slicedfilteredSortedCountries[0].area

  //Delar upp listan i 5 första och resten
  const topFive = slicedfilteredSortedCountries.slice(0,5)
  const rest = slicedfilteredSortedCountries.slice(5,15)

  //Går igenom alla länder, skickar in det i countryInfo, fem första detailed=true
  return (
    <>
      <div id='body'>
        <aside>
          {topFive.map((country) => <CountryInfo country={country} maxArea={maxArea} key = {country.cca3} detailed = {true}/>)}
        </aside>
      
        <aside>
          {rest.map((country) => <CountryInfo country={country} maxArea={maxArea} key = {country.cca3} detailed = {false} />)}
        </aside> 
      </div> 
    </>
  )
}

export default App