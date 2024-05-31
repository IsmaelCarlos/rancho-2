import React, { useEffect } from 'react';
import { Button } from 'antd';
import { FaChevronLeft as BackIcon } from 'react-icons/fa6';
import BackNSave from '@/components/CommonButtons';
import { BovinoType } from '@/types/bovino';
import { bovine } from '@/data/bonive';

import { useNavigate } from "react-router";
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function fetchBovino() {
    return axios.get<BovinoType[]>('http://localhost:6754/bovino').then(({ data }) => data);
}


const Report_bovine = () => {

    const getBovino = useQuery({
        queryKey: [ 'getbovino' ],
        queryFn: fetchBovino
    });


    const corPesoInicial = (peso: number): string => {
        const pesoNum = peso;
        if (pesoNum <= 12)
            return 'danger';
        else if (pesoNum > 12)
            return 'success';
        else
            return 'info';
    };


    const corPesoAtual = (peso: number): string => {
        const pesoNum = peso;
        if (pesoNum < 200)
            return  'danger';
        else if (pesoNum < 300)
            return 'warning';
        else if (pesoNum >= 400)
            return 'success';
        else
            return 'info';
    };

    useEffect(() => {
    }, []);

    const navigate = useNavigate();

    if(getBovino.isLoading) return <div>
        Carregando...
    </div>

    if(getBovino.isError) return <div>
        Erro: { getBovino.error.message }
    </div>

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
                                                    <th>Identificador</th>
                                                    <th>Raça</th>
                                                    <th>Data de entrada</th>
                                                    <th>Peso Inicial</th>
                                                    <th>Peso Final</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    getBovino.data &&
                                                    getBovino.data.map(({
                                                        id_bovino,
                                                        display_brinco,
                                                        uid_brinco,
                                                        raca,
                                                        data_entrada_confinamento,
                                                        peso_nascimento,
                                                        peso_atual
                                                    }) => {
                                                        return <tr style={{ cursor: 'pointer' }} key={id_bovino} onClick={() => navigate(`/report_bovine/bovine/${uid_brinco}`)}  >
                                                            <td>{ display_brinco }</td>
                                                            <td style={{ textAlign: raca ? 'center' : undefined }}>{ raca || '-' }</td>
                                                            <td>{ (new Date(data_entrada_confinamento)).toLocaleString() }</td>
                                                            <td>
                                                                <label className={`badge badge-${corPesoInicial(peso_nascimento)}`} htmlFor="">
                                                                    { peso_nascimento }kg
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label className={`badge badge-${corPesoAtual(peso_atual)}`} htmlFor="">
                                                                    { peso_atual }kg
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
