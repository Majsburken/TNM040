import './App.css'
import './CountryInfo.css'
import countries from 'world-countries'
import CountryInfo from './CountryInfo'
import React, { useState } from "react";





function CountryList() {
  //sorterar alla länder från största till minsta area
  const sortedCountries = countries.toSorted((a, b) => b.area - a.area)
  //Tar bort antarctica
  const filteredSortedCountries = sortedCountries.filter((country) => country.name.common !== "Antarctica" )
  //Tar de 15 första länderna i listan
  const slicedfilteredSortedCountries = filteredSortedCountries.slice(0,15)
  
  //Tar den största arean
  let maxArea = slicedfilteredSortedCountries[0].area

 
  const matchSearch = country => {
    const lowerCaseWord = country.name.common.toLowerCase();
    const lowerCaseSearchString = searchString.toLowerCase();

    return lowerCaseWord.indexOf(lowerCaseSearchString) === 0;
  }

  const [searchString, setSearchString] = useState("");

  function changeInput(event) {
     setSearchString(event.target.value);
  }
  
  const searchedCountries = filteredSortedCountries.filter(matchSearch);

 //Delar upp listan i 5 första och resten
 const topFive = searchedCountries.slice(0,5)
 const rest = searchedCountries.slice(5,15)

 



  //Går igenom alla länder, skickar in det i countryInfo, fem första detailed=true
  return (
    <>
      <div>
        <h1>Search Country 🌍</h1>
        <input id ="search" type="text" placeholder="I'm a queencar" onChange={changeInput}/>
      </div>
      <div id='results'>
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


function App() {

  return {
 
  }
}



export default App