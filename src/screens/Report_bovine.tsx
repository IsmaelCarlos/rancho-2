import React, { useEffect } from 'react';
import { Button } from 'antd';
import { FaChevronLeft as BackIcon } from 'react-icons/fa6';
import BackNSave from '@/components/BackNSave';
import { bovine } from '@/data/bonive'

import { useNavigate } from "react-router";
// import { FaChevronLeft as BackIcon } from "react-icons/fa6";
const Report_bovine: React.FC = () => {


    const corPesoInicial = (peso: number): string => {
        const pesoNum = peso;
        if (pesoNum <= 2)
            return 'danger';
        else if (pesoNum > 2)
            return 'success';
        else
            return 'info';
    };


    const corPesoAtual = (peso: number): string => {
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
            <div id="myChart" className="chart--container" style={{ height: '420px' }}>
                <a href="#" rel="noopener" className="zc-ref"></a>
            </div>
            <div className="row">
                <div className="col py-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 stretch-card">
                            <div className="card">
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
                                                    <th>Identificador</th>
                                                    <th>Raça</th>
                                                    <th>Data de entrada</th>
                                                    <th>Peso Inicial</th>
                                                    <th>Peso Final</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    bovine.map(element => {
                                                        return <tr key={element.id} >
                                                            <td>{ element.id }</td>
                                                            <td style={{ textAlign: element.raca ? 'center' : undefined }}>{ element.raca || '-' }</td>
                                                            <td>{ element.data_nascimento }</td>
                                                            <td>
                                                                <label className={`badge badge-${corPesoInicial(element.peso_inicial)}`} htmlFor="">
                                                                    { element.peso_inicial }@
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label className={`badge badge-${corPesoAtual(element.peso_atual)}`} htmlFor="">
                                                                    { element.peso_atual }@
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

export default Report_bovine;
