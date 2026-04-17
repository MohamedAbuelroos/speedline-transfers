import { Box, Container, Typography, Grid, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const testimonials = [
  {
    name: "Ahmed Khaled",
    comment:
      "Excellent service! The driver was professional and arrived early. Highly recommended.",
  },
  {
    name: "Sarah Johnson",
    comment:
      "Smooth and comfortable ride from the airport. Booking process was very easy.",
  },
  {
    name: "Mohamed Ali",
    comment:
      "Very reliable service. Clean cars and friendly drivers. Will use again.",
  },
  {
    name: "David Smith",
    comment: "Great experience overall. Transparent pricing and no surprises.",
  },
];

const TestimonialsSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f9fafb" }}>
      <Container>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            What Our Clients Say
          </Typography>

          <Typography color="text.secondary">
            Trusted by local executives and international travelers since our
            expansion from Egypt to Saudi Arabia.
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={3}>
          {testimonials.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  p: 3,
                  height: "100%",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Rating */}
                <Box sx={{ display: "flex", mb: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} sx={{ color: "secondary.main", fontSize: 18 }} />
                  ))}
                </Box>

                {/* Comment */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  {item.comment}
                </Typography>

                {/* User */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2 }}>
                  <Avatar>{item.name.charAt(0)}</Avatar>

                  <Typography sx={{ fontWeight: 600 }} variant="body2">
                    {item.name}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
