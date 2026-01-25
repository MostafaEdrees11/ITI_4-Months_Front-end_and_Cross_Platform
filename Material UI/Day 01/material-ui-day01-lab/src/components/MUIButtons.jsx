import Button from "@mui/material/Button";
export function MUIButton() {
  return (
    <>
      <Button variant="contained" color="warning" sx={{ mx: "8px" }}>
        Click Me
      </Button>
      <Button variant="outlined" color="success" sx={{ mx: "8px" }}>
        Outlined
      </Button>
      <Button variant="text" color="error" sx={{ mx: "8px" }}>
        Text
      </Button>
      <hr />
    </>
  );
}
