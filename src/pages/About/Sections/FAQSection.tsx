import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const faqs = [
  {
    question: "How do I find my driver at the airport?",
    answer:
      "Your driver will be waiting in the arrival hall holding a sign with the SpeedLine logo and your name. You will also receive their contact details via WhatsApp 2 hours before pickup.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer:
      "We monitor all flight arrival times in real-time. We will automatically adjust your pickup time to match your actual landing time at no extra cost.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, you can cancel your booking up to 12 hours before the scheduled pickup time for a full refund.",
  },
  {
    question: "Are car seats available for children?",
    answer:
      "Absolutely. You can request infant, child, or booster seats during the booking process to ensure the safety of your little ones.",
  },
];

const FAQSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f3f7fb" }}>
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 5 } }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Frequently Asked Questions
          </Typography>
        </Box>

        {/* FAQ List */}
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            defaultExpanded={index === 0}
            disableGutters
            elevation={0}
            sx={{
              mb: 2,
              borderRadius: "12px",
              overflow: "hidden",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "#fff",
                px: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <QuestionMarkIcon sx={{ color: "#1FB1F9" }} />
                <Typography sx={{ fontWeight: 600 }}>{faq.question}</Typography>
              </Box>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                backgroundColor: "#fff",
                pt: 0,
                px: 2,
                pb: 2,
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FAQSection;
