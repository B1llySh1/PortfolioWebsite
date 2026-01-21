export interface Quest {
  title: string
  subtitle: string
  description: string
  difficulty: 1 | 2 | 3 | 4 | 5
  status: 'active' | 'completed' | 'legendary' | 'upcoming'
  loot: string[]
  rewards: string[]
  period: string
}

export const quests: Quest[] = [
  {
    title: 'HackHub - AI Recruitment Platform',
    subtitle: 'Epic Quest: Revolutionize Hiring',
    description: 'Architected an end-to-end AI recruitment platform adopted by industrial firms for high-volume hiring. The platform automates resume ranking and interview processes, reducing manual HR screening time by 80%.',
    difficulty: 5,
    status: 'legendary',
    period: 'Sep 2024 - May 2025',
    loot: ['Django', 'React', 'GPT API', 'MySQL', 'Redis', 'AWS EC2', 'Docker'],
    rewards: [
      '80% reduction in HR screening time',
      '50% improvement in response times',
      '99.9% system uptime achieved',
      'Adopted by multiple industrial firms'
    ]
  },
  {
    title: 'Million Song Dataset Analysis',
    subtitle: 'Legendary Quest: Big Data Mastery',
    description: 'Scalable data clustering pipeline categorizing 1M+ songs using PySpark and K-means clustering on AWS EMR. Developed TensorFlow model on play histories and deployed low-latency serving with gRPC.',
    difficulty: 4,
    status: 'completed',
    period: 'May 2021 - Aug 2021',
    loot: ['PySpark', 'AWS EMR', 'TensorFlow', 'Azure ML', 'Scikit-learn'],
    rewards: [
      '95% user satisfaction rate',
      '1M+ songs processed',
      'High-precision genre-based suggestions',
      'Low-latency serving with gRPC'
    ]
  },
  {
    title: 'Ambient Sound Platform',
    subtitle: 'Elite Quest: Audio ML Innovation',
    description: 'PANNS-based sound event detection for therapeutic audio focused on sleep and productivity. Fine-tuned for high-noise environments and migrated to AWS for 100% scalability.',
    difficulty: 3,
    status: 'completed',
    period: 'May 2024 - Sep 2024',
    loot: ['PyTorch', 'PANNS', 'RabbitMQ', 'AWS', 'Librosa'],
    rewards: [
      '90%+ usability score validation',
      '88% detection accuracy',
      '100% scalability on AWS',
      'UAT with 12+ participants'
    ]
  },
  {
    title: 'Reddit Comment Predictor',
    subtitle: 'Academic Quest: NLP Mastery',
    description: 'BERT-based NLP model predicting comment popularity from 9 years of Reddit history. Fine-tuned BERT with custom MLP head and layer-freezing for efficiency, achieving 18% MAE reduction.',
    difficulty: 3,
    status: 'completed',
    period: 'Jan 2024 - Apr 2024',
    loot: ['BERT', 'HuggingFace', 'PyTorch', 'Pandas', 'Scipy'],
    rewards: [
      '18% MAE reduction achieved',
      '9 years of Reddit history extracted',
      '10k+ high-engagement posts sampled',
      'Layer-freezing optimization implemented'
    ]
  },
  {
    title: 'AI Agent Framework',
    subtitle: 'Quest Locked: Autonomous Intelligence',
    description: 'Building an advanced AI agent framework for autonomous task completion, multi-step reasoning, and tool orchestration. Exploring LLM-powered agents with memory systems and function calling capabilities.',
    difficulty: 5,
    status: 'upcoming',
    period: 'Coming 2025',
    loot: ['LangChain', 'OpenAI API', 'Vector DB', 'Python', 'FastAPI'],
    rewards: [
      'Autonomous task completion',
      'Multi-step reasoning capabilities',
      'Tool use and function calling',
      'Memory and context management'
    ]
  }
]
