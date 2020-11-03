import React from "react";
import { Box, Button, TextField } from "@material-ui/core";

const Academics = ({ formData, setFormData, navigation }) => {
  const {
    currentStd,
    currentInstitution,
    prevPercentage,
    prevInstitution,
    stream,
    hobbies,
  } = formData;
  return (
    <Box maxWidth="50%" style={{ marginTop: "40px" }}>
      <h3>Academics</h3>
      <TextField
        required
        label="Current Standard"
        name="currentStd"
        value={currentStd}
        onChange={setFormData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        size="small"
        fullWidth
        placeholder="XI, X, FYJC, SYJC"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        required
        label="Current Institution Name"
        name="currentInstitution"
        value={currentInstitution}
        onChange={setFormData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        size="small"
        fullWidth
      />
      <TextField
        label="Stream"
        name="stream"
        value={stream}
        onChange={setFormData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        size="small"
        fullWidth
      />
      <TextField
        label="Previous Institution Name"
        name="prevInstitution"
        value={prevInstitution}
        onChange={setFormData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        size="small"
        fullWidth
      />
      <TextField
        type="number"
        label="Previous Institution Percentage"
        name="prevPercentage"
        value={prevPercentage}
        onChange={setFormData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        size="small"
        fullWidth
        inputProps={{
          max: "100",
          min: "1",
          maxLength: "3",
        }}
      />
      <TextField
        label="Hobbies/Sports"
        type="textarea"
        value={hobbies}
        variant="outlined"
        name="hobbies"
        onChange={setFormData}
        fullWidth
        multiline
        rows={4}
        rowsMax={4}
        size="small"
        margin="normal"
      />
      <Button
        onClick={() => navigation.previous()}
        type="submit"
        color="primary"
        variant="outlined"
        style={{ marginTop: "20px", marginRight: "20px", width: "40%" }}
      >
        Previous
      </Button>
      <Button
        onClick={() => navigation.next()}
        type="submit"
        color="primary"
        style={{ width: "40%", marginTop: "20px" }}
        variant="contained"
      >
        Next
      </Button>
    </Box>
  );
};

export default Academics;
