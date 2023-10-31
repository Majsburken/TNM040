import { Link, useParams } from "react-router-dom";
import getCountryByCca3 from './App';


function CountryDetails() {

  let {cca3} = useParams();
  let gotCountry = getCountryByCca3(cca3);
  console.log(gotCountry);
    return (
        <> 
        <h1>{cca3}</h1>
        <Link to= "/"><p>Ta mig hem!</p></Link>
      </>
    )
  }


  export default CountryDetails