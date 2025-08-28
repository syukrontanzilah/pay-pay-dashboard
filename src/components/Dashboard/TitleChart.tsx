import Link from 'next/link';
import React from 'react';

interface TitleChartProps {
  title: string;
  titleLink: string;
  href: string;
}

const TitleChart: React.FC<TitleChartProps> = ({ title, titleLink, href }) => {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='font-bold text-sm'>{title}</div>
        <Link href={href}>
          <div className='font-normal text-xs text-[#8e61ee]'>{titleLink}</div>
        </Link>
      </div>
    </div>
  );
}

export default TitleChart;
