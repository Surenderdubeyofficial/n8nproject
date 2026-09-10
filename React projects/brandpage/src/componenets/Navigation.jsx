
const Navigation = ()=>{
    return(
       <nav className="navigation">
        <div className="logo"><img src="./public/images/brand_logo.png" alt="Logo" /></div>
      <ul>
        <li href="#home">Home</li>
        <li href="#about">About</li>
        <li href="#services">Services</li>
        <li href="#contact">Contact</li>
      </ul>
        <button>Login</button>
       </nav>
    );
}
export default Navigation;