import {Link} from 'react-router-dom'
import { IconBrandGithub, IconBrandTwitter, IconMenu2 } from "@tabler/icons-react"
import { useState } from 'react'
function Navbar() {

    const [sticky, setSticky] = useState(false);
    const [mobile, setMobile] = useState(false);
    const handleScroll = () => {
        if(window.scrollY > 150){
            setSticky(true)
        }else {
            setSticky(false)
        }
    }

    window.addEventListener("scroll",handleScroll);
    const goTop = () => {
        window.scrollTo({
            top: (0, 0),
            behavior: "smooth"
        })
    }
    return(
        <div>
            <nav className={sticky ? "sticky-nav" : ""}>
                <div className="navbar">
                    <Link to="/">
                        <p onClick={goTop}>SWARNA</p>
                    </Link>
                    <ul>
                        <li>
                          <a href="#home">Home</a>
                        </li>
                        <li>
                          <a href="#market">Market</a>
                        </li>
                        <li>
                          <a href="#choose-us">Choose Us</a>
                        </li>
                        <li>
                          <a href="#join">Join</a>
                        </li>
                    </ul>
                    <span>
                        <i><IconBrandTwitter/></i>
                        <i><IconBrandGithub/></i>
                       
                        {/* mobile */}
                        <IconMenu2 className="hamburger-menu" />
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;