import { useState } from 'react';
import { motion } from '@emotion/react';

const SoulDrop = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit({ title, content });
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error submitting story:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-teal focus:ring-accent-teal"
            placeholder="Give your story a title..."
            required
          />
        </div>
        
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Your Story
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-teal focus:ring-accent-teal"
            placeholder="Share your story here..."
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Your story will be shared anonymously
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="btn-primary disabled:opacity-50"
          >
            {isSubmitting ? 'Sharing...' : 'Share Story'}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default SoulDrop; 