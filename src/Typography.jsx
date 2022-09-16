import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTypography = styled(Typography)(({ theme }) => ({
  "&.MuiButton-root": {
    borderRadius: 12,
    fontSize: 18,
    lineHeight: "19px",
    fontWeight: 500,
  },
}));

export default StyledTypography;
