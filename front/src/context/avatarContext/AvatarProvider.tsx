'use client'
import { useState, useEffect } from 'react';
import { AvatarContext } from './AvatarContext';

export const AvatarProvider = ({ children }: { children: React.ReactNode }) => {
    const defaultImage = "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png";
    const [estadoAvatar, setEstadoAvatar] =  useState(defaultImage);

    useEffect(() => {
        const storedImage = sessionStorage.getItem('userImage');
        if (storedImage) {
            setEstadoAvatar(storedImage);
        }
      }, []);
    
      const updateUserImage = (newImage: string) => {
        setEstadoAvatar(newImage);
        sessionStorage.setItem('userImage', newImage);
      };


    


    const value = {
        estadoAvatar,
        setEstadoAvatar,
        updateUserImage
    }


    return (
        <AvatarContext.Provider value={value}>{children}</AvatarContext.Provider>
    )
}