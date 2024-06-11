import React, { useEffect } from 'react';
import { Button } from 'antd';
import { FaChevronLeft as BackIcon } from 'react-icons/fa6';
import BackNSave from '@/components/CommonButtons';
import {MedicamentoType} from '@/types/medicamento';


import { useNavigate, useParams } from "react-router";
import { QueryFunction, useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import { FaChevronLeft as BackIcon } from "react-icons/fa6";

const fetchPharmacy: QueryFunction<MedicamentoType[], (string | undefined)[], never> = ({ queryKey }) => {
    return axios.get(`http://localhost:6754/medicamento`).then(({ data }) => data);
}

const Report_pharmacy = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const getPharmacy = useQuery({
        queryKey: [ 'getPharmacy', id ],
        queryFn: fetchPharmacy
    });


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

    const medication = getPharmacy.data;

    if(getPharmacy.isLoading){
        return <div>Carregando...</div>
    }

    if(getPharmacy.isError){
        console.error(getPharmacy.error);
        return <div>
            Erro:
            { getPharmacy.error.message }
        </div>
    }

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
                                                    medication?.map(element => {
                                                        return <tr style={{ cursor: 'pointer' }} onClick={() => navigate(`/medication/${element.id_medicamento}`)} key={element.id_medicamento} >
                                                            <td>{element.tipo_medicamento}</td>
                                                            {/* <td style={{ textAlign: element.nome ? 'center' : undefined }}>{element.nome || '-'}</td> */}
                                                            <td >{element.nome_medicamento || '-'}</td>
                                                            <td>{ element.data_validade && (new Date(element.data_validade)).toLocaleDateString()}</td>
                                                            <td>{ element.data_registro && (new Date(element.data_registro)).toLocaleDateString()}</td>
                                                            <td>
                                                                {/* <label className={`badge badge-${corInicial(element.quantidade)}`} htmlFor="">
                                                                    { element.quantidade }
                                                                </label> */}
                                                                <label className={`badge badge-${corInicial(
                                                                    parseInt(
                                                                        element
                                                                            ?.quantidade_medicamento_estoque
                                                                            ?.toString()
                                                                            ??'0'
                                                                    )
                                                                )}`} htmlFor="">
                                                                    {element.quantidade_medicamento_estoque}
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

export default Report_pharmacy;
