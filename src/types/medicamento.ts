export interface MedicamentoType {
    id_medicamento: number
    id_medicamento_aplicado: number | null
    nome_medicamento: string
    tipo_medicamento: string
    fabricante_medicamento: string
    quantidade_medicamento_estoque: number | null
    volume_medicamento: number
    unidade_medida: string
    data_validade: string
    data_registro: string
    bula: string
}