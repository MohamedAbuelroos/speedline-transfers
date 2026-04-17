import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
type props = {
  title: string;
};
const SectionTitle = ({ title }: props) => {
  const location = useLocation();

  return (
    <>
      <Typography
        sx={{
          color: "#1FB1F9",
          fontSize: 12,
          fontWeight: 600,
          // new style
          border: "1px solid #1FB1F9",
          width: 170,
          mb: 1,
          py: 0.3,
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: `${location.pathname === "/fleet" ? "0" : "auto"}`,
        }}
      >
        {title}
      </Typography>
    </>
  );
};

export default SectionTitle;
