import { Button, Dialog, DialogContent, Typography, Box } from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useState } from "react";

import useLanguage from "../../hooks/useLanguage";
import { languages } from "../../utils/lang";

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);

  const language = useLanguage();

  const handleSelect = (lang: string) => {
    localStorage.setItem("lang", lang);

    window.dispatchEvent(new Event("languageChange"));

    setOpen(false);
  };

  return (
    <>
      {/* BUTTON */}
      <Button
        onClick={() => setOpen(true)}
        sx={{
          color: "#374151",

          textTransform: "none",

          display: "flex",

          gap: 1,

          px: 2,
          py: 1,

          borderRadius: "999px",

          fontWeight: 600,

          backgroundColor: "rgba(31,177,249,0.06)",

          transition: "0.3s ease",

          "&:hover": {
            backgroundColor: "rgba(31,177,249,0.12)",

            color: "#1FB1F9",
          },
        }}
      >
        <LanguageIcon fontSize="small" />

        {language.toUpperCase()}

        <KeyboardArrowDownIcon fontSize="small" />
      </Button>

      {/* DIALOG */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent
          sx={{
            p: 4,

            borderRadius: "28px",

            background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
          }}
        >
          {/* TITLE */}
          <Typography
            sx={{
              fontWeight: 800,

              fontSize: 28,

              textAlign: "center",

              mb: 1,

              color: "#111827",
            }}
          >
            Select Language
          </Typography>

          <Typography
            sx={{
              textAlign: "center",

              color: "#6b7280",

              mb: 4,

              lineHeight: 1.8,
            }}
          >
            Choose your preferred language
          </Typography>

          {/* LANGUAGES */}
          <Box
            sx={{
              display: "flex",

              flexDirection: "column",

              gap: 2,
            }}
          >
            {languages.map((lang) => {
              const isActive = language === lang.code;

              return (
                <Box
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  sx={{
                    p: 2.2,

                    borderRadius: "20px",

                    cursor: "pointer",

                    border: isActive
                      ? "2px solid #1FB1F9"
                      : "1px solid #e5e7eb",

                    backgroundColor: isActive
                      ? "rgba(31,177,249,0.08)"
                      : "#fff",

                    transition: "0.3s ease",

                    textAlign: "center",

                    "&:hover": {
                      borderColor: "#1FB1F9",

                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,

                      color: isActive ? "#1FB1F9" : "#111827",

                      fontSize: 16,
                    }}
                  >
                    {lang.label}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LanguageSwitcher;
