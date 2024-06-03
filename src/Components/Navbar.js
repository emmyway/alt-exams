// Navbar
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "5px",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              fontStyle: "none",
              color: "#1976d2",
              fontSize: "50px",
            }}
            to="/"
          >
            <Typography sx={{ fontWeight: "bolder" }}>REPOLIST</Typography>
          </Link>
          <Box
            sx={{ display: "flex", columnGap: "20px", alignItems: "center" }}
          >
            <Typography>
              <Link to="https://x.com/realreach_nnaji" style={{ color: "black" }}>
                {<XIcon />}
              </Link>
            </Typography>

            <Typography>
              <Link
                to="https://github.com/emmyway"
                style={{ color: "black" }}
              >
                {<GitHubIcon />}
              </Link>
            </Typography>

            <Typography>
              <Link
                to="https://www.linkedin.com/in/emmanuel-nnaji"
                style={{ color: "black" }}
              >
                {<LinkedInIcon />}
              </Link>
            </Typography>

            <Button variant="contained">Create Repo</Button>
          </Box>
        </Box>
        <hr />
      </Container>
    </nav>
  );
}

export default Navbar;
