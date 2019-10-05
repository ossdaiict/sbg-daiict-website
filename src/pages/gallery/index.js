import React, { useEffect } from "react";

import Gallery from "./Gallery";

export default function GalleryPage() {
  useEffect(() => {
    document.title = "DA-IICT Gallery";
  }, []);

  return <Gallery />;
}
