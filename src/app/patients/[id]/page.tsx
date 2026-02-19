import Link from 'next/link';
import { ArrowLeft, Phone, Mail, Calendar, FileText } from 'lucide-react';

export default function PatientDetailPage({ params }: { params: { id: string } }) {
  const patient = {
    id: params.id,
    name: 'John Smith',
    phone: '+1 555-0101',
    email: 'john@email.com',
    dateOfBirth: '1985-03-15',
    address: '123 Main St, City, State 12345',
    medicalHistory: 'No major conditions. Annual checkups.',
    allergies: 'Penicillin',
    lastVisit: '2026-02-15',
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Link href="/patients" className="p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Patient Details</h1>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 text-2xl font-bold">{patient.name.charAt(0)}</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{patient.name}</h2>
            <p className="text-gray-500">Patient ID: #{patient.id}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-600">
            <Phone className="w-5 h-5" />
            <span>{patient.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Mail className="w-5 h-5" />
            <span>{patient.email}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span>DOB: {patient.dateOfBirth}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-3">Address</h3>
        <p className="text-gray-600">{patient.address}</p>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-3">Medical History</h3>
        <p className="text-gray-600">{patient.medicalHistory}</p>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-3">Allergies</h3>
        <p className="text-red-600 font-medium">{patient.allergies}</p>
      </div>

      <div className="flex gap-3">
        <Link href="/prescriptions/new" className="flex-1 bg-green-600 text-white py-3 rounded-lg text-center font-medium">
          + New Prescription
        </Link>
        <Link href="/billing/new" className="flex-1 bg-orange-600 text-white py-3 rounded-lg text-center font-medium">
          + Create Invoice
        </Link>
      </div>
    </div>
  );
}
