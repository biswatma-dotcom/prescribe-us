import Link from 'next/link';
import { Plus, Pill, Clock } from 'lucide-react';

const prescriptions = [
  { id: 1, patient: 'John Smith', medication: 'Amoxicillin', dosage: '500mg', frequency: '3x daily', date: '2026-02-15' },
  { id: 2, patient: 'Sarah Johnson', medication: 'Lisinopril', dosage: '10mg', frequency: '1x daily', date: '2026-02-14' },
  { id: 3, patient: 'Mike Davis', medication: 'Metformin', dosage: '500mg', frequency: '2x daily', date: '2026-02-12' },
  { id: 4, patient: 'Emily Brown', medication: 'Omeprazole', dosage: '20mg', frequency: '1x daily', date: '2026-02-10' },
];

export default function PrescriptionsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Prescriptions</h1>
        <Link href="/prescriptions/new" className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
          <Plus className="w-4 h-4" /> New Rx
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {prescriptions.map((rx) => (
          <div key={rx.id} className="p-4 border-b border-gray-100 last:border-0">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Pill className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{rx.medication}</p>
                  <p className="text-sm text-gray-500">{rx.patient}</p>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
              <span className="bg-gray-100 px-2 py-1 rounded">{rx.dosage}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {rx.frequency}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
