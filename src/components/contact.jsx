// import React from "react";
// import { Card, CardContent, Typography, IconButton } from "@mui/material";
// import {
//   Email,
//   Phone,
//   LocationOn,
//   LocationOnOutlined,
// } from "@mui/icons-material";

// function ContactCard(props) {
//   return (
//     <div className="contactDiv">
//       <div className="contact-card">
//         <div className="contact-card-header">
//           <h2>Get in Touch</h2>
//           <IconButton>
//             <Email />{" "}
//           </IconButton>
//           <div>Example@gmail.com</div>
//           <div />
//         </div>

  
//       </div>
//     </div>
//   );
// }

// export default ContactCard;

import React from "react";
import { Box, Card, CardContent, Typography, TextField, Button } from "@mui/material";
import { Email, Phone, LocationOn, AccessTime } from "@mui/icons-material";

const ContactPage = () => {
  return (
    <Box className="contact-page-container">
      <Card className="contact-details-card">
        <CardContent>
          <Typography variant="h4" className="section-title">
            Contact Information
          </Typography>
          <div className="contact-info">
            <LocationOn className="contact-icon" />
            <Typography variant="body1" className="contact-text">
              123 Food St, Flavor Town, FT 56789
            </Typography>
          </div>
          <div className="contact-info">
            <Phone className="contact-icon" />
            <Typography variant="body1" className="contact-text">
              +1 (555) 123-4567
            </Typography>
          </div>
          <div className="contact-info">
            <Email className="contact-icon" />
            <Typography variant="body1" className="contact-text">
              info@flavortownrestaurant.com
            </Typography>
          </div>
          <div className="contact-info">
            <AccessTime className="contact-icon" />
            <Typography variant="body1" className="contact-text">
              Opening Hours: 9:00 AM - 10:00 PM
            </Typography>
          </div>
        </CardContent>
      </Card>

      <Card className="contact-form-card">
        <CardContent>
          <Typography variant="h4" className="section-title">
            Get in Touch
          </Typography>
          <form className="contact-form">
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              required
              className="form-field"
            />
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              className="form-field"
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              required
              className="form-field"
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              required
              className="form-field"
            />
            <Button variant="contained" className="submit-button">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContactPage;

