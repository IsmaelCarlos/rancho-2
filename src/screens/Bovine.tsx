import { bovine as bovines } from '@/data/bonive';
import { useNavigate, useParams } from "react-router";
import React, { useEffect } from 'react';
import { Flex } from 'antd';
import BackNSave from '@/components/CommonButtons';

import '@/css/tables_bovines_report_v2.css';



const Bovine: React.FC = ()=>{

    const navigate = useNavigate();

    const { id } = useParams();
    // @ts-ignore
    const bovine = bovines.find(b => b.id == id);

    return(
       <div className="row">
            <div className="col py-3  ">

                <div className="row   justify-content-center">

                    <div className=" col-lg-12 stretch-card">
                        <div >
                            <div >



                                <div id="dados_imprimir" className="table-responsive">
                                    <div className="table2">
                                        <h4 className="span-24" id="identificador">Relatórios do Bovino <text></text>
                                        </h4>
                                        <h4 className="span-24 subtitle" id="proprietario" >Proprietário
                                            <text></text></h4>

                                        <div className="span-24 vspace"></div>

                                        <h6 className="span-24">Dados</h6>
                                        

                                        {/* Primeiros dados  */}
                                        <div className="th span-6">Data de Nascimento</div>
                                        <div className="th span-6">Peso de Nascimento @</div>
                                        <div className="th span-6">Peso Atual @</div>
                                        <div className="th span-6">Raça</div>
                                        <hr className="span-24"/>

                                        <div className="td span-6">
                                            <p id="data_nascimento"> <text>{ bovine?.data_nascimento }</text></p>
                                        </div>
                                        <div className="td span-6">
                                            <p id="peso_inicial"> <text>{ bovine?.peso_inicial }</text></p>
                                        </div>
                                        <div className="td span-6">
                                            <p id="peso_atual"> <text>{ bovine?.peso_atual }</text></p>
                                        </div>
                                        <div className="td span-6">
                                            <p id="raca"> <text>{ bovine?.raca }</text></p>
                                        </div>
                                        <div className="span-24 vspace"></div>
                                        {/* Fim Primeiros dados  */}

                                        {/* Segunda Linha de dados  */}
                                        <h6 className="span-24">Alimentação e Suplementação</h6>

                                        <div className="th span-6">Ração</div>
                                        <div className="th span-6">Capim</div>
                                        <div className="th span-6">Suplemto</div>
                                        <div className="th span-6">Silo</div>
                                        <hr className="span-24"/>

                                        <div className="td span-6">
                                            <p id="racao"><text>{ bovine?.racao }</text></p>
                                        </div>
                                        <div className="td span-6">
                                            <p id="tipo_capim"> <text>{ bovine?.tipo_capim }</text></p>
                                        </div>
                                        <div className="td span-6">
                                            <p id="suplemento"><text>{ bovine?.suplemento }</text></p>
                                        </div>
                                        <div className="td span-6">
                                            <p id="silo"> <text>{ bovine?.silo }</text></p>
                                        </div>
                                        <div className="span-24 vspace"></div>
                                        {/* Fim segunda Linha de dados  */}

                                        {/* Terceira Linha de dados  */}
                                        <h6 className="span-24">Vacinas</h6>

                                        <div className="th span-6">Nome</div>
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
                                        <div className="span-24 vspace"></div>
                                        {/* Fim Terceira Linha de dados  */}

                                        <div className="tr span-24">
                                            <p id="relatorio"> <text>{ bovine?.relatorio }</text></p>
                                        </div>
                                    </div>
                                </div>
                                <div id="paginacao" style={{display: 'flex', gap:15}}>
                                    <button></button>
                                    <p>0</p>
                                    <button></button>
                                </div>
                                <BackNSave onBackClick={() => navigate(-1)} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
   
    );
}; 

export default Bovine;