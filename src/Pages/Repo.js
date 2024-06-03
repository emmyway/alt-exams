// Repo
import { Container, Box, Typography, Link } from "@mui/material";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Repo() {
  const [repoDetail, setRepoDetail] = useState([]);
  const { repoName } = useParams();

  useEffect(() => {
    const getRepoDetails = async () => {
      try {
        const mainRepo = await axios.get(
          `https://api.github.com/repos/emmyway/${repoName}`
        );
        setRepoDetail(mainRepo.data);
      } catch (error) {
        // console.log(error)
      }
    };

    // calls the getRepoDetails function
    getRepoDetails();
  }, [repoName]);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <Container>
        {repoDetail.length === 0 ? // <h2
        //   style={{
        //     margin: "0 auto",
        //     textAlign: "center",
        //     padding: "5rem",
        //   }}
        // >
        //   Loading . . .
        // </h2>
        null : (
          <>
            <Box
              sx={{
                margin: "0 auto",
                padding: "100px 0",
              }}
            >
              <h1>{repoDetail.name}</h1>

              <Typography>{repoDetail.description}</Typography>

              <Typography>Date Created: {repoDetail.created_at}</Typography>

              <Link href={repoDetail.html_url} sx={{ textDecoration: "none" }}>
                <GitHubIcon sx={{ fontSize: "medium", marginRight: "5px" }} />
                Repo Link
              </Link>

              <Link href={repoDetail.homepage} sx={{ textDecoration: "none" }}>
                <LinkIcon sx={{ fontSize: "medium", marginRight: "5px" }} />
                Live Website
              </Link>

              <Typography>{repoDetail.language}</Typography>
            </Box>

            {/* footer section  */}
            <Footer />
          </>
        )}
      </Container>
    </>
  );
}

export default Repo;
