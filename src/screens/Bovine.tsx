import { bovine } from '@/data/bonive';
import { useNavigate } from "react-router";
import React, { useEffect } from 'react';
import { Flex } from 'antd';



const Bovine: React.FC = ()=>{
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
                                                <p id="data_nascimento"> <text></text></p>
                                            </div>
                                            <div className="td span-6">
                                                <p id="peso_inicial"> <text></text></p>
                                            </div>
                                            <div className="td span-6">
                                                <p id="peso_atual"> <text></text></p>
                                            </div>
                                            <div className="td span-6">
                                                <p id="raca"> <text></text></p>
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
                                                <p id="racao"><text></text></p>
                                            </div>
                                            <div className="td span-6">
                                                <p id="tipo_capim"> <text></text></p>
                                            </div>
                                            <div className="td span-6">
                                                <p id="suplemento"><text></text></p>
                                            </div>
                                            <div className="td span-6">
                                                <p id="silo"> <text></text></p>
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
                                                <p id="vacina"><text></text></p>
                                            </div>
                                            <div className="td span-6">
                                                <p id="tipo_vacina"> <text></text></p>
                                            </div>
                                            <div className="td span-6">
                                                <p id="dosagem_quantidade_vacina"> <text></text></p>
                                            </div>
                                            <div className="td span-6">
                                                <p id="data_vacina"> <text></text></p>
                                            </div>
                                            <div className="span-24 vspace"></div>
                                            {/* Fim Terceira Linha de dados  */}

                                            <div className="tr span-24">
                                                <p id="relatorio"> <text></text></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="paginacao" style={{display: 'flex', gap:15}}>
                                        <button></button>
                                        <p>0</p>
                                        <button></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
   
    );
}; 

export default Bovine;