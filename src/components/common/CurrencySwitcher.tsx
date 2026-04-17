import {
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

import { useState } from "react";

const currencies = ["SAR", "USD", "EUR"];

const CurrencySwitcher = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selected, setSelected] = useState("SAR");

  const handleSelect = (currency: string) => {
    setSelected(currency);

    // 🔥 later:
    // store in context or global state

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
        <CurrencyExchangeIcon fontSize="small" />
        {selected}
        <KeyboardArrowDownIcon fontSize="small" />
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {currencies.map((cur) => (
          <MenuItem
            key={cur}
            onClick={() => handleSelect(cur)}
            sx={{
              color: selected === cur ? "primary.main" : "#000",
            }}
          >
            {cur}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CurrencySwitcher;