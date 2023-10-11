import './CountryInfo.css'

function CountryInfo({country, maxArea, detailed}) {

    //Gör en ratio för bar width
    let ratio = country.area/maxArea;
    ratio = ratio * 100 + "%";

    //För att skriva i miljoner och avrunda till en decimal
    let roundedArea = Math.round(country.area/100000)/10;

    return (
        <div className="boxes" >
            
            <b>{country.name.common}</b> {roundedArea} million km<sup>2</sup>

            <div className="bar" style={{width:ratio}}></div>
            
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