import { Users, Pill, CreditCard, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Total Patients', value: '124', icon: Users, href: '/patients', color: 'bg-blue-500' },
  { label: 'Prescriptions', value: '89', icon: Pill, href: '/prescriptions', color: 'bg-green-500' },
  { label: 'Pending Bills', value: '12', icon: CreditCard, href: '/billing', color: 'bg-orange-500' },
  { label: 'Appointments', value: '8', icon: Calendar, href: '/', color: 'bg-purple-500' },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <span className="text-sm text-gray-500">Today</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
          >
            <div className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
              <stat.icon className="w-5 h-5 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900">Recent Patients</h2>
          <Link href="/patients" className="text-blue-600 text-sm flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="space-y-3">
          {[
            { name: 'John Smith', time: '10:30 AM', type: 'Checkup' },
            { name: 'Sarah Johnson', time: '11:00 AM', type: 'Follow-up' },
            { name: 'Mike Davis', time: '2:00 PM', type: 'New Patient' },
          ].map((patient, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
              <div>
                <p className="font-medium text-gray-900">{patient.name}</p>
                <p className="text-sm text-gray-500">{patient.type}</p>
              </div>
              <span className="text-sm text-gray-400">{patient.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h2 className="font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <Link href="/patients/new" className="bg-blue-50 text-blue-700 p-3 rounded-lg text-center font-medium">
            + New Patient
          </Link>
          <Link href="/prescriptions/new" className="bg-green-50 text-green-700 p-3 rounded-lg text-center font-medium">
            + New Prescription
          </Link>
          <Link href="/billing/new" className="bg-orange-50 text-orange-700 p-3 rounded-lg text-center font-medium">
            + Create Invoice
          </Link>
          <Link href="/patients" className="bg-gray-50 text-gray-700 p-3 rounded-lg text-center font-medium">
            View Patients
          </Link>
        </div>
      </div>
    </div>
  );
}
