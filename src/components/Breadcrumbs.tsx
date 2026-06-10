import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; path?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 px-6 md:px-12 bg-[#FAF8F5]/80 backdrop-blur-sm border-b border-black/5 flex items-center gap-2 text-xs font-sans text-neutral-500 uppercase tracking-widest">
      <Link to="/" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1">
        <Home className="w-3.5 h-3.5" />
        <span>Lounge</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 text-neutral-400" />
            {isLast || !item.path ? (
              <span className="text-neutral-800 font-medium font-sans">{item.label}</span>
            ) : (
              <Link to={item.path} className="hover:text-[#D4AF37] transition-colors">
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
