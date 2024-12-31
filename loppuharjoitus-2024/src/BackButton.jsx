import { Link } from "react-router-dom";

function BackButton(){
    return(
        <li class="backbutton"><Link to="/">⬅️Back</Link></li>
    )
}

export default BackButton;