import React from 'react';
import { motion } from 'framer-motion';

function PostCard({ post }) {
  return (
    <motion.div
      className="post-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </motion.div>
  );
}

export default PostCard;
