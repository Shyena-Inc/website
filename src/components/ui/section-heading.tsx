
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  center = false,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'space-y-2 mb-10',
      center ? 'text-center mx-auto max-w-3xl' : '',
      className
    )}>
      <h2 className="text-3xl font-bold leading-tight text-gradient-primary md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-white/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}
