import { User, Course, Community, SubscriptionPlan, Certification } from '../types';

export const currentUser: User = {
  id: 'user1',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  role: 'student',
  bio: 'Passionate about learning piano and music theory. Looking to improve my skills!',
  joinedDate: '2023-09-15',
  subscriptionTier: 'basic',
  instruments: ['Piano', 'Guitar (Beginner)'],
  skills: [
    { name: 'Piano', level: 'intermediate' },
    { name: 'Music Theory', level: 'beginner' },
    { name: 'Sight Reading', level: 'beginner' }
  ],
  completedCourses: ['course3'],
  inProgressCourses: [
    { courseId: 'course1', progress: 45 },
    { courseId: 'course2', progress: 20 }
  ],
  achievements: [
    {
      id: 'ach1',
      title: 'First Steps',
      description: 'Completed your first lesson',
      icon: 'trophy',
      dateEarned: '2023-09-20'
    },
    {
      id: 'ach2',
      title: 'Consistent Learner',
      description: 'Completed lessons for 7 consecutive days',
      icon: 'calendar',
      dateEarned: '2023-10-05'
    }
  ]
};

export const courses: Course[] = [
  {
    id: 'course1',
    title: 'Piano Fundamentals: From Beginner to Intermediate',
    slug: 'piano-fundamentals',
    instructor: {
      id: 'instr1',
      name: 'Sarah Williams',
      profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    category: 'Instruments',
    subcategory: 'Piano',
    level: 'beginner',
    thumbnail: 'https://images.pexels.com/photos/4088801/pexels-photo-4088801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Master the piano from the ground up with this comprehensive course designed for beginners. Learn proper technique, music theory, and how to play your favorite songs.',
    shortDescription: 'Learn piano from scratch with proper technique and theory.',
    duration: '12 weeks',
    lessonsCount: 24,
    rating: 4.8,
    ratingCount: 342,
    enrolledCount: 1256,
    price: 99.99,
    requirements: ['No prior experience needed', 'Access to a piano or keyboard'],
    whatYouWillLearn: [
      'Proper hand positioning and technique',
      'Reading sheet music and understanding music theory',
      'Playing major and minor scales',
      'Performing simple to intermediate songs',
      'Developing a practice routine'
    ],
    lessons: [
      {
        id: 'lesson1-1',
        title: 'Introduction to the Piano',
        description: 'Learn about the piano, its history, and the basics of sitting and hand positioning.',
        duration: '20 min',
        videoUrl: 'https://example.com/videos/intro-to-piano',
        resources: [
          { id: 'res1-1', title: 'Piano Key Chart', type: 'pdf', url: 'https://example.com/resources/piano-key-chart.pdf' }
        ],
        hasInteractiveExercises: true,
        order: 1,
        free: true
      },
      {
        id: 'lesson1-2',
        title: 'Reading Music Notation',
        description: 'Introduction to reading sheet music, notes, and rhythm.',
        duration: '30 min',
        videoUrl: 'https://example.com/videos/reading-music',
        sheetMusic: 'https://example.com/sheet-music/basic-notation.pdf',
        hasInteractiveExercises: true,
        order: 2,
        free: false
      }
    ],
    tags: ['piano', 'beginner', 'music theory', 'keyboard'],
    featured: true,
    subscription: 'basic',
    certification: true
  },
  {
    id: 'course2',
    title: 'Advanced Guitar Techniques',
    slug: 'advanced-guitar-techniques',
    instructor: {
      id: 'instr2',
      name: 'David Rodriguez',
      profileImage: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    category: 'Instruments',
    subcategory: 'Guitar',
    level: 'advanced',
    thumbnail: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Take your guitar playing to the next level with advanced techniques including fingerstyle, sweep picking, tapping, and harmonics. Perfect for intermediate players looking to advance.',
    shortDescription: 'Master advanced guitar techniques and elevate your playing.',
    duration: '8 weeks',
    lessonsCount: 16,
    rating: 4.9,
    ratingCount: 178,
    enrolledCount: 823,
    price: 129.99,
    requirements: ['Intermediate guitar skills', 'Understanding of basic music theory', 'Electric or acoustic guitar'],
    whatYouWillLearn: [
      'Advanced fingerstyle techniques',
      'Sweep picking and economy picking',
      'Two-hand tapping techniques',
      'Natural and artificial harmonics',
      'Advanced chord voicings',
      'Creating complex solos'
    ],
    lessons: [
      {
        id: 'lesson2-1',
        title: 'Mastering Sweep Picking',
        description: 'Learn the fundamentals of sweep picking and how to incorporate it into your playing.',
        duration: '25 min',
        videoUrl: 'https://example.com/videos/sweep-picking',
        resources: [
          { id: 'res2-1', title: 'Sweep Picking Exercises', type: 'pdf', url: 'https://example.com/resources/sweep-picking.pdf' },
          { id: 'res2-2', title: 'Backing Track', type: 'audio', url: 'https://example.com/resources/backing-track.mp3' }
        ],
        hasInteractiveExercises: true,
        order: 1,
        free: false
      }
    ],
    tags: ['guitar', 'advanced techniques', 'fingerstyle', 'sweep picking', 'tapping'],
    featured: false,
    subscription: 'premium',
    certification: true
  },
  {
    id: 'course3',
    title: 'Music Theory Fundamentals',
    slug: 'music-theory-fundamentals',
    instructor: {
      id: 'instr3',
      name: 'Emily Chen',
      profileImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    category: 'Theory',
    level: 'beginner',
    thumbnail: 'https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Understand the building blocks of music with this comprehensive course on music theory. Learn scales, intervals, chords, and more to become a well-rounded musician.',
    shortDescription: 'Learn essential music theory concepts for any instrument.',
    duration: '6 weeks',
    lessonsCount: 12,
    rating: 4.7,
    ratingCount: 426,
    enrolledCount: 2145,
    price: 79.99,
    requirements: ['Basic understanding of music notation helpful but not required'],
    whatYouWillLearn: [
      'Reading and writing music notation',
      'Understanding scales and key signatures',
      'Building and analyzing chords',
      'Comprehending rhythm and time signatures',
      'Ear training and interval recognition',
      'Basic song analysis'
    ],
    lessons: [
      {
        id: 'lesson3-1',
        title: 'The Staff, Notes, and Clefs',
        description: 'Learn about the foundation of music notation including the staff, note names, and different clefs.',
        duration: '30 min',
        videoUrl: 'https://example.com/videos/staff-notes-clefs',
        hasInteractiveExercises: true,
        order: 1,
        free: true
      }
    ],
    tags: ['music theory', 'notation', 'scales', 'chords', 'beginner'],
    featured: true,
    subscription: 'free',
    certification: true
  },
  {
    id: 'course4',
    title: 'Violin for Beginners',
    slug: 'violin-for-beginners',
    instructor: {
      id: 'instr4',
      name: 'Michael Takahashi',
      profileImage: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    category: 'Instruments',
    subcategory: 'Violin',
    level: 'beginner',
    thumbnail: 'https://images.pexels.com/photos/5089153/pexels-photo-5089153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Start your violin journey with proper technique and build a strong foundation. Learn how to hold the violin and bow, produce clear tones, and play simple melodies.',
    shortDescription: 'Begin your violin journey with proper technique and fundamentals.',
    duration: '10 weeks',
    lessonsCount: 20,
    rating: 4.6,
    ratingCount: 215,
    enrolledCount: 978,
    price: 119.99,
    discountPrice: 99.99,
    requirements: ['No prior experience needed', 'Access to a violin and bow'],
    whatYouWillLearn: [
      'Proper violin and bow hold',
      'Basic bow strokes and techniques',
      'Finger placement and intonation',
      'Reading music for violin',
      'Playing simple songs and melodies',
      'Establishing a practice routine'
    ],
    lessons: [
      {
        id: 'lesson4-1',
        title: 'Getting to Know Your Violin',
        description: 'Learn about the parts of the violin, how to care for it, and proper setup.',
        duration: '25 min',
        videoUrl: 'https://example.com/videos/violin-intro',
        hasInteractiveExercises: false,
        order: 1,
        free: true
      }
    ],
    tags: ['violin', 'beginner', 'strings', 'classical'],
    featured: false,
    subscription: 'basic',
    certification: true
  },
  {
    id: 'course5',
    title: 'Music Composition and Songwriting',
    slug: 'music-composition-songwriting',
    instructor: {
      id: 'instr5',
      name: 'James Wilson',
      profileImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    category: 'Composition',
    level: 'intermediate',
    thumbnail: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Learn the art and craft of music composition and songwriting. Explore melody, harmony, form, and lyrics to create compelling original music across various genres.',
    shortDescription: 'Create original music with essential composition techniques.',
    duration: '8 weeks',
    lessonsCount: 16,
    rating: 4.8,
    ratingCount: 312,
    enrolledCount: 1432,
    price: 149.99,
    requirements: ['Basic music theory knowledge', 'Ability to play an instrument (recommended)'],
    whatYouWillLearn: [
      'Crafting memorable melodies',
      'Chord progressions and harmonic structures',
      'Song forms and arrangements',
      'Lyric writing techniques',
      'Music production basics',
      'Creating demos of your compositions'
    ],
    lessons: [
      {
        id: 'lesson5-1',
        title: 'Elements of Melody',
        description: 'Explore what makes a melody compelling and learn techniques for creating your own.',
        duration: '35 min',
        videoUrl: 'https://example.com/videos/melody-composition',
        hasInteractiveExercises: true,
        order: 1,
        free: false
      }
    ],
    tags: ['composition', 'songwriting', 'creativity', 'melody', 'harmony'],
    featured: true,
    subscription: 'premium',
    certification: true
  }
];

export const communities: Community[] = [
  {
    id: 'comm1',
    name: 'Piano Enthusiasts',
    description: 'A community for piano players of all levels to share tips, ask questions, and discuss all things piano.',
    memberCount: 3245,
    category: 'Instruments',
    image: 'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    discussions: [
      {
        id: 'disc1',
        title: 'Best practice routines for beginners?',
        content: 'I just started learning piano and I\'m wondering what practice routines have worked best for other beginners. I can practice about 30 minutes a day.',
        author: {
          id: 'user2',
          name: 'Sarah Thompson',
          profileImage: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        createdAt: '2023-11-15T10:30:00Z',
        replyCount: 12,
        likes: 24
      }
    ]
  },
  {
    id: 'comm2',
    name: 'Music Theory Study Group',
    description: 'Deep dive into music theory concepts, from basics to advanced topics. Share resources and help each other understand complex ideas.',
    memberCount: 1876,
    category: 'Theory',
    image: 'https://images.pexels.com/photos/9886584/pexels-photo-9886584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    discussions: [
      {
        id: 'disc2',
        title: 'Understanding modal interchange?',
        content: 'I\'m struggling to grasp the concept of modal interchange in composition. Can someone explain it in simple terms?',
        author: {
          id: 'user3',
          name: 'Michael Chen',
          profileImage: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        createdAt: '2023-11-20T15:45:00Z',
        replyCount: 8,
        likes: 16
      }
    ]
  },
  {
    id: 'comm3',
    name: 'Composers Corner',
    description: 'For composers and songwriters to share their work, get feedback, and discuss composition techniques across all genres.',
    memberCount: 2543,
    category: 'Composition',
    image: 'https://images.pexels.com/photos/6966/abstract-music-rock-bw.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    discussions: [
      {
        id: 'disc3',
        title: 'How to overcome writer\'s block?',
        content: 'I\'ve been stuck on the same composition for weeks now. What techniques do you use to overcome creative blocks?',
        author: {
          id: 'user4',
          name: 'Emma Williams',
          profileImage: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        createdAt: '2023-11-22T09:15:00Z',
        replyCount: 21,
        likes: 38
      }
    ]
  }
];

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'plan1',
    name: 'Free',
    price: 0,
    billingCycle: 'monthly',
    features: [
      'Access to free courses only',
      'Basic community access',
      'Limited resources',
      'No certification'
    ],
    courseAccess: 'limited',
    resourceAccess: false,
    communityAccess: true,
    certificationAccess: false,
    instructorSupport: false,
    liveSessionsPerMonth: 0
  },
  {
    id: 'plan2',
    name: 'Basic',
    price: 14.99,
    billingCycle: 'monthly',
    features: [
      'Access to 100+ basic courses',
      'Full community access',
      'Downloadable resources',
      'Basic certification',
      'Email support'
    ],
    courseAccess: 'limited',
    resourceAccess: true,
    communityAccess: true,
    certificationAccess: true,
    instructorSupport: false,
    liveSessionsPerMonth: 1,
    isPopular: true
  },
  {
    id: 'plan3',
    name: 'Premium',
    price: 29.99,
    billingCycle: 'monthly',
    features: [
      'Access to all 300+ courses',
      'Priority community access',
      'All downloadable resources',
      'Advanced certification',
      'Instructor support',
      '2 live sessions per month'
    ],
    courseAccess: 'unlimited',
    resourceAccess: true,
    communityAccess: true,
    certificationAccess: true,
    instructorSupport: true,
    liveSessionsPerMonth: 2
  },
  {
    id: 'plan4',
    name: 'Professional',
    price: 49.99,
    billingCycle: 'monthly',
    features: [
      'Everything in Premium',
      'One-on-one mentorship',
      'Personalized learning path',
      'Professional certification',
      'Priority support',
      '4 live sessions per month',
      'Career guidance'
    ],
    courseAccess: 'unlimited',
    resourceAccess: true,
    communityAccess: true,
    certificationAccess: true,
    instructorSupport: true,
    liveSessionsPerMonth: 4
  }
];

export const certifications: Certification[] = [
  {
    id: 'cert1',
    title: 'Piano Proficiency - Level 1',
    description: 'This certification validates your foundational skills in piano playing, including proper technique, basic theory, and the ability to perform beginner-level pieces.',
    image: 'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    courseId: 'course1',
    requirements: [
      'Complete the Piano Fundamentals course',
      'Pass the written theory assessment',
      'Submit a video performance of assigned pieces',
      'Demonstrate proper technique in practical assessment'
    ],
    skills: [
      'Basic piano technique',
      'Reading sheet music',
      'Playing major and minor scales',
      'Basic chord progressions',
      'Performance of beginner pieces'
    ],
    level: 'beginner',
    industry: 'Music Performance'
  },
  {
    id: 'cert2',
    title: 'Music Theory Certification',
    description: 'Demonstrate your understanding of essential music theory concepts, including notation, scales, intervals, and chord construction.',
    image: 'https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    courseId: 'course3',
    requirements: [
      'Complete the Music Theory Fundamentals course',
      'Score at least 80% on the comprehensive theory exam',
      'Complete ear training assessments',
      'Submit chord and scale analysis project'
    ],
    skills: [
      'Music notation reading and writing',
      'Scale and mode identification',
      'Chord construction and analysis',
      'Rhythm and meter comprehension',
      'Ear training and interval recognition'
    ],
    level: 'intermediate',
    industry: 'Music Education'
  },
  {
    id: 'cert3',
    title: 'Composition and Songwriting Professional',
    description: 'This advanced certification recognizes your ability to compose original music across multiple genres with professional-level technique and creativity.',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    courseId: 'course5',
    requirements: [
      'Complete the Music Composition and Songwriting course',
      'Submit a portfolio of 5 original compositions',
      'Pass analysis and theory assessment',
      'Complete a timed composition challenge',
      'Receive peer and instructor review'
    ],
    skills: [
      'Advanced melody writing',
      'Complex harmonic progressions',
      'Song structure and arrangement',
      'Lyric writing (for vocal works)',
      'Genre-specific composition techniques',
      'Music production basics'
    ],
    level: 'advanced',
    industry: 'Music Composition'
  }
];