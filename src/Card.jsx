
const Card = ({name,image,population,region,capital,handleClick,iscolorChange}) => {

    
    return (
        <section onClick={()=>handleClick({name})}  style={{backgroundColor: iscolorChange?'hsl(207, 26%, 17%)' : 'snow' }}>
            <img src={image} alt={name} />
            <article>
                <h4>{name}</h4>
                <p>Population:<span>{population}</span></p>
                <p>Region:<span>{region}</span></p>
                <p>Capital:<span>{capital}</span></p>
            </article>
        </section>
    );
}

export default Card;
