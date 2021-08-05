import logoMC from "../logoMC.png";

function Navbar() {
  let navStyle = {
    backgroundColor: "#e8e1e173"
  };
  return (
    <div className="navbar" style={navStyle}>
      <div class="container">
				<nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-red" >
					<img id="header-img" src={logoMC} height="50px" alt="Maria Castro Logo" />
				  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
				    <span class="navbar-toggler-icon"></span>
				  </button>
				</nav>
			</div>  
    </div>
  );
}

export default Navbar;