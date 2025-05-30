import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subcategory: String,
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced', 'all-levels'],
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  duration: String,
  lessonsCount: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 0
  },
  ratingCount: {
    type: Number,
    default: 0
  },
  enrolledCount: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  discountPrice: Number,
  requirements: [String],
  whatYouWillLearn: [String],
  tags: [String],
  featured: {
    type: Boolean,
    default: false
  },
  subscription: {
    type: String,
    enum: ['free', 'basic', 'premium', 'professional'],
    required: true
  },
  certification: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual populate lessons
courseSchema.virtual('lessons', {
  ref: 'Lesson',
  localField: '_id',
  foreignField: 'course'
});

// Virtual populate reviews
courseSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'course'
});

const Course = mongoose.model('Course', courseSchema);

export default Course;