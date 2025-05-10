// app/dashboard/page.tsx
"use client";

import {
  Calendar,
  Clock,
  BarChart2,
  PieChart,
  User,
  Briefcase,
  Users,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <section className="container mx-auto space-y-8 p-6">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
        <p className="mt-1 text-gray-600">Übersicht für Martin Hauser</p>
      </header>

      {/* Profile + Metrics */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Profile Card */}
        <div className="col-span-1 rounded-2xl bg-white p-6 shadow-lg">
          <div className="flex items-center gap-4">
            <User className="h-12 w-12 text-indigo-500" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Martin Hauser
              </h2>
              <p className="text-gray-500">Vertriebsleiter</p>
              <p className="text-gray-500">Feinwerktechnik GmbH</p>
            </div>
          </div>
          <ul className="mt-6 space-y-3 text-gray-600">
            <li>
              <Calendar className="inline-block h-5 w-5 align-text-bottom text-indigo-400" />{" "}
              Alter: <strong>38 Jahre</strong>
            </li>
            <li>
              <Users className="inline-block h-5 w-5 align-text-bottom text-indigo-400" />{" "}
              Vorgesetzter: <strong>Matthias Schwieger</strong>
            </li>
            <li>
              <Briefcase className="inline-block h-5 w-5 align-text-bottom text-indigo-400" />{" "}
              Abteilung: <strong>Vertrieb</strong>
            </li>
            <li>
              <Clock className="inline-block h-5 w-5 align-text-bottom text-indigo-400" />{" "}
              Standort: <strong>Stuttgart</strong>
            </li>
          </ul>
        </div>

        {/* Quick Metrics */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:col-span-2">
          {[
            { icon: BarChart2, label: "Apps genutzt", value: "5" },
            { icon: Clock, label: "Sitzungen", value: "124" },
            { icon: PieChart, label: "Ø Dauer", value: "3m 45s" },
            { icon: Users, label: "Team-Mitglieder", value: "12" },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="rounded-2xl bg-white p-4 shadow transition hover:shadow-lg"
            >
              <Icon className="mb-2 h-8 w-8 text-indigo-500" />
              <p className="text-3xl font-semibold text-gray-800">{value}</p>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Bar Chart */}
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">
            Nutzung pro App
          </h3>
          <div className="flex h-52 items-center justify-center rounded-lg bg-gray-100 text-gray-400">
            {/* Hier käme später ein echtes Bar-Chart */}
            Bar Chart Mockup
          </div>
        </div>
        {/* Pie Chart */}
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">
            Zeiteinsatz
          </h3>
          <div className="flex h-52 items-center justify-center rounded-lg bg-gray-100 text-gray-400">
            {/* Hier käme später ein echtes Pie-Chart */}
            Pie Chart Mockup
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="rounded-2xl bg-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-semibold text-gray-800">
          Letzte Aktivitäten
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-gray-600">Datum</th>
                <th className="px-4 py-2 text-gray-600">App</th>
                <th className="px-4 py-2 text-gray-600">Aktion</th>
                <th className="px-4 py-2 text-gray-600">Dauer</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  date: "2025-05-09",
                  app: "NDACheck",
                  action: "Dokument geprüft",
                  duration: "2m 10s",
                },
                {
                  date: "2025-05-08",
                  app: "ContractCheck",
                  action: "Clause angepasst",
                  duration: "4m 05s",
                },
                {
                  date: "2025-05-07",
                  app: "Case Cockpit",
                  action: "Neues Projekt erstellt",
                  duration: "1m 30s",
                },
              ].map((row) => (
                <tr key={row.date} className="even:bg-gray-50">
                  <td className="px-4 py-2">{row.date}</td>
                  <td className="px-4 py-2">{row.app}</td>
                  <td className="px-4 py-2">{row.action}</td>
                  <td className="px-4 py-2">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
