import Chip from "@mui/material/Chip";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";

export function MUIChip() {
  const handleClick = () => {
    console.warn("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.error("You clicked the delete icon.");
  };
  return (
    <>
      <Chip label="Basic Chip" color="warning" sx={{ m: "8px" }} />
      <Chip
        label="Basic Chip"
        variant="outlined"
        color="error"
        sx={{ m: "8px" }}
      />
      <br />

      <Chip
        label="Log msg to console"
        variant="outlined"
        onClick={handleClick}
        color="primary"
        sx={{ m: "8px" }}
      />
      <br />
      <Chip
        label="Delete Chip"
        color="error"
        deleteIcon={<DeleteIcon />}
        onClick={handleClick}
        onDelete={handleDelete}
        sx={{ m: "8px" }}
      />
      <br />
      <Chip
        avatar={
          <Avatar
            alt="Mostafa Edrees"
            src="https://avatars.githubusercontent.com/u/108582267?s=96&v=4"
          />
        }
        label="Mostafa Edrees"
        variant="outlined"
        color="success"
      />
      <hr />
    </>
  );
}
