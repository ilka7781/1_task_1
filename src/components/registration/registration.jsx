import './reg.scss';
import {BsGoogle} from "react-icons/bs";
import {UserAuth} from "../../context/authContext";
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";



const Registration = () => {
    const {googleSignIn, user}=UserAuth();
    const navigate=useNavigate();
    const handleGoogleSignIn= async () => {
        try{
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        if (user != null){
            navigate('/main')
        }
    }, [navigate,user])
    return (
        <div className='reg_body '>
            <div className='container2'>
                <Link to='/main' className='reg_link'>
                    <button  type="button" onClick={handleGoogleSignIn} className=" submit">
                        <div className='gdiv'><BsGoogle className="g"/></div>
                        <div>SIGN IN WITH GOOGLE</div>
                    </button>
                </Link>

            </div>
        </div>
    );
}
export default Registration;