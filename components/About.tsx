import { Award, Users, Heart } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Award className="w-12 h-12 text-orange-600" />,
      title: 'Award Winning',
      description: 'Recognized for excellence in Italian cuisine and exceptional service'
    },
    {
      icon: <Users className="w-12 h-12 text-orange-600" />,
      title: 'Family Owned',
      description: 'Three generations of culinary tradition and passion for authentic flavors'
    },
    {
      icon: <Heart className="w-12 h-12 text-orange-600" />,
      title: 'Fresh Ingredients',
      description: 'Locally sourced produce and imported Italian specialty items'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Since 1985, Bella Vista has been serving authentic Italian cuisine to our community.
            Our family recipes, warm atmosphere, and dedication to quality have made us a beloved local destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 bg-orange-50"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
