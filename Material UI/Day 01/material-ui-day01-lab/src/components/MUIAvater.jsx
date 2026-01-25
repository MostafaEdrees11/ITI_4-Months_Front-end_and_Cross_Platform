import Avatar from "@mui/material/Avatar";
import AssignmentIcon from "@mui/icons-material/Assignment";
export function MUIAvater() {
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: "blue",
        mb: "8px",
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <>
      <Avatar
        alt="Mostafa Edrees"
        src="https://avatars.githubusercontent.com/u/108582267?v=4"
        sx={{ mb: "8px" }}
      />
      <Avatar {...stringAvatar("Mostafa Edrees")} />
      <Avatar sx={{ bgcolor: "green", mb: "8px" }} variant="square">
        <AssignmentIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: "red", mb: "8px" }} variant="rounded">
        M
      </Avatar>
      <hr />
    </>
  );
}
