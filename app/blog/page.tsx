"use client"

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useState } from 'react';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchBlogs = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/generated-blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error('Failed to fetch blogs');
      const data = await response.json();
      setBlogs(data.blogs);
    } catch (err:any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white">
      <Navbar />
      <main className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold mb-8">AI Blog</h1>
          <p className="text-xl text-gray-400 mb-8">
            Stay updated with the latest news and trends in the world of Artificial Intelligence.
          </p>
          <div className="text-center mb-12">
            <button
              onClick={fetchBlogs}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              disabled={loading}
            >
              {loading ? 'Generating Blogs...' : 'Fetch Latest AI Blogs'}
            </button>
          </div>
          {error && <div className="text-red-500 text-center mb-8">{error}</div>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog: any, index) => (
              <div
                key={index}
                className="bg-[#1A1C22] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{blog.title}</h3>
                <p className="text-gray-400 mb-4">{blog.summary}</p>
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
