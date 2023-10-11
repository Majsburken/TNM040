import './CountryInfo.css'

function CountryInfo({country, maxArea, detailed}) {
    // console.log(country)

    // console.log(maxArea)

    let ratio = country.area/maxArea;
    ratio = ratio * 100 + "%";

    let roundedArea = country.area/1000000;
    console.log(roundedArea)
    roundedArea = Math.round(roundedArea*10)/10;
    console.log(roundedArea)


    return (
        <div className="boxes" >
            
            <b>{country.name.common}</b> {roundedArea} million km<sup>2</sup>
            <div className="bar animatedBar" style={{width:ratio}}></div>
            {detailed &&  
               <>
            <p>Capital: {country.capital}</p> 
            <p>Number of neighbouring countries: {country.borders.length}</p> 
            <p>Independent: {country.independent ? 'Yes' : 'No'}</p>
            </>
            }

        </div>
        

    )
  }
  
  export default CountryInfo