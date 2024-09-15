import { useState } from 'react'
import { Bell, Shield, AlertTriangle, Activity, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function Component() {
  const [threatLevel, setThreatLevel] = useState(42)

  // This would be replaced with real-time data in a production environment
  const securityEvents = [
    { id: 1, type: 'Suspicious Login', severity: 'High', time: '2 minutes ago' },
    { id: 2, type: 'Firewall Block', severity: 'Medium', time: '5 minutes ago' },
    { id: 3, type: 'Data Exfiltration Attempt', severity: 'Critical', time: '10 minutes ago' },
    { id: 4, type: 'Port Scan Detected', severity: 'Low', time: '15 minutes ago' },
  ]

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 p-4">
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Shield className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <AlertTriangle className="mr-2 h-4 w-4" />
            Alerts
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Activity className="mr-2 h-4 w-4" />
            Network Activity
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Cybersecurity Dashboard</h1>
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
        </header>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Threat Level</h2>
            <Progress value={threatLevel} className="w-full" />
            <p className="text-2xl font-bold mt-2">{threatLevel}%</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Active Threats</h2>
            <p className="text-2xl font-bold">7</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Systems Monitored</h2>
            <p className="text-2xl font-bold">128</p>
          </div>
        </div>

        {/* Security Events Log */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Security Events</h2>
          <div className="space-y-4">
            {securityEvents.map((event) => (
              <div key={event.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">{event.type}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{event.time}</p>
                </div>
                <Badge variant={event.severity === 'Critical' ? 'destructive' : 
                               event.severity === 'High' ? 'destructive' : 
                               event.severity === 'Medium' ? 'warning' : 'secondary'}>
                  {event.severity}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
