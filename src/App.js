import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

const Header = lazy(() => import("./components/Header"));
const AchievementsPage = lazy(() => import("./pages/achievements"));
const ClubsPage = lazy(() => import("./pages/clubs"));
const CommitteesPage = lazy(() => import("./pages/committees"));
const ConstitutionPage = lazy(() => import("./pages/constitution"));
const EventsPage = lazy(() => import("./pages/events"));
const GalleryPage = lazy(() => import("./pages/gallery"));
const HomePage = lazy(() => import("./pages/home"));
const MinutesPage = lazy(() => import("./pages/minutes"));
const TeamPage = lazy(() => import("./pages/team"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Header />
        <div id="page-wrapper" className="page-wrapper">
          <Route path="/" exact component={HomePage} />
          <Route path="/achievements" component={AchievementsPage} />
          <Route title="Clubs" path="/clubs" component={ClubsPage} />
          <Route path="/committees" component={CommitteesPage} />
          <Route path="/constitution" component={ConstitutionPage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/minutes" component={MinutesPage} />
          <Route path="/sbgTeam" component={TeamPage} />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
