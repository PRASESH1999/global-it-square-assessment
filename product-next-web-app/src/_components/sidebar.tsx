'use client';
import { Package } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Sidebar: React.FC = (className, ...props) => {
  const pathname = usePathname();
  var routes = [
    {
      path: '/dot-net-products',
      label: '.NET Products',
      icon: Package,
    },
    {
      path: '/node-js-products',
      label: 'Node.Js Products',
      icon: Package,
    },
  ];
  return (
    // <aside className="bg-surface w-64 shadow-elevation-2 hidden md:block">
    <aside className="bg-white w-64 shadow-elevation-2">
      <div className="p-4 border-b">
        <h2 className="text-lg font-medium">Assessment</h2>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {routes.map((route, index) => (
            <li key={index}>
              <Link
                key={route.path}
                href={route.path}
                // className="flex items-center text-text-primary hover:bg-primary/40 rounded p-2 transition-colors"

                className={`flex items-center px-6 py-2 text-gray-800 hover:bg-primary/10 transition-colors ${
                  pathname === route.path ? 'bg-primary/10' : ''
                }`}
              >
                <route.icon size={20} className="mr-3" />
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
