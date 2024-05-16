import { EnderecoType } from './endereco';
import { PessoaType } from './people';

export interface FazendaType {
    id_fazenda: number
    id_endereco: number
    tamanho_hectare: number
    nome: string
    pecuaria: string
}


export type FormFazendaType =  Omit<FazendaType, 'id_fazenda' | 'id_endereco'>
    & Pick<EnderecoType, 'zona' | 'cep_endereco' | 'estado' | 'cidade'>
    & Pick<PessoaType, 'id_pessoa'>