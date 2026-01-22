export interface HomeQuest {
  title: string
  description: string
  status: 'completed' | 'active' | 'locked'
  link?: string
  loot: string[]
  requirement?: string
}

export const homeQuests: HomeQuest[] = [
  {
    title: 'ProMatchAI',
    description: 'An AI-based HR assistant platform designed to streamline recruitment and candidate matching.',
    status: 'completed',
    link: 'https://www.promatchai.com',
    loot: ['Next.js', 'Django', 'OpenAI API']
  },
  {
    title: 'Studdi Buddi Finder',
    description: 'An Android application designed to eliminate student isolation by connecting peers for formal on-campus study sessions.',
    status: 'completed',
    link: 'https://sites.google.com/view/studdibuddi/main-page',
    loot: ['Java', 'Android Studio', 'Firebase']
  },
  {
    title: 'Project: Financial Oracle',
    description: 'An autonomous AI Agent designed to report real-time financial news and provide predictive stock suggestions.',
    status: 'locked',
    loot: ['LangChain', 'Financial APIs', 'Python'],
    requirement: 'Level 20 AI Engineering Required'
  }
]
