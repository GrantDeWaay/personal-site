import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';

// Define the shape of the context data
interface MyContextType {
    addInteraction: (interactionName: string) => void;
    videoTimeUpdate: (time: number) => void;
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
  const interactionRef = useRef<string[]>([]); // New ref for the string
  const videoTracking = useRef<VideoTracking>({played: false, videoMaxTime: 0});
  const addInteraction = (interactionName: string) => {
    interactionRef.current.push(interactionName);
  }

  const videoTimeUpdate = (time: number) => {
    videoTracking.current.played = true;
    if(time > videoTracking.current.videoMaxTime){
        videoTracking.current.videoMaxTime = time;
    }
  }

    useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);
  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    // Custom message (may not show in modern browsers)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "pathVariable": window.location.pathname,
            "visitDuration": Number((new Date().getTime()/1000 - curTime.current).toFixed(2)),
            "interactions": interactionRef.current,
            "videoTracking": videoTracking.current
        })
    };
    fetch('http://localhost:8080/api/log-visit', requestOptions)
        .then(response => response.json())
    //event.preventDefault();
    console.log('Page is unloading. Performing cleanup or actions...');
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
