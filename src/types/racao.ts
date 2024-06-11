export interface RacaoType{
    id_racao : number
    id_racao_aplicado : number | null
    tipo_racao : string
    nome_racao: string
    fabricante_racao : string
    quantidade_racao_estoque: number | null
    peso_saco : number
    unidade_medida : string
    data_validade : string
    data_registro: string 
    informacao_racao: string
}
