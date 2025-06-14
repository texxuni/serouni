import { useState } from 'react';
import Head from 'next/head';
import { motion } from '@emotion/react';
import Header from '../components/Header';
import { getSupport } from '../utils/api';

export default function SOSPage() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [supportData, setSupportData] = useState(null);
  const [error, setError] = useState(null);

  const handleConnect = async () => {
    setIsConnecting(true);
    setError(null);
    
    try {
      const data = await getSupport();
      setSupportData(data);
    } catch (error) {
      setError('Unable to connect to a listener. Please try again.');
      console.error('Error connecting to support:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Emergency Support - SEROUNI</title>
        <meta name="description" content="Get immediate emotional support" />
      </Head>

      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Need Support Now?
          </h1>
          <p className="text-xl text-gray-600">
            You're not alone. Connect with a trained listener immediately.
          </p>
        </div>

        <div className="card max-w-2xl mx-auto">
          {!supportData ? (
            <div className="text-center py-8">
              {error ? (
                <div className="text-red-500 mb-4">{error}</div>
              ) : null}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleConnect}
                disabled={isConnecting}
                className="btn-primary text-lg px-8 py-4"
              >
                {isConnecting ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Connecting...</span>
                  </div>
                ) : (
                  'Connect with a Listener'
                )}
              </motion.button>
              
              <p className="mt-4 text-sm text-gray-500">
                Our listeners are trained to provide emotional support and guidance.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-teal rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👋</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Connected with {supportData.listener.name}
                </h2>
                <p className="text-gray-600">
                  Experience: {supportData.listener.experience}
                </p>
              </div>

              <div className="bg-pastel-teal bg-opacity-20 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Specialties:</h3>
                <div className="flex flex-wrap gap-2">
                  {supportData.listener.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setSupportData(null)}
                  className="text-accent-teal hover:text-opacity-80"
                >
                  End Session
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>If you're experiencing a life-threatening emergency, please call emergency services immediately.</p>
          <p className="mt-2">Emergency: 911</p>
        </div>
      </main>
    </div>
  );
} 