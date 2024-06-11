import { useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import { Flex } from 'antd';
import CommonButtons from '@/components/CommonButtons';
import axios from 'axios';
import {MedicamentoType} from '@/types/medicamento';
import { type QueryFunction, useQuery } from '@tanstack/react-query';

import '@/css/tables_bovines_report_v2.css';


const fetchMedicamento: QueryFunction<MedicamentoType, (string | undefined)[], never> = ({ queryKey }) => {
    // @ts-ignore
    return axios.get(`http://localhost:6754/medicamento/${ queryKey[1] }`).then(({ data }) => data[0]);
}


const Medication: React.FC = ()=>{

    const navigate = useNavigate();

    const [loadingMedicamento, setLoadingMedicamento] = useState(false);
    const { id } = useParams();
    // @ts-ignore
    // const medication = medications.find(b => b.id == id);
    const getMedicamento = useQuery({
        queryKey: ['getmedicamento', id],
        queryFn: fetchMedicamento
    });
    

    if(getMedicamento.isLoading) return <div>
        Carregando...
    </div>

    if(getMedicamento.isError) return <div>
        Erro: { getMedicamento.error.message }
    </div>

    const { data } = getMedicamento;
    return(
       <div className="row">
            <div className="col py-3  ">

                <div className="row   justify-content-center">

                    <div className=" col-lg-12 stretch-card">
                        <div >
                            <div >



                                <div id="dados_imprimir" className="table-responsive">
                                    <div className="table2">
                                        <h4 className="span-24" id="identificador">Informações do   {data?.tipo_medicamento} <text>de numerção { id } {data?.nome_medicamento }</text>
                                        </h4>
                                        <h4 className="span-24 subtitle" id="proprietario" >Faricante 
                                            <text> {data?.fabricante_medicamento}</text></h4>

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
                                            <p id="data_validade"> <text>{data?.data_validade }</text></p>
                                        </div>
                                        <div className="td span-6">
                                            <p id="data_registro"> <text>{ data?.data_registro }</text></p>
                                        </div>
                                        <div className="td span-6">
                                            <p id="quantidade"> <text>{ data?.quantidade_medicamento_estoque }</text></p>
                                        </div>
                                        <div className="td span-6">
                                            <p id="tipo"> <text>{ data?.tipo_medicamento }</text></p>
                                        </div>
                                        <div className="span-24 vspace"></div>
                                        {/* Fim Primeiros dados  */}

                                        {/* Segunda Linha de dados  */}
                                        <h6 className="span-24">Bula do {data?.nome_medicamento} </h6>

                                        <div className="th span-6">Detalhes</div>
                                        {/* <div className="th span-6">Capim</div>
                                        <div className="th span-6">Suplemto</div>
                                        <div className="th span-6">Silo</div>
                                        <hr className="span-24"/> */}

                                        <div className="td span-20">
                                            <p id="racao"><text>{ data?.bula }</text></p>
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