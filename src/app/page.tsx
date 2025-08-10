'use client'
import { getClients } from "@/services/clients/clients.api";
import { Client } from "@/services/clients/clients.types";
import { DashboardData, getDashboardData } from "@/services/data.api";
import { useEffect, useState } from "react";



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
    <div className="">
      {clients.map(client => (
        <div key={client.id}>
          <h2>{client.nome}</h2>
          <p>{client.email}</p>
          <p>{client.idade}</p>
          <p>{client.status}</p>
          <p>{client.perfilFamiliar}</p>
        </div>
      ))}
      <div>
        <h2>Dashboard</h2>
        {dashboardData && (
          <div>
            <p>Total Clients: {dashboardData.totalClients}</p>
            <p>Clients with Planner: {dashboardData.clientsWithPlannerPercentual.toFixed(2)}%</p>
            <h3>Percentual by Profile</h3>
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
