'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'relative px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',
        className
      )}
      onClick={handleClick}
    >
      <div
        className="absolute top-12 left-4 w-full h-[65%] bg-no-repeat bg-contain z-0"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="absolute bottom-4 left-4 text-white z-10 ">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
