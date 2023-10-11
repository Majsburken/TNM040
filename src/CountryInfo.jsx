import './CountryInfo.css'

function CountryInfo({country}) {
    /*console.log(data)*/


    return (
        <div>
            <b>{country.name.common}</b> {country.area} m<sup>2</sup>
            <div className="bar" style = {{width:10}} ></div>
        </div>
        

    )
  }
  
  export default CountryInfo