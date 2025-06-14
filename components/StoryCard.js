import { motion } from '@emotion/react';

const StoryCard = ({ story }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card hover:shadow-xl transition-shadow duration-300"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h2>
      <p className="text-gray-600 mb-4">{story.content}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>By {story.author}</span>
        <span>{new Date(story.createdAt).toLocaleDateString()}</span>
      </div>
      <div className="mt-4 flex space-x-2">
        <button className="text-accent-teal hover:text-opacity-80 transition-colors">
          <span role="img" aria-label="heart">❤️</span> Support
        </button>
        <button className="text-accent-teal hover:text-opacity-80 transition-colors">
          <span role="img" aria-label="message">💭</span> Comment
        </button>
      </div>
    </motion.div>
  );
};

export default StoryCard; 