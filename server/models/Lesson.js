import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  videoUrl: String,
  resources: [{
    title: String,
    type: {
      type: String,
      enum: ['pdf', 'audio', 'video', 'link']
    },
    url: String
  }],
  sheetMusic: String,
  hasInteractiveExercises: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    required: true
  },
  free: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  }
}, {
  timestamps: true
});

const Lesson = mongoose.model('Lesson', lessonSchema);

export default Lesson;