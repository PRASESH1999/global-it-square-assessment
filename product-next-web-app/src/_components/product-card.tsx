import { Edit2, Eye, Trash2 } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  quantity: number;
}

export function ProductCard({
  name,
  price,
  description,
  quantity,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-elevation-1 overflow-hidden transition-all hover:shadow-md hover:scale-105">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-text-primary">{name}</h3>
          <span className="text-primary font-medium">Rs. {price}</span>
        </div>
        <p className="text-text-secondary text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-text-secondary text-sm">
            Quantity: {quantity}
          </span>
          <div className="flex space-x-2">
            <button className="p-1 rounded-full hover:bg-primary/10 transition-colors">
              <Edit2 size={18} className="text-primary" />
            </button>
            <button className="p-1 rounded-full hover:bg-primary/10 transition-colors">
              <Eye size={18} className="text-primary" />
            </button>
            <button className="p-1 rounded-full hover:bg-error/10 transition-colors">
              <Trash2 size={18} className="text-error" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
