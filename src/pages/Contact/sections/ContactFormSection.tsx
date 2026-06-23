import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { sendContactEmail } from "../../../utils/sendContactEmail";
import useLanguage from "../../../hooks/useLanguage";
import { translations } from "../../../i18n";

const ContactFormSection = () => {
  const lang = useLanguage();
  const translate = translations[lang];
  const isRtl = lang === "ar";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phoneRegex = /^[+]?[0-9\s()-]{8,20}$/;

  const validateForm = () => {
    const newErrors = {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = translate.contact.form.validations.nameRequired;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = translate.contact.form.validations.phoneRequired;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = translate.contact.form.validations.phoneInvalid;
    }

    if (!formData.email.trim()) {
      newErrors.email = translate.contact.form.validations.emailRequired;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = translate.contact.form.validations.emailInvalid;
    }

    if (!formData.service) {
      newErrors.service = translate.contact.form.validations.serviceRequired;
    }

    if (!formData.message.trim()) {
      newErrors.message = translate.contact.form.validations.messageRequired;
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      await sendContactEmail(formData);

      setSnackbar({
        open: true,
        message: translate.contact.form.success,
        severity: "success",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setSnackbar({
        open: true,
        message: translate.contact.form.error,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });
  return (
    <Box
      sx={{
        py: {
          xs: 7,
          md: 10,
        },

        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{
            xs: 5,
            md: 8,
          }}
          sx={{
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                fontWeight: 900,

                color: "#111827",

                lineHeight: 1.2,

                mb: 3,

                fontSize: {
                  xs: isRtl ? 46 : 36,
                  md: isRtl ? 62 : 52,
                },
              }}
            >
              {translate.contact.form.title}
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",

                lineHeight: 1.9,

                fontSize: isRtl ? 20 : 18,
              }}
            >
              {translate.contact.form.subtitle}
            </Typography>
          </Grid>

          {/* RIGHT */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                p: {
                  xs: 3,
                  md: 5,
                },

                borderRadius: "36px",

                background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",

                border: "1px solid rgba(226,232,240,0.7)",

                boxShadow: "0 25px 60px rgba(15,23,42,0.06)",
              }}
            >
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label={translate.contact.form.name}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label={translate.contact.form.phone}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    error={!!errors.phone}
                    helperText={errors.phone}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label={translate.contact.form.email}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    select
                    fullWidth
                    label={translate.contact.form.service}
                    value={formData.service}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        service: e.target.value,
                      }))
                    }
                    error={!!errors.service}
                    helperText={errors.service}
                  >
                    <MenuItem value="airport">
                      {translate.contact.form.services.airport}
                    </MenuItem>

                    <MenuItem value="city">
                      {translate.contact.form.services.city}
                    </MenuItem>

                    <MenuItem value="hourly">
                      {translate.contact.form.services.hourly}
                    </MenuItem>

                    <MenuItem value="vip">
                      {translate.contact.form.services.vip}
                    </MenuItem>

                    <MenuItem value="corporate">
                      {translate.contact.form.services.corporate}
                    </MenuItem>

                    <MenuItem value="events">
                      {translate.contact.form.services.events}
                    </MenuItem>
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    label={translate.contact.form.message}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    error={!!errors.message}
                    helperText={errors.message}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={loading}
                    sx={{
                      borderRadius: "999px",

                      py: 1.7,

                      textTransform: "none",

                      fontWeight: 700,

                      fontSize: 16,

                      background:
                        "linear-gradient(135deg, #1FB1F9 0%, #1697d2 100%)",

                      boxShadow: "0 15px 35px rgba(31,177,249,0.22)",
                    }}
                  >
                    {loading
                      ? translate.contact.form.sending
                      : translate.contact.form.send}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() =>
          setSnackbar((prev) => ({
            ...prev,
            open: false,
          }))
        }
      >
        <Alert severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactFormSection;
