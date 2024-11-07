import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LandingPage } from './components/LandingPage';
import { ClubsPage } from './components/pages/ClubsPage';
import { LearnPage } from './components/pages/LearnPage';
import { EventsPage } from './components/pages/EventsPage';
import { CommunityPage } from './components/pages/CommunityPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="clubs" element={<ClubsPage />} />
        <Route path="learn" element={<LearnPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="community" element={<CommunityPage />} />
      </Route>
    </Routes>
  );
}