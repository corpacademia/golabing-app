import React from 'react';
import { ChevronRight } from 'lucide-react';

interface TechnologyCardProps {
  title: string;
  icon: React.ElementType;
  subcategories: string[];
  id: string;
}

const getBackgroundImage = (id: string) => {
  const images = {
    agile: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=300&h=200",
    ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=300&h=200",
    business: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300&h=200",
    automation: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=300&h=200",
    blockchain: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=300&h=200",
    cloud: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=300&h=200",
    security: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=300&h=200",
    data: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=300&h=200",
    devops: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=300&h=200",
    network: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=300&h=200",
    storage: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?auto=format&fit=crop&q=80&w=300&h=200",
    virtualization: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=300&h=200",
    telecom: "https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&q=80&w=300&h=200",
    mainframe: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=300&h=200",
    itsm: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=300&h=200",
    quantum: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=300&h=200",
  };
  return images[id as keyof typeof images] || images.cloud;
};

const TechnologyCard = ({ title, icon: Icon, subcategories, id }: TechnologyCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] h-[280px]">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ 
          backgroundImage: `url(${getBackgroundImage(id)})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-primary-900/90 transition-all duration-500 group-hover:opacity-95" />
      </div>

      {/* Content Container */}
      <div className="relative h-full p-6 flex flex-col">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 rounded-lg bg-white/10 backdrop-blur-lg group-hover:bg-primary-500/20 transition-all duration-300">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Subcategories Grid with Hover Effect */}
        <div className="grid grid-cols-1 gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          {subcategories.map((subcategory, index) => (
            <div
              key={subcategory}
              className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center space-x-2 p-2 rounded-lg bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300">
                <ChevronRight className="h-4 w-4 text-primary-300" />
                <span className="text-sm text-white">
                  {subcategory}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-radial from-primary-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-secondary-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </div>
    </div>
  );
};

export default TechnologyCard;