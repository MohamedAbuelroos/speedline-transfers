import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import RouteLoader from "./RouteLoader";

const RouteChangeHandler = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    requestAnimationFrame(() => {
      if (mounted) {
        setLoading(true);

        setTimeout(
          () => {
            if (mounted) {
              setLoading(false);
            }
          },
          Math.random() * 200 + 100,
        );
      }
    });

    return () => {
      mounted = false;
    };
  }, [location.pathname]);

  return <RouteLoader loading={loading} />;
};

export default RouteChangeHandler;
