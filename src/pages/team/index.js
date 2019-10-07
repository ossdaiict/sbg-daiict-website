import React, { useEffect } from "react";

import Team from "./Team";

export default function TeamPage() {
  useEffect(() => {
    document.title = "SBG Core Team";
  }, []);

  return <Team />;
}
