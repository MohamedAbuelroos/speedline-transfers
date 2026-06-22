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

const ContactFormSection = () => {
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
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
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
        message: "Message sent successfully.",
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
        message: "Failed to send message.",
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
                  xs: 36,
                  md: 52,
                },
              }}
            >
              Send Us a Message
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",

                lineHeight: 1.9,
              }}
            >
              Have questions about our services or need a custom transportation
              solution? Our team is here to help you anytime.
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
                    label="Full Name"
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
                    label="Phone Number"
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
                    label="Email Address"
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
                    label="Service Type"
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
                    <MenuItem value="airport">Airport Transfer</MenuItem>

                    <MenuItem value="city">City Transfer</MenuItem>

                    <MenuItem value="hourly">Hourly Chauffeur</MenuItem>

                    <MenuItem value="vip">VIP Service</MenuItem>
                    <MenuItem value="corporate">Corporate Travel</MenuItem>
                    <MenuItem value="events">Event Transportation</MenuItem>
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    label="Message"
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
                    {loading ? "Sending..." : "Send Message"}
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
