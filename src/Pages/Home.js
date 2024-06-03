// Home page
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Input,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { parseLinkHeader } from "@web3-storage/parse-link-header";

function Home() {
  // manage my states
  const [loading, setLoading] = useState(false);
  const [repoList, setRepoList] = useState([]);
  const [pageNo, setPageNo] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [parsedLinkResult, setParsedLinkResult] = useState();

  // fetch my repo list using useEffect
  const getRepo = async () => {
    // set page to loading ... while waiting for the response
    setLoading(true);

    // get the data using fetch or axios method
    try {
      let repo = await axios.get(
        `https://api.github.com/users/emmyway/repos?per_page=12&page=${currentPage}`
      );
      setRepoList(repo.data);

      // Parse the header link to get access to the pagination
      let parsedHeaderLink = parseLinkHeader(repo.headers.link);
      setParsedLinkResult(parsedHeaderLink);

      if (parsedHeaderLink.next) {
        setPageNo(parsedHeaderLink.next.page);
      }
    } catch (error) {
      // console.log(error.message);
    }

    // after getting the response
    setLoading(false);
  };

  useEffect(() => {
    getRepo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  // handle pagination buttons for next & previous
  const nextButton = () => {
    if (currentPage < pageNo) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousButton = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* contents  */}
      <section sx={{ backgroundColor: "wheat" }}>
        <Container
          sx={{ margin: "0 auto", backgroundColor: "smoke", paddingTop: "30" }}
        >
          <Box
            sx={{
              margin: "25px 0 50px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Typography variant="h4">Emmanuel Nnaji</Typography>
              <Typography>
                GitHub Public repository - This is a web application that lists
                all my public repository.
              </Typography>
            </div>
            <Input variant="filled" placeholder="Search" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "20px",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            {loading ? (
              <h2
                style={{
                  margin: "0 auto",
                  textAlign: "center",
                  padding: "5rem",
                }}
              >
                Loading . . .
              </h2>
            ) : (
              repoList.map((repo, index) => (
                <Card sx={{ width: 345 }} key={index}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {repo.name}
                      </Typography>
                      <Link
                        href={repo.html_url}
                        sx={{ textDecoration: "none" }}
                      >
                        <GitHubIcon
                          sx={{ fontSize: "medium", marginRight: "5px" }}
                        />
                        View repo on GitHub
                      </Link>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link
                        href={`/repo/${repo.name}`}
                        sx={{ textDecoration: "none", color: "#1976d2" }}
                      >
                        View
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              ))
            )}
          </Box>
          {loading === true || repoList.length === 0 ? null : (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                  alignItems: "center",
                  paddingTop: "50px",
                }}
              >
                {parsedLinkResult.prev ? (
                  <Button variant="contained" onClick={previousButton}>
                    Previous
                  </Button>
                ) : (
                  <Button variant="contained" disabled>
                    Previous
                  </Button>
                )}
                {parsedLinkResult.next ? (
                  <Button variant="contained" onClick={nextButton}>
                    Next
                  </Button>
                ) : (
                  <Button variant="contained" disabled>
                    Next
                  </Button>
                )}
              </Box>

              {/* footer section  */}
              <Footer />
            </>
          )}
        </Container>
      </section>
    </>
  );
}

export default Home;
