'use client';

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

interface BlogApiItem {
  id: number;
  content_writer?: string;
  published_date?: string;
  blogDetails?: Array<{
    blog_title?: string;
    blog_description?: string;
    featured_image?: string;
    status?: number;
  }>;
  blogHistory?: Array<{
    minutes?: number;
  }>;
}

export default function BlogSection() {
  const [blogs, setBlogs] = useState<BlogApiItem[]>([]);
  const [loading, setLoading] = useState(true);

  // ================= Fetch Blogs =================
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await apiGet(`web/v2/blogs/get-all`);
        setBlogs(Array.isArray(res) ? res : []);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // ================= Helpers =================
  const sanitizeText = (html = "") => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const truncate = (text: string, words = 20) => {
    const arr = text.split(" ");
    return arr.slice(0, words).join(" ") + (arr.length > words ? "..." : "");
  };

  // ================= Navigation =================
  const handleNavigateToBlog = async (blogId: number) => {
    const blogURL = `https://www.themedfuture.com/blog/${blogId}`;
    window.location.href = blogURL;
  };

  if (loading) {
    return <p className="text-center py-16">Loading blogs...</p>;
  }

  if (!blogs.length) {
    return <p className="text-center py-16">No blogs available</p>;
  }

  const mainBlog = blogs[0];
  const otherBlogs = blogs.slice(1, 4);

  const mainDetails = mainBlog.blogDetails?.[0];
  const mainMinutes = mainBlog.blogHistory?.[0]?.minutes ?? 0;

  return (
    <section className="py-16 mb-[180px]">
      <div className="inner-width-section max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div>
          <p className="text-[#074CA4] text-[14px] font-semibold mb-[5px]">Blogs</p>
          <h2 className="text-4xl font-bold text-[#0F172A] mb-[30px]">
            Insights for Your Healthcare Career
          </h2>
          <p className="text-[#4A5565] text-[16px] max-w-2xl">
            Expert articles, industry updates, and practical guidance to support informed career and hiring decisions.
          </p>
        </div>

        {mainDetails && (
          <div
            className="relative w-full h-[385px]  cursor-pointer"
            onClick={() => handleNavigateToBlog(mainBlog.id)}
          >
            <Image
              src={mainDetails.featured_image || "/placeholder.png"}
              alt={mainDetails.blog_title || "Blog"}
              fill
              className="object-cover rounded-[8px]"
            />

            <div className="absolute top-8 left-8 bg-white p-6 mt-7 rounded-[4px] max-w-lg shadow-lg">
              <h3 className="text-[20px] font-bold text-[#000000] mb-[24px]">
                {mainDetails.blog_title}
              </h3>

              <p className="text-[#4A5565] text-[16px] mb-[30px]">
                {truncate(
                  sanitizeText(mainDetails.blog_description || ""),
                  30
                )}
              </p>

              <div className="text-[#4A5565] text-[14px] flex gap-4">
                <span>{mainBlog.published_date}</span>
                <span>•</span>
                <span>{mainMinutes} min read</span>
              </div>
            </div>
          </div>
        )}

        <div className="relative">

          {/* Desktop */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
            {otherBlogs.map((blog) => {
              const details = blog.blogDetails?.[0];
              const minutes = blog.blogHistory?.[0]?.minutes ?? 0;
              if (!details) return null;

              return (
                <div
                  key={blog.id}
                  className="bg-white p-6 rounded-[4px] cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
                  onClick={() => handleNavigateToBlog(blog.id)}
                  style={{boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"}}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {details.blog_title}
                  </h3>

                  <p className="text-gray-700 text-sm mb-4">
                    {truncate(
                      sanitizeText(details.blog_description || "")
                    )}
                  </p>

                  <p className="text-gray-400 text-xs">
                    {blog.published_date} • {minutes} min read
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden gap-4 overflow-x-auto py-4">
            {otherBlogs.map((blog) => {
              const details = blog.blogDetails?.[0];
              const minutes = blog.blogHistory?.[0]?.minutes ?? 0;
              if (!details) return null;

              return (
                <div
                  key={blog.id}
                  className="flex-shrink-0 w-[280px] bg-white p-4 rounded-[4px] cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
                  onClick={() => handleNavigateToBlog(blog.id)}
                  style={{boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"}}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {details.blog_title}
                  </h3>

                  <p className="text-gray-700 text-sm mb-2">
                    {truncate(
                      sanitizeText(details.blog_description || "")
                    )}
                  </p>

                  <p className="text-gray-400 text-xs">
                    {blog.published_date} • {minutes} min read
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}