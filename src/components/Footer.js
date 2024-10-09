import { LINKEDIN_URL } from "../utils/constants"
const Footer = ()=>{
    const year = new Date().getFullYear()
    return(
        <div className="footer">
            Created By
            <span>
                <a href={LINKEDIN_URL} target="blank">Reshma Shaik</a>
            </span>
            <span>&copy;</span>
            {year}
            <strong>
                <span> spoons & Forks</span>
            </strong>
        </div>
    )
}
export default Footer;