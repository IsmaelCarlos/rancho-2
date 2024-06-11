import { food as foods } from '@/data/food';
import { useNavigate, useParams } from "react-router";
import React, { useEffect } from 'react';
import { Flex } from 'antd';
import CommonButtons from '@/components/CommonButtons';


import '@/css/tables_bovines_report_v2.css';



const Medication: React.FC = ()=>{

    const navigate = useNavigate();

    const { id } = useParams();
    // @ts-ignore
    const medication = medications.find(b => b.id == id);

    return(
       <div className="row">
            <div className="col py-3  ">

                <div className="row   justify-content-center">

                    <div className=" col-lg-12 stretch-card">
                        <div >
                            <div >



                                <div id="dados_imprimir" className="table-responsive">
                                    <div className="table2">
                                        <h4 className="span-24" id="identificador">Informações do   {medication?.tipo} <text>de numerção { id } { medication?.nome }</text>
                                        </h4>
                                        <h4 className="span-24 subtitle" id="proprietario" >Faricante 
                                            <text> {medication?.proprietario}</text></h4>

                                        <div className="span-24 vspace"></div>

                                        <h6 className="span-24">Dados</h6>
                                        

                                        {/* Primeiros dados  */}
                                        <div className="th span-6">Data de Validade</div>
                                        <div className="th span-6">Data de Registro</div>
                                        <div className="th span-6">Quatidade</div>
                                        <div className="th span-6">Tipo</div>
                                        {/* <div className="th span-6">Classificação</div> */}
                                        <hr className="span-24"/>

                                        <div className="td span-6">
                                            <p id="data_validade"> <text>{ medication?.data_validade }</text></p>
                                        </div>
                                        <div className="td span-6">
                                            <p id="data_registro"> <text>{ medication?.data_registro }</text></p>
                                        </div>
                                        <div className="td span-6">
                                            <p id="quantidade"> <text>{ medication?.quantidade }</text></p>
                                        </div>
                                        <div className="td span-6">
                                            <p id="tipo"> <text>{ medication?.tipo }</text></p>
                                        </div>
                                        <div className="span-24 vspace"></div>
                                        {/* Fim Primeiros dados  */}

                                        {/* Segunda Linha de dados  */}
                                        <h6 className="span-24">Bula do {medication?.nome} </h6>

                                        <div className="th span-6">Detalhes</div>
                                        {/* <div className="th span-6">Capim</div>
                                        <div className="th span-6">Suplemto</div>
                                        <div className="th span-6">Silo</div>
                                        <hr className="span-24"/> */}

                                        <div className="td span-20">
                                            <p id="racao"><text>{ medication?.bula_medicamento }</text></p>
                                        </div>
                                        {/* <div className="td span-6">
                                            <p id="tipo_capim"> <text>{ bovine?.tipo_capim }</text></p>
                                        </div>
                                        <div className="td span-6">
                                            <p id="suplemento"><text>{ bovine?.suplemento }</text></p>
                                        </div>
                                        <div className="td span-6">
                                            <p id="silo"> <text>{ bovine?.silo }</text></p>
                                        </div>
                                        <div className="span-24 vspace"></div> */}
                                        {/* Fim segunda Linha de dados  */}

                                        {/* Terceira Linha de dados  */}
                                        <h6 className="span-24">Vacinas</h6>

                                        {/* <div className="th span-6">Nome</div>
                                        <div className="th span-6">Tipo</div>
                                        <div className="th span-6">Dosagem/Quantidade</div>
                                        <div className="th span-6">Data</div>
                                        <hr className="span-24"/>

                                        <div className="td span-6">
                                            <ul>
                                                {
                                                    bovine?.vacina.map((vacina, indice) => {
                                                        return <li key={indice}>{ vacina.name }</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="td span-6">
                                            <ul>
                                                {
                                                    bovine?.vacina.map((vacina, indice) => {
                                                        return <li key={indice}>{ vacina.tipo_vacina }</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="td span-6">
                                            <ul>
                                                {
                                                    bovine?.vacina.map((vacina, indice) => {
                                                        return <li key={indice}>{ vacina.dosagem_quantidade_vacina }</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="td span-6">
                                            <ul>
                                                {
                                                    bovine?.vacina.map((vacina, indice) => {
                                                        return <li key={indice}>{ vacina.name }</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="span-24 vspace"></div> */}
                                        {/* Fim Terceira Linha de dados  */}

                                        {/* {
                                            bovine?.relatorio &&
                                            <div className="tr span-24">
                                                <h5>Relatório prescrito pelo Zootecnista: </h5>
                                                <p id="relatorio"> <text>{ bovine?.relatorio }</text></p>
                                            </div>
                                        } */}
                                    </div>
                                </div>
                                <CommonButtons
                                    onBackClick={() => navigate('/report')}
                                    onNextClick={() => navigate(`/medication/${parseInt(id??'0')+1}`)}
                                    onPreviousClick={() => navigate(`/medication/${parseInt(id??'0')-1}`)}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
   
    );
}; 

export default Medication;