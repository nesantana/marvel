import React, { useContext, createContext, useState } from "react";

interface iMobileContext {
  isMobile: boolean;
  setIsMobile(item: boolean): void;
}

export const MobileContext = createContext({} as iMobileContext);

export const UseMobileContext: any = () => useContext(MobileContext);

export const UseMobileContextProvider: React.FC<any> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  return (
    <MobileContext.Provider
      value={{
        isMobile,
        setIsMobile,
      }}
    >
      {children}
    </MobileContext.Provider>
  );
};
