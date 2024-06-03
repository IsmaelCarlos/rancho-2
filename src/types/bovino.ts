import { MedicamentoType } from '@/types/medicamento';
export interface BovinoType{
    id_bovino : number
	id_fazenda: number
    raca: string
    classe: string
	display_brinco: string
	uid_brinco :string
	id_medicamento_aplicado: number
	id_racao_aplicado: number 
	id_pessoa_proprietario_atual: number
	data_nascimento: string
	data_entrada_confinamento: string
	peso_nascimento: number
	peso_confinamento: number
	peso_atual: number
	
	medicamentos_aplicados: Array<{
		
		medicamento: MedicamentoType
		observacao: string
	}>
    // destino_bovino: string
}
    