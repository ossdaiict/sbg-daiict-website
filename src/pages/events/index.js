import React, { useEffect } from "react";

import Events from "./Events";

export default function EventsPage() {
  useEffect(() => {
    document.title = "Events Calendar";
  }, []);

  return <Events />;
}
