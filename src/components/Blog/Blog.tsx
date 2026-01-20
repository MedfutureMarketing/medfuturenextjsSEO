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

        {mainDetails && (
          <div
            className="relative w-full h-[385px] cursor-pointer"
            onClick={() => handleNavigateToBlog(mainBlog.id)}
          >
            <Image
              src={mainDetails.featured_image || "/placeholder.png"}
              alt={mainDetails.blog_title || "Blog"}
              fill
              className="object-cover rounded-[4px]"
            />

            <div className="absolute top-8 left-8 bg-white p-6 rounded-[4px] max-w-lg shadow-lg">
              <h3 className="text-[20px] font-bold text-[#000000] mb-[24px]">
                {mainDetails.blog_title}
              </h3>

              <p className="text-[#4A5565] text-[16px] mb-4">
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
                  className="relative h-[184px] cursor-pointer"
                  onClick={() => handleNavigateToBlog(blog.id)}
                >
                  <Image
                    src={details.featured_image || "/placeholder.png"}
                    alt={details.blog_title || "Blog"}
                    fill
                    className="object-cover rounded-[4px]"
                  />

                  <div className="absolute -bottom-36 left-1/3 transform -translate-x-1/2 bg-white p-6 rounded-[4px] w-[80%]">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {details.blog_title}
                    </h3>

                    <p className="text-gray-700 text-xs mb-4">
                      {truncate(
                        sanitizeText(details.blog_description || "")
                      )}
                    </p>

                    <p className="text-gray-400 text-xs">
                      {blog.published_date} • {minutes} min read
                    </p>
                  </div>
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
                  className="relative flex-shrink-0 w-[280px] h-[250px] cursor-pointer"
                  onClick={() => handleNavigateToBlog(blog.id)}
                >
                  <Image
                    src={details.featured_image || "/placeholder.png"}
                    alt={details.blog_title || "Blog"}
                    fill
                    className="object-cover rounded-[4px]"
                  />

                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-[4px] shadow-lg w-[90%]">
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
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
