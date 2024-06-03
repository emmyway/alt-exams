// Footer
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Container>
        <Box
          sx={{ textAlign: "center", marginTop: "50px", paddingBottom: "10px" }}
        >
          <Typography>
            3MTT Project &copy; 2024 <Link href="#">Emmanuel Nnaji</Link>
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
