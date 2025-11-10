import { UtensilsCrossed } from 'lucide-react';

export default function MenuSection() {
  const menuItems = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Bruschetta Classica', description: 'Toasted bread with tomatoes, basil, and garlic', price: '$8' },
        { name: 'Calamari Fritti', description: 'Crispy fried squid with marinara sauce', price: '$12' },
        { name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil', price: '$10' }
      ]
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Spaghetti Carbonara', description: 'Classic pasta with eggs, bacon, and parmesan', price: '$18' },
        { name: 'Chicken Parmigiana', description: 'Breaded chicken with marinara and mozzarella', price: '$22' },
        { name: 'Risotto ai Funghi', description: 'Creamy mushroom risotto with white wine', price: '$20' },
        { name: 'Lasagna Bolognese', description: 'Layers of pasta, meat sauce, and béchamel', price: '$19' }
      ]
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Tiramisu', description: 'Coffee-soaked ladyfingers with mascarpone cream', price: '$8' },
        { name: 'Panna Cotta', description: 'Italian custard with berry compote', price: '$7' },
        { name: 'Gelato', description: 'Homemade Italian ice cream (various flavors)', price: '$6' }
      ]
    }
  ];

  return (
    <section id="menu" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-4">
            <UtensilsCrossed size={48} className="text-orange-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our selection of authentic Italian dishes, crafted with passion and tradition
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {menuItems.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-6 text-center border-b-2 border-orange-200 pb-4">
                {section.category}
              </h3>
              <div className="space-y-6">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {item.name}
                      </h4>
                      <span className="text-orange-600 font-bold text-lg ml-2">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
