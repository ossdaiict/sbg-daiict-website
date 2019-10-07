import React, { useEffect } from "react";

import Constitution from "./constitution";

export default function ConstitutionPage() {
  useEffect(() => {
    document.title = "SBG Constitution";
  }, []);

  return <Constitution />;
}
