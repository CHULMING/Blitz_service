import { Typography } from "@mui/material";

export const Typograph = (props) => {
  const c = (
    <Typography
      variant={props.size}
      noWrap
      sx={{
        mr: 2,
        display: { xs: "flex", md: "flex" },
        fontFamily: "sans-serif",
        fontWeight: 500,
        letterSpacing: ".1rem",
        color: "inherit",
        textDecoration: props.underline ? "underline" : "none",
      }}
    >
      {props.word}
    </Typography>
  );
  return c;
};
