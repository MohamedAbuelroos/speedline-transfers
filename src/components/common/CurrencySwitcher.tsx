import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useState } from "react";
import { useCurrency } from "../../context/CurrencyContext";

const currencies = [
  {
    code: "USD",
    label: "US Dollar",
    symbol: "$",
  },
  {
    code: "SAR",
    label: "Saudi Riyal",
    symbol: "﷼",
  },
  {
    code: "EUR",
    label: "Euro",
    symbol: "€",
  },
] as const;

const CurrencySwitcher = () => {
  const [open, setOpen] = useState(false);

  const { currency, setCurrency } = useCurrency();

  const handleSelect = (selectedCurrency: "USD" | "SAR" | "EUR") => {
    setCurrency(selectedCurrency);

    setOpen(false);
  };

  return (
    <>
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

            color: "#F5993D",
          },
        }}
      >
        <CurrencyExchangeIcon
          fontSize="small"
          sx={{
            color: "#F59E0B",
          }}
        />

        {currency}
        <KeyboardArrowDownIcon fontSize="small" />
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle
          sx={{
            fontWeight: 800,
            fontSize: 28,
            textAlign: "center",
          }}
        >
          Select Currency
        </DialogTitle>

        <DialogContent>
          <List>
            {currencies.map((item) => (
              <ListItemButton
                key={item.code}
                onClick={() => handleSelect(item.code)}
                sx={{
                  borderRadius: 2,
                  mb: 1,

                  backgroundColor:
                    currency === item.code
                      ? "rgba(245,153,61,0.08)"
                      : "transparent",

                  "&:hover": {
                    backgroundColor: "rgba(245,153,61,0.08)",
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            
                          }}
                        >
                          {item.code}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                          {item.label}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 700,
                            color: "#1FB1F9",
                          }}
                        >
                          {item.symbol}
                        </Typography>

                        {currency === item.code && (
                          <CheckIcon color="primary" />
                        )}
                      </Box>
                    </Box>
                  }
                />
              </ListItemButton>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CurrencySwitcher;
