import {
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import useLanguage from "../../hooks/useLanguage";

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "Arabic" },
  { code: "ru", label: "Russian" },
];

const LanguageSwitcher = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const [selected, setSelected] = useState("en");
  const language = useLanguage();

  const handleSelect = (lang: string) => {
    localStorage.setItem("lang", lang);
    window.dispatchEvent(new Event("languageChange"));
    // setSelected(lang);

    // 🔥 later:
    // i18n.changeLanguage(lang)

    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          color: "#000",
          textTransform: "none",
          display: "flex",
          gap: 1,
        }}
      >
        <LanguageIcon fontSize="small" />
        {language.toUpperCase()}
        <KeyboardArrowDownIcon fontSize="small" />
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            sx={{
              color: language === lang.code ? "primary.main" : "#000",
            }}
          >
            {lang.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSwitcher;