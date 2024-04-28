import logo from '@/assets/images/logotipo.svg';
// import { NavLink } from 'react-router-dom';

export default function Header(){
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className="row" >
                <img src={ logo } className="logo_image"   />
                {/* style={{ width: '100', height: '100' }} */}
            </div>

            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <i className="fa fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav ml-auto">
                    
                    <li className="nav-item">
                        <a className="nav-link" href="html/about.html">Sobre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Portfólio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="html/contact.html">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}