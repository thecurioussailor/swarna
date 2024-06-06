import { IconBrandDiscord, IconBrandFacebook, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react"

function Footer() {
  return (
    <div>
        <footer>
            <div className="footer-content">
                <div className="footer-content__socials">
                    <i><IconBrandTwitter className="footer-icon" /></i>
                    <i><IconBrandLinkedin className="footer-icon" /></i>
                    <i><IconBrandDiscord className="footer-icon" /></i>
                    <i><IconBrandGithub className="footer-icon" /></i>
                    
                    
                    
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