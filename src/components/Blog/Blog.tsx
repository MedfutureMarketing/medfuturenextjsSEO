'use client';
import Image, { StaticImageData } from "next/image";
import React from "react";


interface Blog {
  title: string;
  category: string;
  content: string;
  date: string;
  image: StaticImageData;
}


import BlogImg1 from "@/assets/jobseeker/Rectangle.png";
import BlogImg2 from "@/assets/jobseeker/Rectangle.png";
import BlogImg3 from "@/assets/jobseeker/Rectangle.png";
import BlogImg4 from "@/assets/jobseeker/Rectangle.png";

const blogs: Blog[] = [
  {
    title: "How to Register with AHPRA as an Overseas Doctor",
    category: "Healthcare",
    content: "After verifying your qualifications, submit your complete AHPRA application with identity documents, English language proof, and professional experience to ensure a smooth registration process.",
    date: "Dec 17, 2025",
    image: BlogImg1,
  },
  {
    title: "Smaller Blog 1",
    category: "Medical",
    content: "Some text about this blog post goes here.",
    date: "Dec 16, 2025",
    image: BlogImg2,
  },
  {
    title: "Smaller Blog 2",
    category: "Nursing",
    content: "Some text about this blog post goes here.",
    date: "Dec 15, 2025",
    image: BlogImg3,
  },
  {
    title: "Smaller Blog 3",
    category: "Allied Health",
    content: "Some text about this blog post goes here.",
    date: "Dec 14, 2025",
    image: BlogImg4,
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 mb-[180px]">
      <div className="inner-width-section max-w-7xl mx-auto space-y-16">
        
   
        <div className="relative w-full h-[385px]">
          <Image
            src={blogs[0].image}
            alt={blogs[0].title}
            fill
            className="object-cover rounded-[4px]"
          />
          <div className="absolute top-8 left-8 bg-white p-6 rounded-[4px] max-w-lg shadow-lg">
            <p className="text-[#0F172A] font-semibold text-[#0F172A] py-[7.5px] text-center rounded-[4px] mb-2 w-[155px] px-[11.5px] bg-[#F8F8F8]">{blogs[0].category}</p>
            <h3 className="text-[20px] font-bold text-[#000000] mb-[24px]">{blogs[0].title}</h3>
            <p className="text-[#4A5565] text-[16px] mb-4">{blogs[0].content}</p>
            <p className="text-[#4A5565] text-[14px]">{blogs[0].date}</p>
          </div>
        </div>

  
        <div className="relative">

          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
            {blogs.slice(1).map((blog, index) => (
              <div key={index} className="relative h-[184px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-[4px]"
                />
                <div className="absolute -bottom-36 left-1/3 transform -translate-x-1/2 bg-white p-6 rounded-[4px]  w-[80%]">
                  <p className="text-sm font-semibold text-[#0F172A] py-[7.5px] mb-2 text-center w-[155px] px-[11.5px] bg-[#F8F8F8]">{blog.category}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h3>
                  <p className="text-gray-700 mb-4">{blog.content}</p>
                  <p className="text-gray-400 text-sm">{blog.date}</p>
                </div>
              </div>
            ))}
          </div>

    
          <div className="flex lg:hidden gap-4 overflow-x-auto scroll-smooth py-4">
            {blogs.slice(1).map((blog, index) => (
              <div key={index} className="relative flex-shrink-0 w-[280px] h-[250px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-[4px]"
                />
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-[4px] shadow-lg w-[90%]">
                  <p className="text-sm font-semibold text-blue-700 mb-2">{blog.category}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{blog.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">{blog.content}</p>
                  <p className="text-gray-400 text-xs">{blog.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
