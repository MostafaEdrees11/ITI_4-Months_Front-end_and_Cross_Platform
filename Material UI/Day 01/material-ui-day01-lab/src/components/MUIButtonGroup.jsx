import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

export function MUIButtonGroup() {
  return (
    <>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button color="info">Option 1</Button>
        <Button color="error">Option 2</Button>
        <Button color="success">Option 3</Button>
      </ButtonGroup>
      <hr />
    </>
  );
}
