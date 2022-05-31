import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ShowcaseCard from "./ShowcaseCard";
import { GODFATHER } from "../../../../resources/constants";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <Fade>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "10vh",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginRight: "20px",
              maxWidth: "50%",
            }}
          >
            <Typography color="#fff" fontSize="50px">
              About
            </Typography>
            <Typography color="#fff" fontSize="20px" mt="10px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus minima eligendi fuga veniam hic inventore iusto odit
              impedit. Delectus commodi iste, natus suscipit, molestiae
              recusandae iusto nihil aperiam, optio veniam provident. Deleniti
              excepturi quis, nesciunt perferendis veniam dolores at laudantium
              vitae voluptates doloremque commodi ut. Impedit dolorum itaque
              repellat debitis.
            </Typography>
          </Box>
          <ShowcaseCard movie={GODFATHER} />
        </Box>
      </Container>
    </Fade>
  );
};

export default About;
