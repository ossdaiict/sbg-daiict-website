import React, { useEffect } from "react";

import Achievements from "./Achievements";

export default function AchievementsPage() {
  useEffect(() => {
    document.title = "Achievements";
  }, []);

  return <Achievements />;
}
