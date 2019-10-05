import React, { useEffect } from "react";

import Minutes from "./Minutes";

export default function MinutesPage() {
  useEffect(() => {
    document.title = "Minutes of Meetings";
  }, []);

  return <Minutes />;
}
