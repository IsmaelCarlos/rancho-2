// import logo from '@/assets/images/logotipo.png'
import React from 'react';
import '../../css/menu_opcao.css';
import { GiCow as RegisterIcon } from "react-icons/gi";
import { FaSuitcaseMedical as RegisterMedical} from "react-icons/fa6";
import { BsBagPlusFill as RegisterRation} from "react-icons/bs";
import { useNavigate } from "react-router";
import { FaChevronLeft as BackIcon } from "react-icons/fa6";


import {
    Button,
} from 'antd';


const Report: React.FC = () => {

	const navigate = useNavigate();
	

	return (
		<div className="container text-center" style={{
			display: 'flex',
			flexDirection: 'column',
			gap: 25,
			}}>
			<div>
				<div className="row">
					<div className="col">
						{/* <i className="fa-light fa-folder-tree"></i> */}
						<a href="registration_bovine" className="card opcao_menu ">

							<RegisterIcon size={60} style={{ color: 'blue' }} />
							<div className="overlay"></div>
							<p>Bovino </p>
						</a>
					</div>


					<div className="col">

						<a href="registration_pharmacy" className="card opcao_menu ">
							{/* <img src="../images/Icons/consultar.png" className="icone_perfil_user"> */}
							<RegisterMedical size={60} style={{ color: 'blue' }} />
							<div className="overlay"></div>
							<p>Farmácia </p>
						</a>
					</div>


					<div className="col">
						<a href="registration_food" className="card opcao_menu ">
							{/* <img src="../images/Icons/relatorio.png" className="icone_perfil_user"> */}
							<RegisterRation size={60} style={{ color: 'blue' }} />
							<div className="overlay"></div>
							<p>Rações</p>
						</a>

					</div>


					<div className="col">
						<i className="fa-light fa-folder-tree"></i>
						<a href="#" className="card opcao_menu ">
							<span className="fa fa-hashtag fa-5x"></span>
							<div className="overlay"></div>
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
			</div>
			
			<div style={{
				display: 'flex',

			}}>
				<Button
					type='primary'
					onClick={() => {
						navigate(-1);
					}}
					icon={<BackIcon size={10} />}
				>
					Voltar
				</Button>
			</div>
		</div>
	);
};
export default Report