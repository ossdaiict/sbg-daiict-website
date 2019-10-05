import React, { useEffect } from "react";

import Home from "./Home";

export default function HomePage() {
  useEffect(() => {
    document.title = "SBG | DA-IICT";
  }, []);

  return <Home />;
}
