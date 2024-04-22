// import logo from '@/assets/images/logotipo.png'
import React from 'react';
import '../../css/menu_opcao.css';
import {
  // TbDeviceDesktopPlus as RegisterIcon,
  TbDeviceTabletSearch as SearchIcon,
} from "react-icons/tb";
import { HiOutlineDocumentReport as ReportIcon } from "react-icons/hi";
import { SiMlflow as ProcessingIcon } from "react-icons/si";
// import { GiCow as RegisterIcon } from "react-icons/gi";
// import { HiMiniSquaresPlus as RegisterIcon} from "react-icons/hi2";
import { PiCirclesThreePlusFill as RegisterIcon} from "react-icons/pi";


const Perfil_user: React.FC = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          {/* <i className="fa-light fa-folder-tree"></i> */}
          <a href="registration_option" className="card opcao_menu ">

            <RegisterIcon size={60} style={{ color: 'blue' }} />
            <div className="overlay"></div>
            <p>Cadastrar </p>
          </a>
        </div>


        <div className="col">

          <a href="#" className="card opcao_menu ">
            {/* <img src="../images/Icons/consultar.png" className="icone_perfil_user"> */}
            <SearchIcon size={60} style={{ color: 'blue' }} />
            <div className="overlay"></div>
            <p>Consultar </p>
          </a>
        </div>


        <div className="col">
          <a href="Report" className="card opcao_menu ">
            {/* <img src="../images/Icons/relatorio.png" className="icone_perfil_user"> */}
            <ReportIcon size={60} style={{ color: 'blue' }} />
            <div className="overlay"></div>
            <p>Relatórios</p>
          </a>

        </div>


        <div className="col">
          <a href="processing.html" className="card human-resources">
            {/* <img src="../images/Icons/processo.png" className="icone_perfil_user"> */}
            <ProcessingIcon size={60} style={{ color: 'blue' }} />
            <div className="overlay"></div>
            <p>Processamento</p>
          </a>

        </div>
      </div>
      <div className="row">
        <div className="col">
          <i className="fa-light fa-folder-tree"></i>
          <a href="#" className="card opcao_menu ">
            <span className="fa fa-hashtag fa-5x"></span>
            <div className="overlay"></div>
            <p>--- </p>
          </a>
        </div>


        <div className="col">

          <a href="#" className="card opcao_menu ">

            <span className="fa fa-hashtag fa-5x"></span>
            <div className="overlay"></div>
            <div className="circle">

            </div>
            <p>--- </p>
          </a>
        </div>


        <div className="col">
          <a href="#" className="card opcao_menu ">
            <span className="fa fa-hashtag fa-5x"></span>
            <div className="overlay"></div>
            <p>---</p>
          </a>

        </div>


        <div className="col">
          <a href="#" className="card human-resources">
            <span className="fa fa-hashtag fa-5x"></span>
            <div className="overlay"></div>
            <p>---</p>
          </a>

        </div>
      </div>

      <div className="row">
        <div className="col">
          <i className="fa-light fa-folder-tree"></i>
          <a href="#" className="card opcao_menu ">
            <span className="fa fa-hashtag fa-5x"></span>
            <div className="overlay"></div>
            <p>--- </p>
          </a>
        </div>


        <div className="col">

          <a href="#" className="card opcao_menu ">

            <span className="fa fa-hashtag fa-5x"></span>
            <div className="overlay"></div>
            <div className="circle">

            </div>
            <p>--- </p>
          </a>
        </div>


        <div className="col">
          <a href="#" className="card opcao_menu ">
            <span className="fa fa-hashtag fa-5x"></span>
            <div className="overlay"></div>
            <p>---</p>
          </a>

        </div>


        <div className="col">
          <a href="#" className="card human-resources">
            <span className="fa fa-hashtag fa-5x"></span>
            <div className="overlay"></div>
            <p>---</p>
          </a>

        </div>
      </div>
    </div>
  );
};
export default Perfil_user