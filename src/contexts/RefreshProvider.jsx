import React, { createContext, useState } from "react";

export const RefreshContext = createContext();

const RefreshProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false);

  return (
    <RefreshContext.Provider value={{ refresh, setRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
};

export default RefreshProvider;
