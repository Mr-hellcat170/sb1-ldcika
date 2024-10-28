import React from 'react';
import { ShoppingCart, ChevronDown } from 'lucide-react';

interface GadgetCardProps {
  title: string;
  price: string;
  image: string;
  description: string;
  specs: string[];
}

export default function GadgetCard({ title, price, image, description, specs }: GadgetCardProps) {
  const [showSpecs, setShowSpecs] = React.useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
      <div className="relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2 tech-title">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <button
          onClick={() => setShowSpecs(!showSpecs)}
          className="flex items-center gap-2 text-indigo-600 mb-4 hover:text-indigo-700 transition-colors"
        >
          <ChevronDown className={`w-5 h-5 transition-transform ${showSpecs ? 'rotate-180' : ''}`} />
          Technical Specifications
        </button>
        
        {showSpecs && (
          <ul className="mb-4 space-y-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
            {specs.map((spec, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                {spec}
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            {price}
          </span>
          <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}