import { Typography } from "@mui/material";

export const Typograph = (props) => {
  const c = (
    <Typography
      variant={props.size}
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: { xs: "flex", md: "flex" },
        fontFamily: "sans-serif",
        fontWeight: 500,
        letterSpacing: ".1rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      {props.word}
    </Typography>
  );

  if (props.underline) {
    return (
      <Typography sx={{ textDecoration: "underline" }} display="inline">
        {c}
      </Typography>
    );
  }
  return c;
};
