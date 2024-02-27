import { ImgIcon } from "./imgIcon"
import { Box } from '@primer/react'

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
        <ImgIcon path="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
        <ImgIcon path="https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png" />
        <ImgIcon path="https://cdn-icons-png.flaticon.com/512/732/732212.png" />
        <ImgIcon path="https://cdn.worldvectorlogo.com/logos/css-3.svg" />
        <ImgIcon path="https://www.svgrepo.com/show/353657/django-icon.svg" />
        <ImgIcon path="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png" />
        <ImgIcon path="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" />
        <ImgIcon path="https://www.svgrepo.com/show/35001/github.svg" />
      </Box>
    </Box>
  )
}