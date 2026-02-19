import { Users, Pill, CreditCard, Calendar, Home } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/patients', icon: Users, label: 'Patients' },
  { href: '/prescriptions', icon: Pill, label: 'Rx' },
  { href: '/billing', icon: CreditCard, label: 'Billing' },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
      <div className="flex justify-around py-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600"
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-xl font-bold mb-8 px-4">PrescribeUs</h1>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
