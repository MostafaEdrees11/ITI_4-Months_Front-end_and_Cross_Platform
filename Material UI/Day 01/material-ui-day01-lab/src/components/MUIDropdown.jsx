import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useState } from "react";
import Typography from "@mui/material/Typography";

export function MUIDropdown() {
  const [framework, setFramework] = useState("REACT");
  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Framework
          </InputLabel>
          <NativeSelect
            onChange={(e) => {
              setFramework(e.target.value.toUpperCase());
            }}
            defaultValue={"react"}
            inputProps={{
              name: "Framework",
              id: "uncontrolled-native",
            }}
          >
            <option value={"react"}>React</option>
            <option value={"angular"}>Angular</option>
            <option value={"vue"}>Vue</option>
          </NativeSelect>
        </FormControl>
      </Box>
      <Typography variant="h5" gutterBottom color="error">
        {framework}
      </Typography>
      <hr />
    </>
  );
}
