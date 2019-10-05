import React, { useEffect } from "react";

import Committees from "./committees";

export default function CommitteesPage() {
  useEffect(() => {
    document.title = "Committees";
  }, []);

  return <Committees />;
}
