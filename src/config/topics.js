// Topic configuration with custom icons
export const topicConfig = {
  'Immunology': {
    icon: '🦠',
    color: 'text-blue-700'
  },
  'Cardiology': {
    icon: '❤️',
    color: 'text-red-700'
  },
  'Neurology': {
    icon: '🧠',
    color: 'text-purple-700'
  },
  'Oncology': {
    icon: '🔬',
    color: 'text-green-700'
  },
  'Genetics': {
    icon: '🧬',
    color: 'text-indigo-700'
  },
  // Default fallback
  'default': {
    icon: '📝',
    color: 'text-neutral-700'
  }
};

// Helper function to get topic config
export function getTopicConfig(topicName) {
  return topicConfig[topicName] || topicConfig['default'];
}
