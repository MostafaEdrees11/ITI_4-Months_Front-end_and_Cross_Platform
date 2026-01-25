import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export function MUIFAB() {
  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        size="large"
        sx={{ ":hover": { bgcolor: "red" } }}
      >
        <AddIcon />
      </Fab>
      <hr />
    </>
  );
}
