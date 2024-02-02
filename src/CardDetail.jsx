

const CardDetail = ({handleClick,countryData}) =>{
    
   
    return (
        <>

        {countryData.map(place =>(
        <aside>

        <button onClick={()=>handleClick()}>Back</button>
        <div className="block">

            <img src={place.flags.png} alt={place.name.common} />
            <div className="wrapper">
                <h3>{place.name.common}</h3>
                <div className="section one">
                    <p>Native Name: <span>{place.name.nativeName.official}</span></p>
                    <p>Population: <span>{place.population}</span></p>
                    <p>Region:<span>{place.region}</span></p>
                    <p>Sub Region: <span>{place.subregion}</span></p>
                    <p>Capital: <span>{place.capital}</span></p>
                </div>
                <div className="section two">
                    <p>Top Level Domain: <span>{place.tld}</span></p>
                    <p>Currencies: <span>{Object.values(place.currencies).map(item=>item.name)}</span></p>
                    <p>Languanges: <span>{Object.values(place.languages)}</span></p>
                </div>
                <div className="section three ">
                    <p>Border Countries:</p>
                    <div>
                    <button>france</button>
                    <button>German</button>
                    <button>Netherlands</button>
                    </div>
                </div>
            </div>
        </div>
        </aside>
        ))}
        </>
    );
}

export default CardDetail;
