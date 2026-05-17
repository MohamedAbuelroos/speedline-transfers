import { useNavigate, type NavigateOptions } from "react-router-dom";

import { useNavigationLoader } from "../context/NavigationLoaderContext";

const useDelayedNavigate = () => {
  const navigate = useNavigate();

  const { startLoading } = useNavigationLoader();

  const delayedNavigate = (
    path: string,
    options?: NavigateOptions,
    hash?: string,
  ) => {
    startLoading(() => {
      navigate(hash ? `${path}#${hash}` : path, options);
    });
  };

  return delayedNavigate;
};

export default useDelayedNavigate;
