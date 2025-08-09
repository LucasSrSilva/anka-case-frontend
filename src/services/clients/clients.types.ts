export type ClientStatus = 'ativo' | 'inativo'

export type ClientProfile = 'Solteiro' | 'Com_Filho' | 'Com_Dependente'

export interface Client {
  id: string
  nome: string
  email: string
  idade: number
  status: ClientStatus
  perfilFamiliar: ClientProfile
  createdAt: string
  updatedAt: string
}
