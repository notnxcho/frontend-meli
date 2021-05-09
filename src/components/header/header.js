import { React } from 'react';
import SearchBar from './searchBar'
import LogoMeLi from '../../Assets/Logo_ML.png'
import '../../App.css';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="logo">
                <img src={LogoMeLi} alt="Isotipo de Mercadolibre"/>
            </div>
            <SearchBar></SearchBar>
            <div className="menu-options"></div>
        </div>
    )
}
export default Header;