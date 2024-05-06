import { medication as medications } from '@/data/medication';
import { useNavigate, useParams } from "react-router";
import React, { useEffect , useState} from 'react';
import { Flex } from 'antd';
import CommonButtons from '@/components/CommonButtons';


import '@/css/tables_bovines_report_v2.css';



const Brinco: React.FC = () => {
    const [encodedUID, setEncodedUID] = useState<string>('');
  
    useEffect(() => {
      // Abre a conexão com a porta serial
      const serial = new WebSocket('ws://localhost:81');
  
      // Recebe os dados da porta serial e atualiza a interface
      serial.onmessage = function (event) {
        const encodedUID = event.data;
        setEncodedUID(encodedUID);
      };
  
      // Fecha a conexão quando o componente é desmontado
      return () => {
        serial.close();
      };
    }, []);
  
    return (
      <div>
        <h1>RFID Codificação/Decodificação</h1>
  
        <h2>Último UID codificado:</h2>
        <div id="encodedUID">{encodedUID}</div>
      </div>
    );
  };
  
  export default Brinco;