import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import Typography from "@mui/material/Typography";

export function MUIRadioGroup() {
  const [gender, setGender] = useState("Male");

  const handleChange = (e) => {
    e.target.value == "male" ? setGender("Male") : setGender("Female");
  };
  return (
    <>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="male"
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>
      <Typography variant="h4" gutterBottom color="primary">
        {gender}
      </Typography>
      <hr />
    </>
  );
}
