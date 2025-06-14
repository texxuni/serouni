import { motion, AnimatePresence } from '@emotion/react';

const PremiumModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl p-6 max-w-md w-full"
          onClick={e => e.stopPropagation()}
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Support SEROUNI
            </h2>
            <p className="text-gray-600 mb-6">
              Your contribution helps us create more healing spaces and support more people in need.
            </p>
          </div>

          <div className="space-y-4">
            <div className="card bg-pastel-rose bg-opacity-50">
              <h3 className="font-semibold text-lg mb-2">Monthly Supporter</h3>
              <p className="text-gray-600 mb-4">$5/month</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✨ Ad-free experience</li>
                <li>✨ Priority support access</li>
                <li>✨ Exclusive community features</li>
              </ul>
            </div>

            <div className="card bg-pastel-teal bg-opacity-50">
              <h3 className="font-semibold text-lg mb-2">One-time Donation</h3>
              <p className="text-gray-600 mb-4">Choose your amount</p>
              <div className="grid grid-cols-3 gap-2">
                {[10, 25, 50].map(amount => (
                  <button
                    key={amount}
                    className="btn-primary text-sm"
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PremiumModal; 