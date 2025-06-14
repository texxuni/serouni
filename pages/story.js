import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import SoulDrop from '../components/SoulDrop';
import StoryCard from '../components/StoryCard';
import DonationButton from '../components/DonationButton';
import PremiumModal from '../components/PremiumModal';
import { getStories, postStory } from '../utils/api';

export default function StoryPage() {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadStories();
  }, []);

  const loadStories = async () => {
    try {
      const fetchedStories = await getStories();
      setStories(fetchedStories);
    } catch (error) {
      console.error('Error loading stories:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStorySubmit = async (storyData) => {
    try {
      const newStory = await postStory(storyData);
      setStories(prevStories => [newStory, ...prevStories]);
    } catch (error) {
      console.error('Error submitting story:', error);
    }
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Share Your Story - SEROUNI</title>
        <meta name="description" content="Share your story and connect with others" />
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Share Your Story
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your story matters. Share it anonymously and connect with others who understand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <SoulDrop onSubmit={handleStorySubmit} />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Recent Stories
            </h2>
            
            {isLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-teal mx-auto"></div>
              </div>
            ) : (
              <div className="space-y-6">
                {stories.map(story => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <DonationButton onClick={() => setIsModalOpen(true)} />
        </div>
      </main>

      <PremiumModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
} 