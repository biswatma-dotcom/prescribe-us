import Link from 'next/link';
import { Plus, DollarSign, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const invoices = [
  { id: 1, patient: 'John Smith', amount: 150.00, status: 'paid', date: '2026-02-15' },
  { id: 2, patient: 'Sarah Johnson', amount: 250.00, status: 'pending', date: '2026-02-14' },
  { id: 3, patient: 'Mike Davis', amount: 75.00, status: 'overdue', date: '2026-01-28' },
  { id: 4, patient: 'Emily Brown', amount: 320.00, status: 'paid', date: '2026-02-10' },
  { id: 5, patient: 'David Wilson', amount: 180.00, status: 'pending', date: '2026-02-12' },
];

const statusConfig = {
  paid: { label: 'Paid', color: 'bg-green-100 text-green-700', icon: CheckCircle },
  pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-700', icon: Clock },
  overdue: { label: 'Overdue', color: 'bg-red-100 text-red-700', icon: AlertCircle },
};

export default function BillingPage() {
  const totalPending = invoices.filter(i => i.status === 'pending').reduce((sum, i) => sum + i.amount, 0);
  const totalOverdue = invoices.filter(i => i.status === 'overdue').reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Billing</h1>
        <Link href="/billing/new" className="bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
          <Plus className="w-4 h-4" /> Invoice
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100">
          <div className="flex items-center gap-2 text-yellow-700 mb-1">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Pending</span>
          </div>
          <p className="text-2xl font-bold text-yellow-800">${totalPending.toFixed(2)}</p>
        </div>
        <div className="bg-red-50 rounded-xl p-4 border border-red-100">
          <div className="flex items-center gap-2 text-red-700 mb-1">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Overdue</span>
          </div>
          <p className="text-2xl font-bold text-red-800">${totalOverdue.toFixed(2)}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {invoices.map((invoice) => {
          const status = statusConfig[invoice.status as keyof typeof statusConfig];
          const StatusIcon = status.icon;
          return (
            <div key={invoice.id} className="p-4 border-b border-gray-100 last:border-0 flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">{invoice.patient}</p>
                <p className="text-sm text-gray-500">{invoice.date}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">${invoice.amount.toFixed(2)}</p>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${status.color}`}>
                  <StatusIcon className="w-3 h-3" />
                  {status.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
