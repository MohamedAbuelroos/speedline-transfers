// import { Box, CircularProgress, Typography } from "@mui/material";

// interface PriceLoaderProps {
//   step: number;
//   totalSteps: number;
// }

// const PriceLoader = ({ step, totalSteps }: PriceLoaderProps) => {
//   const progress = Math.round((step / totalSteps) * 100);

//   return (
//     <Box
//       sx={{
//         fontWeight: 700,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         minHeight: 80,
//       }}
//     >
//       <Box sx={{ position: "relative", display: "inline-flex" }}>
//         <CircularProgress
//           variant="determinate"
//           value={progress}
//           size={60}
//           thickness={5}
//         />
//         <Box
//           sx={{
//             top: 0,
//             left: 0,
//             bottom: 0,
//             right: 0,
//             position: "absolute",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Typography variant="caption" component="div" color="text.secondary">
//             {`${progress}%`}
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default PriceLoader;

import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface PriceLoaderProps {
  step: number;
  totalSteps: number;
}

const PriceLoader = ({ step, totalSteps }: PriceLoaderProps) => {
  const targetProgress = Math.round((step / totalSteps) * 100); 
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    if (step >= totalSteps) {
      return;
    }

    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      if (progress > targetProgress) {
        progress = 0; // reset and refill again
      }
      setAnimatedProgress(progress);
    }, 50); // speed of refill

    return () => clearInterval(interval);
  }, [step, totalSteps, targetProgress]);

  return (
    <Box
      sx={{
        fontWeight: 700,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: 80,
      }}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={animatedProgress}
          size={60}
          thickness={5}
          sx={{ color: "#1FB1F9" }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${targetProgress}%`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceLoader;
