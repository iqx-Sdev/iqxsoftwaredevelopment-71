
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  placeholderClassName, 
  ...props 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    // Reset states when src changes
    setIsLoaded(false);
    setError(false);
    
    // Preload the image
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(true);
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);
  
  if (error) {
    return (
      <div className={cn(
        "bg-gray-200 flex items-center justify-center", 
        className
      )}>
        <span className="text-gray-500">Image failed to load</span>
      </div>
    );
  }
  
  return (
    <>
      {!isLoaded && (
        <div className={cn(
          "bg-gray-100 animate-pulse", 
          className, 
          placeholderClassName
        )} 
        aria-hidden="true" 
        />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          className,
          !isLoaded && "invisible absolute"
        )}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        {...props}
      />
    </>
  );
};

export { OptimizedImage };
