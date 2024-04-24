import {
    Button,
    ConfigProvider,
} from 'antd';
import { PropsWithChildren } from 'react';
import { IoSaveSharp as SaveIcon } from "react-icons/io5";
import {
    FaChevronLeft as BackIcon,
    FaChevronRight as NextIcon,
    FaChevronLeft as PreviousIcon,
} from "react-icons/fa6";

type Propriedades =  PropsWithChildren<{
    onBackClick?: () => void
    onSaveClick?: () => void
    onNextClick?: () => void
    onPreviousClick?: () => void
}>

export default function(
    {
        onBackClick,
        onSaveClick,
        onNextClick,
        onPreviousClick
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
            onPreviousClick &&
            <Button
                type='primary'
                onClick={() => {
                    onPreviousClick && onPreviousClick();
                }}
                icon={<PreviousIcon size={10} />}
            >
                Anterior
            </Button>
        }

        {
            onNextClick &&
            <Button
                type='primary'
                onClick={() => {
                    onNextClick && onNextClick();
                }}
                icon={<NextIcon size={10} />}
            >
                Próximo
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