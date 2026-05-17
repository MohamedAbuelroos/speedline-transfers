import { createContext, useContext, useState, type ReactNode } from "react";

type NavigationLoaderContextType = {
  loading: boolean;

  startLoading: (callback: () => void) => void;
};

const NavigationLoaderContext =
  createContext<NavigationLoaderContextType | null>(null);

export const NavigationLoaderProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [loading, setLoading] = useState(false);

  const startLoading = (callback: () => void) => {
    setLoading(true);

    const delay = Math.random() * 500 + 400;

    setTimeout(() => {
      callback();

      setTimeout(() => {
        setLoading(false);
      }, 400);
    }, delay);
  };

  return (
    <NavigationLoaderContext.Provider
      value={{
        loading,
        startLoading,
      }}
    >
      {children}
    </NavigationLoaderContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNavigationLoader = () => {
  const context = useContext(NavigationLoaderContext);

  if (!context) {
    throw new Error(
      "useNavigationLoader must be used inside NavigationLoaderProvider",
    );
  }

  return context;
};
