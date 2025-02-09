import { Box, Text, Heading, Link } from "@primer/react";

export const NotFound = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "max-content",
        top: "35%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "grid",
        justifyContent: "center",
      }}
    >
      <Heading
        sx={{
          fontFamily: "M PLUS Code Latin, sans-serif",
          fontSize: "72px",
          textAlign: "center",
          mb: "20px",
          backgroundColor: "rgba(13, 17, 23, 0.6)",
          "@media screen and (max-width: 1012px)": {
            fontSize: "54px",
          },
          "@media screen and (max-width: 768px)": {
            fontSize: "44px",
          },
          "@media screen and (max-width: 500px)": {
            fontSize: "34px",
          },
        }}
      >
        Page Not Found
      </Heading>
      <Text
        sx={{
          fontFamily: "M PLUS Code Latin, sans-serif",
          fontSize: "24px",
          backgroundColor: "rgba(13, 17, 23, 0.6)",
          textAlign: "center",
          "@media screen and (max-width: 1012px)": {
            fontSize: "20px",
          },
          "@media screen and (max-width: 768px)": {
            fontSize: "16px",
          },
        }}
      >
        This page does not exist. Click{" "}
        <Link sx={{ textDecoration: "underline" }} href="/">
          here
        </Link>{" "}
        to return.
      </Text>
    </Box>
  );
};
