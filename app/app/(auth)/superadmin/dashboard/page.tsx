'use client'

import { Card } from '@/components/ui/card'
import PageHeading from '@/components/layout/page-heading'
import CountsUp from '@/components/custom/counts-up'  // Poprawiony import
import { LineChart, BarChart, PieChart } from '@/components/ui/chart' // Bez Chart
import { DataTable } from '@/components/custom/table/data-table' // Poprawiona ścieżka
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Check, Eye, Plus, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
// Removed unused import

// Dane testowe - w produkcji będą zastąpione przez dane z API
const dashboardMetrics = {
  companies: {
    total: 452,
    change: 12,
    trend: 'up',
    history: [420, 425, 430, 440, 445, 452]
  },
  users: {
    total: 3854,
    change: 256,
    trend: 'up',
    history: [3500, 3550, 3600, 3700, 3780, 3854]
  },
  revenue: {
    total: '142 500 zł',
    change: 8.5,
    trend: 'up',
    history: [125000, 128000, 132000, 135000, 138000, 142500]
  },
  aiUsage: {
    percentage: 78,
    change: -2.3,
    trend: 'down',
    history: [85, 83, 81, 80, 79, 78]
  }
}

const companiesGrowthData = [
  { date: '2024-01', active: 380, pending: 25, blocked: 15 },
  { date: '2024-02', active: 395, pending: 30, blocked: 18 },
  { date: '2024-03', active: 410, pending: 28, blocked: 20 },
  { date: '2024-04', active: 425, pending: 35, blocked: 22 },
  { date: '2024-05', active: 440, pending: 40, blocked: 25 },
  { date: '2024-06', active: 452, pending: 42, blocked: 28 }
]

const pendingCompanies = [
  { id: 1, name: "TechVision Sp. z o.o.", registerDate: "2024-06-12", industry: "technology" },
  { id: 2, name: "MedCare Solutions", registerDate: "2024-06-11", industry: "healthcare" },
  { id: 3, name: "EduLearn", registerDate: "2024-06-10", industry: "education" },
  { id: 4, name: "RetailMax", registerDate: "2024-06-09", industry: "retail" },
  { id: 5, name: "FinPlus", registerDate: "2024-06-08", industry: "finance" }
]

const recentActivities = [
  { 
    id: 1, 
    type: "Firma zatwierdzona", 
    typeColor: "success", 
    description: "Zatwierdzono firmę EduLearn", 
    time: "Dziś, 10:32" 
  },
  { 
    id: 2, 
    type: "Nowa firma", 
    typeColor: "info", 
    description: "Zarejestrowano firmę TechVision Sp. z o.o.", 
    time: "Dziś, 9:15" 
  },
  { 
    id: 3, 
    type: "Błąd", 
    typeColor: "danger", 
    description: "Błąd generacji AI dla firmy DataCore", 
    time: "Wczoraj, 15:45" 
  },
  { 
    id: 4, 
    type: "Nowy użytkownik", 
    typeColor: "info", 
    description: "Zarejestrowano nowego użytkownika: Jan Kowalski (FinPlus)", 
    time: "Wczoraj, 14:22" 
  },
  { 
    id: 5, 
    type: "Limit przekroczony", 
    typeColor: "warning", 
    description: "Firma InfoTech przekroczyła limit generacji AI", 
    time: "2 dni temu" 
  }
]

const systemAlerts = [
  { 
    id: 1, 
    severity: "error", 
    title: "Wysoki poziom użycia CPU", 
    message: "Serwer 3 doświadcza wysokiego obciążenia CPU (ponad 90%)", 
    time: "10 minut temu" 
  },
  { 
    id: 2, 
    severity: "warning", 
    title: "Limity AI", 
    message: "3 firmy zbliżają się do limitu wykorzystania AI (ponad 90%)", 
    time: "30 minut temu" 
  },
  { 
    id: 3, 
    severity: "info", 
    title: "Aktualizacja zaplanowana", 
    message: "Zaplanowano aktualizację systemu na 20.06.2024, 3:00 AM", 
    time: "2 godziny temu" 
  }
]

// Kolumny dla tabel
const pendingCompaniesColumns = [
  { accessorKey: 'name', header: 'Nazwa firmy' },
  { accessorKey: 'registerDate', header: 'Data zgłoszenia' },
  { accessorKey: 'industry', header: 'Branża' },
  { 
    id: 'actions',
    cell: ({ row }: { row: any }) => {
      const company = row.original
      return (
        <div className="flex gap-2">
          <Button size="small" variant="outline" onClick={() => handleViewCompany(company.id)}>
            <Eye className="h-4 w-4" />
          </Button>
          <Button size="small" variant="outline" className="text-success" onClick={() => handleApproveCompany(company.id)}>
            <Check className="h-4 w-4" />
          </Button>
          <Button size="small" variant="outline" className="text-danger" onClick={() => handleRejectCompany(company.id)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      )
    }
  }
]

function handleViewCompany(id: number) {
  console.log(`Viewing company with ID: ${id}`)
}

function handleApproveCompany(id: number) {
  console.log(`Approving company with ID: ${id}`)
}

function handleRejectCompany(id: number) {
  console.log(`Rejecting company with ID: ${id}`)
}

export default function SuperAdminDashboard() {
  return (
    <div className="space-y-4">
      <PageHeading heading={'Panel SUPERADMINA'} />
      
      {/* Metryki */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-700">Firmy</h3>
            <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${dashboardMetrics.companies.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {dashboardMetrics.companies.change}%
            </span>
          </div>
          <div className="mt-2">
            <CountsUp
              className="text-2xl font-bold"
              start={0}
              end={dashboardMetrics.companies.total}
              duration={2}
            />
          </div>
          <div className="mt-4 h-10">
            {/* Simple sparkline chart implementation */}
            <div className="flex h-full items-end space-x-1">
              {dashboardMetrics.companies.history.map((value, index) => (
                <div 
                  key={index}
                  style={{ 
                    height: `${value / Math.max(...dashboardMetrics.companies.history) * 100}%`,
                    width: '16.6%'
                  }}
                  className="bg-blue-500"
                />
              ))}
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Ostatni miesiąc
          </div>
        </Card>
        
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-700">Aktywni użytkownicy</h3>
            <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${dashboardMetrics.users.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              +{dashboardMetrics.users.change}
            </span>
          </div>
          <div className="mt-2">
            <CountsUp
              className="text-2xl font-bold"
              start={0}
              end={dashboardMetrics.users.total}
              duration={2}
            />
          </div>
          <div className="mt-4 h-10">
            {/* Simple sparkline chart implementation */}
            <div className="flex h-full items-end space-x-1">
              {dashboardMetrics.users.history.map((value, index) => (
                <div 
                  key={index}
                  style={{ 
                    height: `${value / Math.max(...dashboardMetrics.users.history) * 100}%`,
                    width: '16.6%'
                  }}
                  className="bg-green-500"
                />
              ))}
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Ostatni miesiąc
          </div>
        </Card>
        
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-700">Przychód MRR</h3>
            <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${dashboardMetrics.revenue.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {dashboardMetrics.revenue.change}%
            </span>
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold">
              {dashboardMetrics.revenue.total}
            </div>
          </div>
          <div className="mt-4 h-10">
            {/* Simple sparkline chart implementation */}
            <div className="flex h-full items-end space-x-1">
              {dashboardMetrics.revenue.history.map((value, index) => (
                <div 
                  key={index}
                  style={{ 
                    height: `${value / Math.max(...dashboardMetrics.revenue.history) * 100}%`,
                    width: '16.6%'
                  }}
                  className="bg-purple-500"
                />
              ))}
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Ostatni miesiąc
          </div>
        </Card>
        
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-700">Wykorzystanie AI</h3>
            <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${dashboardMetrics.aiUsage.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {dashboardMetrics.aiUsage.change}%
            </span>
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold">
              {dashboardMetrics.aiUsage.percentage}%
            </div>
          </div>
          <div className="mt-4">
            <div className="h-2.5 w-full rounded-full bg-gray-200">
              <div 
                className="h-2.5 rounded-full bg-blue-600"
                style={{ width: `${dashboardMetrics.aiUsage.percentage}%` }}
              ></div>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Pozostało: {100 - dashboardMetrics.aiUsage.percentage}%
          </div>
        </Card>
      </div>
      
      {/* Wykresy i tabele */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Wykres wzrostu firm */}
        <Card className="col-span-1 p-5 lg:col-span-2">
          <h3 className="mb-4 text-lg font-semibold">Wzrost liczby firm w czasie</h3>
          <div className="h-80">
            <LineChart
              data={companiesGrowthData}
              index="date"
              categories={['active', 'pending', 'blocked']}
              colors={['#4CAF50', '#FFC107', '#F44336']}
              yAxisWidth={40}
              showLegend={true}
              showXAxis={true}
              showYAxis={true}
              showGridLines={true}
            />
          </div>
        </Card>
        
        {/* Lista oczekujących firm */}
        <Card className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Oczekujące firmy</h3>
            <Link href="/superadmin/companies/pending">
              <Button variant="outline" size="small">
                Zobacz wszystkie
              </Button>
            </Link>
          </div>
          <DataTable
            columns={pendingCompaniesColumns}
            data={pendingCompanies}
            showPagination={false}
          />
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Ostatnie aktywności */}
        <Card className="p-5">
          <h3 className="mb-4 text-lg font-semibold">Ostatnie aktywności</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-2 border-b border-gray-100 pb-3 last:border-0">
                <span className={`mt-0.5 rounded-full px-2 py-1 text-xs ${
                  activity.typeColor === 'success' ? 'bg-green-100 text-green-800' :
                  activity.typeColor === 'info' ? 'bg-blue-100 text-blue-800' :
                  activity.typeColor === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                  activity.typeColor === 'danger' ? 'bg-red-100 text-red-800' : ''
                }`}>
                  {activity.type}
                </span>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{activity.description}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        {/* Alerty systemowe */}
        <Card className="p-5">
          <h3 className="mb-4 text-lg font-semibold">Alerty systemowe</h3>
          <div className="space-y-3">
            {systemAlerts.map((alert) => (
              <Alert key={alert.id} variant={alert.severity as "warning" | "default" | "discount" | "destructive"}>
                <AlertTitle>{alert.title}</AlertTitle>
                <AlertDescription>
                  {alert.message}
                  <div className="mt-1 text-xs opacity-70">{alert.time}</div>
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}