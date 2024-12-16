import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of IT Training: AI-Powered Labs',
      excerpt: 'Discover how artificial intelligence is revolutionizing hands-on IT training...',
      author: 'Sarah Chen',
      date: 'Mar 15, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Maximizing Learning with Virtual Labs',
      excerpt: 'Best practices for utilizing virtual lab environments in IT education...',
      author: 'Michael Rodriguez',
      date: 'Mar 12, 2024',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Cloud Cost Optimization for Training',
      excerpt: 'Learn how to manage and optimize cloud resources for IT training...',
      author: 'David Park',
      date: 'Mar 10, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            <span className="block">Blog</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Latest Insights & Updates
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Stay updated with the latest trends in IT training and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-xl hover:bg-gray-700/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>

                <div className="flex items-center text-sm text-gray-400 space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;