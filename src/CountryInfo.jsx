import './CountryInfo.css'

function CountryInfo({country,maxArea}) {
    /*console.log(data)*/

    console.log(maxArea)

    let ratio = country.area/maxArea;
    ratio = ratio * 100 + "%";


    return (
        <div style={{width:900, textAlign: 'left'}}>
            <b>{country.name.common}</b> {country.area} km<sup>2</sup>
            <div className="bar" style={{width:ratio}}></div>
        </div>
        

    )
  }
  
  export default CountryInfo