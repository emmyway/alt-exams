// Error
import { Container, Box, Typography } from "@mui/material";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Error() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <Container>
        <Box
          sx={{
            margin: "0 auto",
            height: "50vh",
            padding: "100px 0",
            textAlign: "center",
          }}
        >
          <h1>Error 404!</h1>
          <Typography>Page note found.</Typography>
        </Box>
      </Container>

      {/* footer section  */}
      <Footer />
    </>
  );
}

export default Error;