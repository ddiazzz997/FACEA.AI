
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import ProfileSetup from './components/ProfileSetup';
import ChatInterface from './components/ChatInterface';
import BackgroundAnimation from './components/BackgroundAnimation';
import { UserProfile } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'setup' | 'chat'>('landing');
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const handleLogin = () => {
    setView('setup');
  };

  const handleProfileComplete = (newProfile: UserProfile) => {
    setProfile(newProfile);
    setView('chat');
  };

  const handleLogout = () => {
    setProfile(null);
    setView('landing');
  };

  return (
    <div className="min-h-screen relative font-sans selection:bg-red-500 selection:text-white">
      <BackgroundAnimation />
      
      <main className="transition-all duration-700">
        {view === 'landing' && (
            <LandingPage onLogin={handleLogin} />
        )}

        {view === 'setup' && (
            <ProfileSetup onComplete={handleProfileComplete} />
        )}

        {view === 'chat' && profile && (
            <ChatInterface profile={profile} onLogout={handleLogout} />
        )}
      </main>
    </div>
  );
};

export default App;
