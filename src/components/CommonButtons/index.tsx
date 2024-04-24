import {
    Button,
    ConfigProvider,
} from 'antd';
import { PropsWithChildren } from 'react';
import { FaChevronLeft as BackIcon } from "react-icons/fa6";
import { IoSaveSharp as SaveIcon } from "react-icons/io5";

type Propriedades =  PropsWithChildren<{
    onBackClick?: () => void
    onSaveClick?: () => void
}>

export default function(
    {
        onBackClick,
        onSaveClick
    }: Propriedades
){

    return  <div style={{
        display: 'flex',
        gap: 10,
    }}>
        {
            onBackClick &&
            <Button
                type='primary'
                onClick={() => {
                    onBackClick && onBackClick();
                }}
                icon={<BackIcon size={10} />}
            >
                Voltar
            </Button>
        }

        {
            onSaveClick &&
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            colorPrimary: '#388E3C',
                            colorPrimaryHover: '#4CAF50',
                            colorPrimaryActive: '#43A047',
                        }
                    }
                }}
            >
                <Button
                    type='primary'
                    onClick={() => {
                        onSaveClick && onSaveClick();
                    }}
                    icon={<SaveIcon />}
                >
                    Salvar
                </Button>
            </ConfigProvider>
        }
    </div>
}