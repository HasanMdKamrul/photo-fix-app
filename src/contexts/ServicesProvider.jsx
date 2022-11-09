import React, { createContext, useEffect, useState } from "react";

export const ServicesContext = createContext();

const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          `https://photo-fix-server.vercel.app/services`
        );
        const data = await response.json();
        setServices(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadData();
  }, []);

  return (
    <ServicesContext.Provider value={{ services }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
