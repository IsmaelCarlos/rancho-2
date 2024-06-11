import { bovine as bovines } from '@/data/bonive';
import { useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import { Flex } from 'antd';
import CommonButtons from '@/components/CommonButtons';
import { type QueryFunction, useQuery } from '@tanstack/react-query';
import { BovinoType } from '@/types/bovino';

import '@/css/tables_bovines_report_v2.css';
import axios from 'axios';


import { format } from 'date-fns';


const fetchBovino: QueryFunction<BovinoType, (string | undefined)[], never> = ({ queryKey }) => {
    // @ts-ignore
    return axios.get(`http://localhost:6754/bovino/by-uid-brinco/${ queryKey[1] }`).then(({ data }) => data[0]);
}


const Bovine: React.FC = ()=>{

    const navigate = useNavigate();

    const { id } = useParams();
    // @ts-ignore
    const bovine = bovines.find(b => b.id == id);

    const getBovino = useQuery({
        queryKey: [ 'getBovino', id ],
        queryFn: fetchBovino
    });

    if(getBovino.isLoading) return <div>
        Carregando...
    </div>

    if(getBovino.isError) return <div>
        Erro: { getBovino.error.message }
    </div>

    const { data } = getBovino;
    // const data = {
    //     medicamentos_aplicados: [
    //         {
    //             medicamento: {
    //                 id_medicamento_aplicado: 1,
    //                 data_registro: "2024-06-05T00:00:00Z" // Exemplo de data ISO 8601
    //             }
    //         }
    //     ]
    // };
    

    return(
       <div className="row">
            <div className="col py-3  ">

                <div className="row   justify-content-center">

                    <div className=" col-lg-12 stretch-card">
                        <div >
                            <div >
                                <div id="dados_imprimir" className="table-responsive">
                                    <div className="table2">
                                        <h1>{ data?.display_brinco }</h1>
                                        <h4 className="span-24" id="identificador">Relatórios do Bovino <text>do brinco { id } { bovine?.raca } {bovine?.classificacao}</text>
                                        </h4>
                                        {/* <h4 className="span-24 subtitle" id="proprietario" >Proprietário 
                                            <text> {bovine?.proprietario}</text></h4> */}

                                        <div className="span-24 vspace"></div>

                                        <h6 className="span-24">Dados</h6>
                                        

                                        {/* Primeiros dados  */}
                                        <div className="th span-6">Data de Nascimento</div>
                                        <div className="th span-6">Peso de Nascimento kg</div>
                                        <div className="th span-6">Peso Atual kg</div>
                                        <div className="th span-6">Raça</div>
                                        {/* <div className="th span-6">Classificação</div> */}
                                        <hr className="span-24"/>

                                        <div className="td span-6">
                                            {/* @ts-ignore */}
                                            <p id="data_nascimento"> <text>{ (new Date(data?.data_nascimento)).toLocaleString() }</text></p>
                                        </div>
                                        <div className="td span-6">
                                            <p id="peso_inicial"> <text>{ data?.peso_nascimento }</text></p>
                                        </div>
                                        <div className="td span-6">
                                            <p id="peso_atual"> <text>{ data?.peso_atual }</text></p>
                                        </div>
                                        <div className="td span-6">
                                            <p id="raca"> <text>{ data?.raca }</text></p>
                                        </div>
                                        <div className="span-24 vspace"></div>
                                        {/* Fim Primeiros dados  */}

                                        {/* Segunda Linha de dados  */}
                                                <h6 className="span-24">Alimentação e Suplementação</h6>

                                                <div className="th span-6">Nome</div>
                                                <div className="th span-6">Tipo</div>
                                                <div className="th span-6">Quantidade</div>
                                                <div className="th span-6">Data</div>
                                                <hr className="span-24"/>

                                                <div className="td span-6">
                                                    {/* <p id="racao"><text>{ bovine?.racao }</text></p> */}
                                                    <ul>
                                                        {
                                                            data?.racoes_aplicadas.map(({ racao }) => {
                                                                const { id_racao, nome_racao } = racao;
                                                                return <li key={id_racao}>{nome_racao}</li>
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="td span-6">
                                                    {/* <p id="tipo_capim"> <text>{ bovine?.tipo_capim }</text></p> */}
                                                    <ul>
                                                        {
                                                            data?.racoes_aplicadas.map(({ racao }) => {
                                                                const { id_racao, tipo_racao } = racao;
                                                                return <li key={id_racao}>{ tipo_racao }</li>
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="td span-6">
                                                    {/* <p id="suplemento"><text>{ bovine?.suplemento }</text></p> */}
                                                    <ul>
                                                        {
                                                            data?.racoes_aplicadas.map(({ racao }) => {
                                                                const { id_racao, peso_saco } = racao;
                                                                return <li key={id_racao}>{ peso_saco }</li>
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="td span-6">
                                                    {/* <p id="silo"> <text>{ bovine?.silo }</text></p> */}
                                                    <ul>
                                                        {
                                                            data?.racoes_aplicadas
                                                                .filter(({ racao }) => {
                                                                    return true;
                                                                })
                                                                .map(({ racao }) => {
                                                                    const { id_racao_aplicado, data_registro  } = racao;
                                                                    return <li key={id_racao_aplicado}>{
                                                                        // format(new Date(data_registro), "dd/MM/yyyy")
                                                                         (new Date(data_registro)).toLocaleDateString()
                                                                    }</li>
                                                                })
                                                        }
                                                    </ul>
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
                                                    data?.medicamentos_aplicados.map(({ medicamento }) => {
                                                        const { id_medicamento, nome_medicamento } = medicamento;
                                                        return <li key={id_medicamento}>{nome_medicamento}</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="td span-6">
                                            <ul>
                                                {
                                                    data?.medicamentos_aplicados.map(({ medicamento }) => {
                                                        const { id_medicamento, tipo_medicamento } = medicamento;
                                                        return <li key={id_medicamento}>{ tipo_medicamento }</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="td span-6">
                                            <ul>
                                                {
                                                    data?.medicamentos_aplicados.map(({ medicamento }) => {
                                                        const { id_medicamento, volume_medicamento } = medicamento;
                                                        return <li key={id_medicamento}>{ volume_medicamento }</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="td span-6">
                                            <ul>
                                                {
                                                    data?.medicamentos_aplicados.map(({ medicamento }) => {
                                                        const { id_medicamento_aplicado, data_registro  } = medicamento;
                                                        return <li key={id_medicamento_aplicado}>{
                                                            format(new Date(), "dd/MM/yyyy")
                                                            //  (new Date(data_registro)).toLocaleDateString()
                                                        }</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="span-24 vspace"></div>
                                        {/* Fim Terceira Linha de dados  */}

                                        {
                                            //  bovine?.relatorio &&
                                            <div className="tr span-24">
                                                <h5>Relatório prescrito pelo Zootecnista Vacina: </h5>
                                                <ul>
                                                {
                                                    data?.medicamentos_aplicados.map(({ observacao, medicamento  }) => {
                                                        const { id_medicamento_aplicado } = medicamento;
                                                        return <li key={id_medicamento_aplicado}>
                                                            O relatório foi realizado no dia {
                                                                // 
                                                                format(new Date(), "dd/MM/yyyy")
                                                            }: 
                                                            { observacao }
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                            </div>
                                            
                                        }
                                         {
                                            //  bovine?.relatorio &&
                                            <div className="tr span-24">
                                                <h5>Relatório prescrito pelo Zootecnista Dieta: </h5>
                                                <ul>
                                                {
                                                    data?.racoes_aplicadas.map(({ observacao, racao  }) => {
                                                        const { id_racao_aplicado } = racao;
                                                        return <li key={id_racao_aplicado}>
                                                            O relatório foi realizado no dia {
                                                                // 
                                                                format(new Date(), "dd/MM/yyyy")
                                                            }: 
                                                            { observacao }
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                            </div>
                                            
                                        }
                                    </div>
                                </div>
                                <CommonButtons
                                    onBackClick={() => navigate(-1)}
                                    // onNextClick={() => navigate(`/bovine/${parseInt(id??'0')+1}`)}
                                    // onPreviousClick={() => navigate(`/bovine/${parseInt(id??'0')-1}`)}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
   
    );
}; 

export default Bovine;