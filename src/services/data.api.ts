import { get } from "./api";
export type DashboardData = {
    totalClients: number;
    clientsWithPlannerPercentual: number;
    percentualByprofile: Record<string, number>;
}
export const getDashboardData = () => get<DashboardData>('/clients/dashboard')
