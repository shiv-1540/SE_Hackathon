export interface User {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  role: 'student' | 'instructor' | 'admin';
  bio?: string;
  joinedDate: string;
  subscriptionTier?: 'free' | 'basic' | 'premium' | 'professional';
  instruments?: string[];
  skills?: Skill[];
  completedCourses?: string[];
  inProgressCourses?: {courseId: string, progress: number}[];
  achievements?: Achievement[];
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  dateEarned: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  instructor: {
    id: string;
    name: string;
    profileImage: string;
  };
  category: string;
  subcategory?: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'all-levels';
  thumbnail: string;
  description: string;
  shortDescription: string;
  duration: string; // e.g., "10 weeks"
  lessonsCount: number;
  rating: number;
  ratingCount: number;
  enrolledCount: number;
  price: number;
  discountPrice?: number;
  requirements?: string[];
  whatYouWillLearn: string[];
  lessons: Lesson[];
  tags: string[];
  featured?: boolean;
  subscription: 'free' | 'basic' | 'premium' | 'professional';
  certification: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string; // e.g., "15 min"
  videoUrl?: string;
  resources?: Resource[];
  sheetMusic?: string;
  hasInteractiveExercises: boolean;
  order: number;
  free: boolean;
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'audio' | 'video' | 'link';
  url: string;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  category: string;
  image: string;
  discussions: Discussion[];
}

export interface Discussion {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    profileImage: string;
  };
  createdAt: string;
  replyCount: number;
  likes: number;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  billingCycle: 'monthly' | 'annually';
  features: string[];
  isPopular?: boolean;
  courseAccess: 'limited' | 'unlimited';
  resourceAccess: boolean;
  communityAccess: boolean;
  certificationAccess: boolean;
  instructorSupport: boolean;
  liveSessionsPerMonth: number;
}

export interface Certification {
  id: string;
  title: string;
  description: string;
  image: string;
  courseId: string;
  requirements: string[];
  skills: string[];
  level: 'beginner' | 'intermediate' | 'advanced' | 'professional';
  industry: string;
}