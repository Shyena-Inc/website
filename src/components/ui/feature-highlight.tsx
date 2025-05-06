
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureHighlightProps {
  title: string;
  description: string;
  icon: ReactNode;
  imageUrl?: string;
  reversed?: boolean;
  className?: string;
}

export function FeatureHighlight({
  title,
  description,
  icon,
  imageUrl,
  reversed = false,
  className,
}: FeatureHighlightProps) {
  return (
    <div className={cn(
      'grid grid-cols-1 gap-6 items-center py-8',
      imageUrl ? 'md:grid-cols-2' : '',
      reversed ? 'md:flex-row-reverse' : '',
      className
    )}>
      <div className={cn(
        'space-y-4',
        reversed && imageUrl ? 'md:order-2' : ''
      )}>
        <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
      
      {imageUrl && (
        <div className={cn(
          'relative h-full min-h-[300px] w-full cyber-border',
          reversed ? 'md:order-1' : ''
        )}>
          <div className="w-full h-full overflow-hidden rounded-lg">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
