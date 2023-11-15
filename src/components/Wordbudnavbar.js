import {Link} from "react-router-dom";
function Wordbudnavbar(){
    return(
        <div>
           <nav class="navbar bg-success">
            <Link to="/" class="navbar-brand ">wordbud</Link>
            <div class="nav">
                <Link to="/" class="nav-link">Home</Link>
                <Link to="/" class="nav-link">Learn More</Link>
            </div>
        </nav>
        </div>
    )
}
export default Wordbudnavbar;