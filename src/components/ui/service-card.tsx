
import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  link?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  icon,
  className,
  link
}: ServiceCardProps) {
  const CardWrapper = ({ children }: { children: ReactNode }) => {
    if (link) {
      return <a href={link} className="block h-full">{children}</a>;
    }
    return <>{children}</>;
  };
  
  return (
    <CardWrapper>
      <Card className={cn(
        "glass-card hover:border-cyber-purple/30 transition-all duration-300 overflow-hidden group h-full", 
        className
      )}>
        <div className="p-6 relative h-full flex flex-col">
          <div className="mb-4 text-cyber-purple bg-cyber-purple/10 h-12 w-12 rounded-lg flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-xl font-medium text-white mb-2 group-hover:text-cyber-purple transition-colors">
            {title}
          </h3>
          <p className="text-white/70 text-sm flex-grow">
            {description}
          </p>
          {link && (
            <div className="mt-4 text-sm text-cyber-purple flex items-center">
              <span>Learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
      </Card>
    </CardWrapper>
  );
}
