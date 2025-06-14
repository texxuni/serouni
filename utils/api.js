import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Dummy data for stories
const dummyStories = [
  {
    id: 1,
    title: 'Finding Strength in Vulnerability',
    content: 'Sharing my journey of overcoming anxiety...',
    author: 'Anonymous',
    createdAt: '2024-02-20T10:00:00Z',
  },
  {
    id: 2,
    title: 'The Power of Connection',
    content: 'How reaching out changed my life...',
    author: 'Anonymous',
    createdAt: '2024-02-19T15:30:00Z',
  },
];

export const getStories = async () => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyStories), 500);
  });
};

export const postStory = async (storyData) => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const newStory = {
        id: dummyStories.length + 1,
        ...storyData,
        createdAt: new Date().toISOString(),
      };
      dummyStories.unshift(newStory);
      resolve(newStory);
    }, 500);
  });
};

export const getSupport = async () => {
  // In a real app, this would connect to a support service
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'connected',
        listener: {
          name: 'Sarah',
          experience: '5 years',
          specialties: ['Anxiety', 'Depression', 'Life Transitions'],
        },
      });
    }, 1000);
  });
};

export default api; 