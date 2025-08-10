import { get, post, put, del } from "../api"
import { Client } from "./clients.types"


export const getClients = () => get<Client[]>('/clients')

export const getClientById = (id: string) => get<Client>(`/clients/${id}`)

export const createClient = (data: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>) =>
  post<Client>('/clients', data)

export const updateClient = (id: string, data: Partial<Client>) =>
  put<Client>(`/clients/${id}`, data)

export const deleteClient = (id: string) => del<{ success: boolean }>(`/clients/${id}`)
