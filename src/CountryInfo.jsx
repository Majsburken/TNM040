import './CountryInfo.css'

function CountryInfo({country, maxArea, detailed}) {
    console.log(country)

    console.log(maxArea)

    let ratio = country.area/maxArea;
    ratio = ratio * 100 + "%";
    console.log("test")

    return (
        <div style={{width:900, textAlign: 'left'}}>
            <b>{country.name.common}</b> {country.area} km<sup>2</sup>
            <div className="bar" style={{width:ratio}}></div>
            {detailed &&     
            <p>Capital: {country.capital}</p> 
            }

        </div>
        

    )
  }
  
  export default CountryInfo