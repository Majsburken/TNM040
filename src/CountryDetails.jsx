import { Link, useParams } from "react-router-dom";





function CountryDetails() {

  let {cca3} = useParams();
  console.log("Hello?");
    return (
        <> 
        <h1>{cca3}</h1>
        <Link to= "/"><p>Ta mig hem!</p></Link>
      </>
    )
  }


  export default CountryDetails