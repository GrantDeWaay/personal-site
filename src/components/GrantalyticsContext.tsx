import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';

// Define the shape of the context data
interface MyContextType {
    addInteraction: (interactionName: string) => void;
    videoTimeUpdate: () => void;
}

interface VideoTracking{
  played: boolean;
    videoMaxTime: number;
}

// Create the context with a default value of undefined
const MyContext = createContext<MyContextType | undefined>(undefined);

// Create a provider component
interface GrantalyticsProviderProps {
  children: ReactNode;
}

export const GrantalyticsProvider: React.FC<GrantalyticsProviderProps> = ({ children }) => {
  const curTime = useRef<number>(new Date().getTime()/1000);
  const uniqueId = useRef<string>(undefined);
  const interactionRef = useRef<string[]>([]); // New ref for the string
  const videoTracking = useRef<boolean>(false);
  const addInteraction = (interactionName: string) => {
    interactionRef.current.push(interactionName);
    sendRequest();
  }

  const videoTimeUpdate = () => {
    if(videoTracking.current == false){
      videoTracking.current = true;
      sendRequest();
    }
  }

    useEffect(() => {
      const requestOptions = {
        method: 'GET',
    };
    fetch('https://grantalytics-server-770601767747.us-central1.run.app/api/generate', requestOptions)
      .then(response => response.json())
      .then(data => {uniqueId.current = data.id})
      .then(() => sendRequest())
      .catch(error => console.error('Error:', error))
      
    }, []);
  const sendRequest = () => {
    if(uniqueId.current !== undefined){

    // Custom message (may not show in modern browsers)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "id": uniqueId.current,
            "pathVariable": window.location.pathname,
            "visitDuration": Number((new Date().getTime()/1000 - curTime.current).toFixed(2)),
            "interactions": interactionRef.current,
            "videoPlayed": videoTracking.current
        })
    };
    fetch('https://grantalytics-server-770601767747.us-central1.run.app/api/log-visit', requestOptions)
    .catch(error => console.error('Error:', error))
  }
  };

  
  return (
    <MyContext.Provider value={{addInteraction, videoTimeUpdate}}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to use the context
export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};
