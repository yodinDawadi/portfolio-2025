import { AboutCardProps } from '@/types';
import React from 'react';

// Use React.forwardRef to properly forward the ref
const AboutCard = React.forwardRef<HTMLDivElement, AboutCardProps>((props, ref) => {
  return (
    <div
      ref={ref} // Assign the forwarded ref here
      className="w-3/4 p-10 bg-white text-contrast_black rounded-xl"
    >
      <p className="text-3xl">{props.title}</p>
      <p>{props.content}</p>
    </div>
  );
});

// Set a display name for easier debugging (optional)
AboutCard.displayName = 'AboutCard';

export default AboutCard;
