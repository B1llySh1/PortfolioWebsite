export interface Skill {
  name: string
  category: 'weaponry' | 'magic' | 'armor'
  level: number
  description: string
  usage: string
  icon: string
}

export const skills: Skill[] = [
  // Weaponry (Languages)
  {
    name: 'Python',
    category: 'weaponry',
    level: 95,
    description: 'Primary Programming Language',
    usage: 'Built HackHub AI platform backend with Django, developed ML models with PyTorch/TensorFlow, processed 1M+ songs with PySpark.',
    icon: '🐍'
  },
  {
    name: 'JavaScript',
    category: 'weaponry',
    level: 90,
    description: 'Full-Stack Development',
    usage: 'Developed React frontends for HackHub and portfolio sites, built interactive UIs with Next.js 14 and Framer Motion.',
    icon: '⚡'
  },
  {
    name: 'SQL',
    category: 'weaponry',
    level: 85,
    description: 'Database Management',
    usage: 'Optimized MySQL queries with indexing for HackHub, designed database schemas for high-volume recruitment data.',
    icon: '🗄️'
  },
  {
    name: 'Java',
    category: 'weaponry',
    level: 80,
    description: 'Object-Oriented Programming',
    usage: 'Built enterprise applications with Spring Boot, implemented RESTful APIs for scalable backend systems.',
    icon: '☕'
  },

  // Magic (AI/ML)
  {
    name: 'PyTorch',
    category: 'magic',
    level: 90,
    description: 'Deep Learning Framework',
    usage: 'Fine-tuned BERT models for Reddit comment prediction, implemented PANNS for audio event detection with 88% accuracy.',
    icon: '🔥'
  },
  {
    name: 'BERT/NLP',
    category: 'magic',
    level: 85,
    description: 'Natural Language Processing',
    usage: 'Built comment popularity predictor achieving 18% MAE reduction, integrated GPT API for real-time AI-led interviews.',
    icon: '📖'
  },
  {
    name: 'Computer Vision',
    category: 'magic',
    level: 80,
    description: 'Image Recognition & Analysis',
    usage: 'Developed CNN models for image classification tasks, applied transfer learning for medical image analysis projects.',
    icon: '👁️'
  },
  {
    name: 'Spark',
    category: 'magic',
    level: 85,
    description: 'Big Data Processing',
    usage: 'Processed 1M+ songs on AWS EMR with PySpark, implemented K-means clustering for scalable recommendation engine.',
    icon: '⚙️'
  },
  {
    name: 'TensorFlow',
    category: 'magic',
    level: 85,
    description: 'ML Framework',
    usage: 'Built music recommendation models with TensorFlow, deployed low-latency serving on Azure ML with gRPC.',
    icon: '🧠'
  },

  // Armor (Infrastructure)
  {
    name: 'AWS',
    category: 'armor',
    level: 85,
    description: 'Cloud Infrastructure',
    usage: 'Deployed HackHub on EC2 with 99.9% uptime, used EMR for big data processing, S3 for asset storage.',
    icon: '☁️'
  },
  {
    name: 'Docker',
    category: 'armor',
    level: 85,
    description: 'Containerization',
    usage: 'Built CI/CD pipelines for HackHub with Docker, containerized ML models for reproducible deployments.',
    icon: '🐳'
  },
  {
    name: 'Azure',
    category: 'armor',
    level: 75,
    description: 'Cloud Platform',
    usage: 'Deployed low-latency ML serving layer with gRPC on Azure ML for music recommendation engine.',
    icon: '🔷'
  },
  {
    name: 'Redis',
    category: 'armor',
    level: 80,
    description: 'Caching & Performance',
    usage: 'Implemented Redis caching for HackHub, improving response times by 50%, used for session management.',
    icon: '⚡'
  }
]
