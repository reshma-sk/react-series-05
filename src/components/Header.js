import { LOGO_URL } from "../utils/constants";
const Header = ()=>{
    return(
        <div className = "flex justify-between items-center border border-black">
            <div>
                <img className='p-4' src={LOGO_URL} alt="Logo_img" />
            </div>
            <div className="p-4">
                <ul className='flex font-bold'>
                    <li className='m-3 hover:bg-orange-300'>Home</li>
                    <li className='m-3 hover:bg-orange-300'>About</li>
                    <li className='m-3 hover:bg-orange-300'>Contact Us</li>
                    <li className='m-3 hover:bg-orange-300'>Cart</li>            
                </ul>
            </div>

        </div>
    )
}
export default Header;