import React, { useEffect } from 'react';
import { Button } from 'antd';
import { FaChevronLeft as BackIcon } from 'react-icons/fa6';
import BackNSave from '@/components/CommonButtons';
import {food} from '@/data/food';

import { useNavigate } from "react-router";
// import { FaChevronLeft as BackIcon } from "react-icons/fa6";
const Report_food: React.FC = () => {


    const corInicial = (peso: number): string => {
        const pesoNum = peso;
        if (pesoNum <= 2)
            return 'danger';
        else if (pesoNum > 2)
            return 'success';
        else
            return 'info';
    };


    const corAtual = (peso: number): string => {
        const pesoNum = peso;
        if (pesoNum < 8)
            return 'danger';
        else if (pesoNum < 17)
            return 'warning';
        else if (pesoNum >= 17)
            return 'success';
        else
            return 'info';
    };

    useEffect(() => {
    }, []);

    const navigate = useNavigate();

    return (
        <div>
            {/* <div id="myChart" className="chart--container" style={{ height: '420px' }}>
                <a href="#" rel="noopener" className="zc-ref"></a>
            </div> */}
            <div className="row">
                <div className="col py-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 stretch-card">
                            <div >
                                <div className="card-body">
                                    <h4 className="card-title">Relatórios</h4>
                                    <p className="card-description">
                                        Informações iniciais
                                    </p>
                                    <div className="table-responsive">
                                        <div className="form-group pull-right">
                                            <input type="text" className="search form-control" placeholder="Buscar" />
                                        </div>
                                        <span className="counter pull-right"></span>
                                        <table className="table results">
                                            <thead>
                                                <tr className="warning no-result">
                                                    <th>Tipo</th>
                                                    <th>Nome</th>
                                                    <th>Dt. Entrada</th>
                                                    <th>Dt. Registro</th>
                                                    <th>Estoque</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    food.map(element => {
                                                        return <tr style={{ cursor: 'pointer' }} onClick={() => navigate(`/food/${element.id}`)} key={element.id} >
                                                            <td>{element.tipo}</td>
                                                            {/* <td style={{ textAlign: element.nome ? 'center' : undefined }}>{element.nome || '-'}</td> */}
                                                            <td >{element.nome || '-'}</td>
                                                            <td>{element.data_validade}</td>
                                                            <td>{element.data_registro}</td>
                                                            <td>
                                                                {/* <label className={`badge badge-${corInicial(element.quantidade)}`} htmlFor="">
                                                                    { element.quantidade }
                                                                </label> */}
                                                                <label className={`badge badge-${corInicial(parseInt(element.quantidade))}`} htmlFor="">
                                                                    {element.quantidade}
                                                                </label>

                                                            </td>

                                                        </tr>
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
            }}>
                <BackNSave
                    onBackClick={() => {
                        navigate(-1);
                    }}
                />
            </div>
        </div>

    );
};

export default Report_food;
