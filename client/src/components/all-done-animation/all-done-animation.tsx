import Lottie from "react-lottie";
import animationData from "../../assets/animation-data.json";
import Box from "@mui/material/Box";

const AllDoneAnimation = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box
      id="all-done-animation"
      sx={{ marginTop: (theme) => theme.spacing(10), }}
    >
      <Lottie options={defaultOptions} height={350} width={400} />
    </Box>
  );
};

export default AllDoneAnimation;
