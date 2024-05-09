import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Navbar = () =>{
    const navigate = useNavigate();
    const doLogout = () =>{
        toast.success('Logout success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        localStorage.removeItem('isLogin');
        navigate('/logout-page');
    }

    return (
        <div>
            <div class="navbar">
            <div class="logo">
                <h1>RoomLess</h1>
            </div>
            <div class="home-content">
                <ul>
                    <li><Link to='/landing-page'className="link">Home</Link></li>
                    <li><Link to='/rental-listing-page'className="link">RentalListing</Link></li>
                    <li><Link to=''className="link">Blogs</Link></li>
                    <li><Link to=''className="link">Support</Link></li>
                </ul>
            </div>
            <div class="auth">
                <div class="dropdown">
                    <i class="fa-solid fa-user"></i>
                    <div class="dropdown-content">
                    <Link to='/login-page' >Login</Link>
                    <Link to='/user-detail-page' >UserDetail</Link>
                    </div>
                </div>
                <i  onClick={doLogout} class="fa-solid fa-right-from-bracket"></i>
            </div>
        </div>
        </div>

    );
}
export default Navbar;