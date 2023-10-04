import './CountryInfo.css'

function CountryInfo({country}) {
    /*console.log(data)*/


    return (
        <div>
            <b>{country.name.common}</b> {country.area} km<sup>2</sup>
            <div className="bar"></div>
        </div>
        

    )
  }
  
  export default CountryInfo