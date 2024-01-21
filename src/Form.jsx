
const Form = ({country,setCountry,setRegion}) => {
    return (
        <form onSubmit={(e)=> e.preventDefault()}>
            <input 
            type="text" 
            placeholder="Search for a country..."  
            name="country"
            value={country}
            onChange={(e)=> setCountry(e.target.value)}

            />
            <select name="" id="" onChange={e=>setRegion(e.target.value)}>
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>
    );
}

export default Form;
