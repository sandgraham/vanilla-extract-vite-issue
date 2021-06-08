import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const pretty = style({
  alignItems: "center",
  backgroundColor: theme.color.brand,
  border: 0,
  borderRadius: "6px",
  color: "white",
  display: "inline-flex",
  fontFamily: "system-ui",
  fontSize: "1rem",
  height: "2.25rem",
  justifyContent: "center",
  paddingLeft: "1rem",
  paddingRight: "1rem",
});
