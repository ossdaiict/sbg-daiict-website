/* eslint  no-unused-vars: 0 */

export const sgbHierarchyGraph = {
  nodes: [
    {
      id: 1,
      label: "Student Body",
      color: "#7be041",
      shape: "box",
      shadow: true,
      size: 50,
      heightConstraint: { minimum: 30 },
      widthConstraint: { minimum: 150 }
    },
    {
      id: 2,
      label: "SBG Members",
      color: "#e09c41",
      shape: "box",
      shadow: true,
      size: 50,
      heightConstraint: { minimum: 30 },
      widthConstraint: { minimum: 150 }
    },
    {
      id: 3,
      label: "SBG Core",
      color: "#41e0c9",
      shape: "box",
      shadow: true,
      size: 50,
      heightConstraint: { minimum: 30 },
      widthConstraint: { minimum: 150 }
    }
  ],
  edges: [
    { from: 1, to: 2, label: "Elections", length: 200, shadow: true },
    { from: 2, to: 3, label: "Elections", length: 200, shadow: true }
  ]
};

export const sgbHierarchyOptions = {
  layout: {
    randomSeed: 29,
    hierarchical: {
      enabled: false,
      direction: "DU"
    }
  },
  edges: {
    color: "#000000"
  },
  width: "400px",
  height: "450px"
};

export const sgbHierarchyEvents = {
  select(event) {
    const { nodes, edges } = event;
  }
};
