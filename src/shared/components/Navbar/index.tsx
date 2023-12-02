import './navbar.css';
import downArrow from '../../../assets/downArrow.svg';
export const Navbar = () => {
    return (
        <nav class="main_nav">
            <ul>
                <li>
                    <a href="#">
                        list
                        <img src={downArrow} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        list
                        <img src={downArrow} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        list
                        <img src={downArrow} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        list
                        <img src={downArrow} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        list
                        <img src={downArrow} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        list
                        <img src={downArrow} alt="" />
                    </a>
                </li>
            </ul>
        </nav>
    );
};
