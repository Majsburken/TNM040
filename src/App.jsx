import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./CountryInfo.css";
import countries from "world-countries";
import CountryInfo from "./CountryInfo";
import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CountryList />} />
                <Route
                    path="/country/:cca3"
                    component={CountryDetails}
                    element={<CountryDetails />}
                />
            </Routes>
        </BrowserRouter>
    );
}

function CountryDetails() {
    let { cca3 } = useParams(); //get from url
    let gotCountry = getCountryByCca3(cca3);
    let borderCountries = gotCountry.borders.map((cca3) =>
        getCountryByCca3(cca3)
    );
    const sortedCountries = countries.toSorted((a, b) => b.area - a.area);

    return (
        <>
            <h1>{cca3}</h1>
            <Link to="/">
                <p>Ta mig hem!</p>
            </Link>

            {borderCountries.map((country) => (
                <CountryInfo
                    country={country}
                    maxArea={sortedCountries[0].area}
                    key={country.cca3}
                    detailed={false}
                />
            ))}
        </>
    );
}

function getCountryByCca3(countryCode) {
    let foundCountry = countries.find(
        (country) => country.cca3 === countryCode
    );
    return foundCountry;
}

function CountryList() {
    //sorterar alla länder från största till minsta area
    const sortedCountries = countries.toSorted((a, b) => b.area - a.area);
    //Tar bort antarctica
    const filteredSortedCountries = sortedCountries.filter(
        (country) => country.name.common !== "Antarctica"
    );
    //Tar de 15 första länderna i listan
    const slicedfilteredSortedCountries = filteredSortedCountries.slice(0, 15);

    //Tar den största arean
    let maxArea = slicedfilteredSortedCountries[0].area;

    const matchSearch = (country) => {
        const lowerCaseWord = country.name.common.toLowerCase();
        const lowerCaseSearchString = searchString.toLowerCase();

        return lowerCaseWord.indexOf(lowerCaseSearchString) === 0; //indexOf returns true om landet början med substring
    };

    const [searchString, setSearchString] = useState("");

    function changeInput(event) {
        setSearchString(event.target.value);
    }

    const searchedCountries = filteredSortedCountries.filter(matchSearch);

    //Delar upp listan i 5 första och resten
    const topFive = searchedCountries.slice(0, 5);
    const rest = searchedCountries.slice(5, 15);

    //Går igenom alla länder, skickar in det i countryInfo, fem första detailed=true
    return (
        <>
            <div>
                <h1>Search Country 🌍</h1>
                <input
                    id="search"
                    type="text"
                    placeholder="I'm a queencar 👸🚗"
                    onChange={changeInput}
                />
            </div>
            <div id="results">
                <aside>
                    {topFive.map((country) => (
                        <CountryInfo
                            country={country}
                            maxArea={maxArea}
                            key={country.cca3}
                            detailed={true}
                        />
                    ))}
                </aside>

                <aside>
                    {rest.map((country) => (
                        <CountryInfo
                            country={country}
                            maxArea={maxArea}
                            key={country.cca3}
                            detailed={false}
                        />
                    ))}
                </aside>
            </div>
        </>
    );
}
//????????????????????????????????????????????????????????????????
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
