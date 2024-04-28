// import logo from '@/assets/images/logotipo.png'
import React from 'react';
import '../../css/menu_opcao.css';
import {
    TbDeviceTabletSearch as SearchIcon,
} from "react-icons/tb";
// import { HiOutlineDocumentReport as ReportIcon } from "react-icons/hi";
// import { SiMlflow as ProcessingIcon } from "react-icons/si";
// import { PiCirclesThreePlusFill as RegisterIcon } from "react-icons/pi";
import { TbVaccine  as RegisterIcon} from "react-icons/tb";

import CommonButtons from '@/components/CommonButtons';
import { useNavigate } from "react-router";

const Processing: React.FC = () => {
    const navigate = useNavigate();
    return (

        <div className="container text-center">
            <div className="row">
                <div className="col">
                    {/* <i className="fa-light fa-folder-tree"></i> */}
                    <a href="vaccinate" className="card opcao_menu ">

                        <RegisterIcon size={60} style={{ color: 'blue' }} />
                        <div className="overlay"></div>
                        <p>Vacinar </p>
                    </a>
                </div>


                <div className="col">

                    <a href="#" className="card opcao_menu ">
                        {/* <img src="../images/Icons/consultar.png" className="icone_perfil_user"> */}
                        <SearchIcon size={60} style={{ color: 'blue' }} />
                        <div className="overlay"></div>
                        <p>Definir Nutrição </p>
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
                        <div className="circle">

                        </div>
                        <p>--- </p>
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
            {/* <div style={{
                display: 'flex',
            }}>
                <BackNSave
                    onBackClick={() => {
                        navigate(-1);
                    }}
                />
            </div> */}
            <CommonButtons
                onBackClick={() => navigate('/perfil_user')}
            />

        </div>


    );
};
export default Processing