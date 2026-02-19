import Link from 'next/link';
import { Plus, Search, Phone, Mail, ChevronRight } from 'lucide-react';

const patients = [
  { id: 1, name: 'John Smith', phone: '+1 555-0101', email: 'john@email.com', lastVisit: '2026-02-15' },
  { id: 2, name: 'Sarah Johnson', phone: '+1 555-0102', email: 'sarah@email.com', lastVisit: '2026-02-14' },
  { id: 3, name: 'Mike Davis', phone: '+1 555-0103', email: 'mike@email.com', lastVisit: '2026-02-12' },
  { id: 4, name: 'Emily Brown', phone: '+1 555-0104', email: 'emily@email.com', lastVisit: '2026-02-10' },
  { id: 5, name: 'David Wilson', phone: '+1 555-0105', email: 'david@email.com', lastVisit: '2026-02-08' },
];

export default function PatientsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Patients</h1>
        <Link href="/patients/new" className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
          <Plus className="w-4 h-4" /> Add
        </Link>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search patients..."
          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {patients.map((patient) => (
          <Link
            key={patient.id}
            href={`/patients/${patient.id}`}
            className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">{patient.name.charAt(0)}</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{patient.name}</p>
                <p className="text-sm text-gray-500">{patient.phone}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
        ))}
      </div>
    </div>
  );
}
