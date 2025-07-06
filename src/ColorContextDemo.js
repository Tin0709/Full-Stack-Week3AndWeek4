import React, { createContext, useContext } from "react";

const ColorContext = createContext();

const GrandChildComponent = () => {
  const { color, backgroundColor } = useContext(ColorContext);
  return (
    <div style={{ color, backgroundColor, padding: 8 }}>
      GrandChildComponent (uses context)
    </div>
  );
};

const ChildComponent = () => {
  const { color, backgroundColor } = useContext(ColorContext);
  // Example override:
  const override = { color: "red", backgroundColor };
  return (
    <div style={{ color: override.color, backgroundColor: override.backgroundColor, padding: 8 }}>
      ChildComponent (overrides color to red)
      <GrandChildComponent />
    </div>
  );
};

const ParentComponent = () => {
  const ctx = useContext(ColorContext);
  return (
    <div style={{ color: ctx.color, backgroundColor: ctx.backgroundColor, padding: 8 }}>
      ParentComponent
      <ChildComponent />
    </div>
  );
};

export default function GrandParentComponent() {
  const contextValue = { color: "navy", backgroundColor: "lightyellow" };
  return (
    <ColorContext.Provider value={contextValue}>
      <div style={{ color: contextValue.color, backgroundColor: contextValue.backgroundColor, padding: 8 }}>
        GrandParentComponent
        <ParentComponent />
      </div>
    </ColorContext.Provider>
  );
}
