import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  Divider,
  Typography,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NearMeIcon from "@mui/icons-material/NearMe";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import useLanguage from "../../../../hooks/useLanguage";
import { translations } from "../../../../i18n";

type Props = {
  open: boolean;

  setOpen: (open: boolean) => void;

  result: any;

  loading: boolean;

  handleContinue: () => void;
};

const TransferEstimateDialog = ({
  open,
  setOpen,
  result,
  loading,
  handleContinue,
}: Props) => {
  const lang = useLanguage();
  const translate = translations[lang];
  const isRtl = lang === "ar";

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "28px",

          overflow: "hidden",
        },
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",
          textAlign: "left",
          px: 4,
          py: 3,

          color: "#fff",
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,

            fontSize: isRtl ? { xs: 35, md: 40 } : { xs: 20, md: 30 },

            mb: 1,
          }}
        >
          {translate.home.estimateDialog.title}
        </Typography>

        <Typography
          sx={{
            opacity: 0.88,
            fontSize: isRtl ? 20 : 16,
          }}
        >
          {translate.home.estimateDialog.desc}
        </Typography>
      </Box>

      {/* CONTENT */}
      <DialogContent
        sx={{
          p: 4,
        }}
      >
        {[
          {
            icon: <LocationOnIcon color="primary" />,
            label: translate.home.estimateDialog.pickupLabel,
            value: result?.from,
          },

          {
            icon: <ArrowForwardIcon color="primary" />,
            label: translate.home.estimateDialog.destinationLabel,
            value: result?.to,
          },

          {
            icon: <NearMeIcon color="primary" />,
            label: translate.home.estimateDialog.distanceLabel,
            value: result?.distance,
          },

          {
            icon: <DirectionsCarIcon color="primary" />,
            label: translate.home.estimateDialog.suggestedLabel,
            value: result?.car?.category,
          },
        ].map((item, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: isRtl ? "row-reverse" : "row",
                justifyContent: "space-between",

                alignItems: "center",

                py: 2,
              }}
            >
              {/* LEFT */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: isRtl ? "row-reverse" : "row",
                  alignItems: "center",

                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,

                    borderRadius: "14px",

                    backgroundColor: "#f0f9ff",

                    display: "flex",

                    justifyContent: "center",

                    alignItems: "center",
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  sx={{
                    color: "#6b7280",
                    fontSize: isRtl ? 20 : 16,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>

              {/* VALUE */}
              <Typography
                sx={{
                  fontWeight: 700,

                  textAlign: "right",
                }}
              >
                {item.value}
              </Typography>
            </Box>

            {index !== 3 && <Divider />}
          </Box>
        ))}

        {/* PRICE BOX */}
        <Box
          sx={{
            mt: 4,

            p: 3,

            borderRadius: "22px",

            background: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)",

            border: "1px solid #dbeafe",

            display: "flex",
            flexDirection: isRtl ? "row-reverse" : "row",
            textAlign: "left",

            justifyContent: "space-between",

            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#6b7280",
                fontSize: isRtl ? 20 : 16,
                mb: 0.5,
              }}
            >
              {translate.home.estimateDialog.estimated}
            </Typography>

            <Typography
              sx={{
                fontSize: 32,

                fontWeight: 900,

                color: "#111827",
              }}
            >
              {result?.price} SAR
            </Typography>
          </Box>

          <Box
            sx={{
              px: 2,
              py: 1,

              borderRadius: "999px",

              backgroundColor: "#dcfce7",

              color: "#15803d",

              fontWeight: 700,

              fontSize: isRtl ? 22 : 13,
            }}
          >
            {translate.home.estimateDialog.available}
          </Box>
        </Box>

        {/* NOTE */}
        <Typography
          sx={{
            mt: 2,

            fontSize: isRtl ? 16 : 13,

            color: "#6b7280",
            textAlign: "left",
            lineHeight: 1.8,
          }}
        >
          {translate.home.estimateDialog.note}
        </Typography>

        {/* ACTIONS */}
        <Box
          sx={{
            display: "flex",

            gap: 2,

            mt: 4,
          }}
        >
          <Button
            fullWidth
            variant="outlined"
            onClick={() => setOpen(false)}
            sx={{
              borderRadius: "14px",

              height: 52,

              textTransform: "none",

              fontWeight: 700,
            }}
          >
            {translate.home.estimateDialog.cancel}
          </Button>

          <Button
            fullWidth
            variant="contained"
            disabled={loading}
            onClick={handleContinue}
            sx={{
              borderRadius: "14px",

              height: 52,

              textTransform: "none",

              fontWeight: 700,

              background: "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",
            }}
          >
            {loading ? (
              <CircularProgress
                size={22}
                sx={{
                  color: "#fff",
                }}
              />
            ) : (
              translate.home.estimateDialog.book
            )}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default TransferEstimateDialog;
