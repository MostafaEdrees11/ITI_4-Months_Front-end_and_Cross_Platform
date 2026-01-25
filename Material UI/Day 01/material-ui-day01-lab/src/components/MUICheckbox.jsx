import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export function MUICheckbox() {
  const handleChange = (event) => {
    console.warn(event.target.checked ? "Checked" : "Unchecked");
  };

  return (
    <>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Accept Terms and Conditions"
        onChange={handleChange}
      />
      <FormControlLabel control={<Checkbox />} label="UnChecked" />

      <hr />
    </>
  );
}
