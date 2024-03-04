import React from 'react'

const Title = ({tag: Tag, children, white, className, ...props}) => {
  const titleClass = white ? 'text-white' : 'text-blue-gray-900'; 
    switch(Tag){
      case 'h1': return <Tag className={`${className} ${titleClass} ${props} block font-sans antialiased text-3xl max-lg:text-2xl max-md:text-xl font-medium leading-snug tracking-normal mb-6`}>{children}</Tag>;
      case 'h2': return <Tag className={`${className} ${titleClass} block font-sans antialiased text-2xl max-lg:text-xl max-md:text-lg font-medium leading-snug tracking-normal mb-6`}>{children}</Tag>;
      case 'h3': return <Tag className={`${className} ${titleClass} my-1 font-bold text-lg leading-6 text-gray-800 antialiased`}>{children}</Tag>;
      case 'h4': return <Tag className={`${className} ${titleClass} block font-sans antialiased text-lg font-medium leading-snug tracking-normal mb-6`}>{children}</Tag>;
      case 'h5': return <Tag className={`${className} ${titleClass} font-sans antialiased text-base font-medium mb-2  leading-snug tracking-normal`}>{children}</Tag>;
      case 'h6': return <Tag className={`${className} ${titleClass} antialiased text-base font-medium mb-6`}>{children}</Tag>;
      default: return <Tag className={`${className} ${titleClass} font-sans antialiased text-base font-medium mb-2  leading-snug tracking-normal`}>{children}</Tag>;
  };
}
export default Title