import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Question: What are the accepted payment methods?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Answer: We accept payments via credit cards 
          (Visa, Mastercard, American Express), PayPal, and bank transfers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Question: How long does shipping usually take?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Answer: Shipping times vary depending on the destination. 
          Typically, domestic orders are delivered within 3-5 business days, while international orders can take 7-14 business days.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Question: Can I return or exchange an item?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Answer: Yes, we offer a hassle-free return and exchange policy. If you're not satisfied with your purchase, 
          you can return it within 30 days for a refund or exchange.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Question: How can I track my order?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Answer: Once your order is shipped, we'll send you a tracking number via email. 
          You can use this tracking number to monitor the progress of your 
          shipment on our website or the shipping carrier's website.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Question: Do you offer discounts for bulk orders?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Answer: Yes, we provide discounts for bulk orders. Please contact our sales team with the details of your order,
          and they will assist you with pricing and any available discounts.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;