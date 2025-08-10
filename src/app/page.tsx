'use client'
import { getClients } from "@/services/clients/clients.api";
import { Client } from "@/services/clients/clients.types";
import { DashboardData, getDashboardData } from "@/services/data.api";
import { useEffect, useState } from "react";
import { RadialChart } from '../components/radial-chart'



export default function Home() {
  const [clients, setClients] = useState<Client[]>([]);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const data = await getDashboardData();
      setDashboardData(data);
    };

    fetchDashboardData();
  }, []);

  useEffect(() => {
    const fetchClients = async () => {
      const data = await getClients();
      setClients(data);
    };

    fetchClients();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      <div className="bg-[#1b1b1b]">
        <h2>Clientes</h2>
        {clients.map(client => (
          <div key={client.id}>
            <h2>{client.nome}</h2>
            <p>{client.email}</p>
            <p>{client.idade}</p>
            <p>{client.status}</p>
            <p>{client.perfilFamiliar}</p>
          </div>
        ))}
      </div>
      {dashboardData && (
        <RadialChart totalClients={dashboardData.totalClients} clientWithPlannerPercentual={parseFloat(dashboardData.clientsWithPlannerPercentual.toFixed(2)) || 0} />
      )}
      <div>
        {dashboardData && (
          <div className="bg-[#1b1b1b]">
            <h3>Perfis com seguro pelo total</h3>
            <ul>
              {Object.entries(dashboardData.percentualByprofile).map(([profile, percentual]) => (
                <li key={profile}>
                  {profile}: {percentual.toFixed(2)}%
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
