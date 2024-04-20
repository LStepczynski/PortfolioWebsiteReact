import { ImgIcon } from "./imgIcon"
import { Box } from '@primer/react'

import { images } from "./animation/icons"

export const IconDisplay = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "center",
      }}
    >
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          '@media screen and (max-width: 1012px)': {
            width: "75%",
          },
          '@media screen and (max-width: 768px)': {
            width: "80%",
          },
        }}
      >
        <ImgIcon path={images.react} />
        <ImgIcon path={images.javascript} />
        <ImgIcon path={images.html} />
        <ImgIcon path={images.css} />
        <ImgIcon path={images.django} />
        <ImgIcon path={images.python} />
        <ImgIcon path={images.nodejs} />
        <ImgIcon path={images.github} />
      </Box>
    </Box>
  )
}