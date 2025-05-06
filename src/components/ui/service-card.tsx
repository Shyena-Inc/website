
import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  icon,
  className
}: ServiceCardProps) {
  return (
    <Card className={cn(
      "glass-card hover:border-cyber-purple/30 transition-all duration-300 overflow-hidden group", 
      className
    )}>
      <div className="p-6 relative">
        <div className="mb-4 text-cyber-purple bg-cyber-purple/10 h-12 w-12 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-medium text-white mb-2 group-hover:text-cyber-purple transition-colors">
          {title}
        </h3>
        <p className="text-white/70 text-sm">
          {description}
        </p>
      </div>
    </Card>
  );
}
