import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LessonPage from './pages/LessonPage';
import ProfilePage from './pages/ProfilePage';
import CommunityPage from './pages/CommunityPage';
import PricingPage from './pages/PricingPage';
import CertificationsPage from './pages/CertificationsPage';
import AuthPage from './pages/AuthPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LoginSucess from './components/loginSucess';
import SignUpSucess from './components/SignUpSucess';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>

        <Route path='/logins' element={<LoginSucess/>}/>
        <Route path='/signups' element={<SignUpSucess/>}/>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:courseId" element={<CourseDetailPage />} />
        <Route path="courses/:courseId/lessons/:lessonId" element={<LessonPage />} />
        <Route path="profile" element={<ProfilePage />} />
        {/* <Route path="community" element={<CommunityPage />} /> */}
        <Route path="pricing" element={<PricingPage />} />
        <Route path="certifications" element={<CertificationsPage />} />
        <Route path="auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
}

export default App;