import { IconBrandDiscord, IconBrandFacebook, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react"

function Footer() {
  return (
    <div>
        <footer>
            <div className="footer-content">
                <div className="footer-content__socials">
                    <a href="https://x.com/sagar11ashutosh" target="_blank"><i><IconBrandTwitter className="footer-icon" /></i></a>
                    <a href="https://www.linkedin.com/in/ashutosh-sagar-4b2612185/" target="_blank"><i><IconBrandLinkedin className="footer-icon" /></i></a>
                    <a><i><IconBrandDiscord className="footer-icon" /></i></a>
                    <a href="https://github.com/thecurioussailor" target="_blank"><i><IconBrandGithub className="footer-icon" /></i></a>
                    
                    
                    
                </div>
                <div className="footer-content__text">
                    <p>Privacy</p>
                    <p>Terms of Use</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer