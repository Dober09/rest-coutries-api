
const Header = ({handleBackgroundChange,iscolorChange}) => {
   
    return (
        <header style={{backgroundColor: iscolorChange?'hsl(207, 26%, 17%)' : 'snow' }}>
            <h2>Where in the world?</h2>
            <p onClick={handleBackgroundChange}>Dark Mode</p>
        </header>
    );
}

export default Header;
