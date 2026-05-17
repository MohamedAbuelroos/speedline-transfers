import { useNavigate, type NavigateOptions } from "react-router-dom";

import { useNavigationLoader } from "../context/NavigationLoaderContext";

const useDelayedNavigate = () => {
  const navigate = useNavigate();

  const { startLoading } = useNavigationLoader();

  const delayedNavigate = (path: string, options?: NavigateOptions) => {
    startLoading(() => {
      navigate(path, options);
    });
  };

  return delayedNavigate;
};

export default useDelayedNavigate;
