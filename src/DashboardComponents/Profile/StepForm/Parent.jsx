import React from "react";
import { Box, TextField, Button } from "@material-ui/core";

const Parent = ({ formData, setFormData, navigation, handleSubmit,msg }) => {
  const {
    fatherName,
    fatherContact,
    fatherEmail,
    fatherQualification,
    fatherOccupation,
    motherName,
    motherContact,
    motherEmail,
    motherQualification,
    motherOccupation,
  } = formData;

  return (
    <>
      <h3>Guardian/Parent</h3>
      <Box
        display="flex"
        justifyContent="space-between"
        style={{ marginTop: "40px" }}
      >
        <Box flexBasis="45%">
          <h5>Father</h5>
          <TextField
            label="Father Name"
            name="fatherName"
            value={fatherName}
            onChange={setFormData}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            size="small"
            fullWidth
          />
          <TextField
            label="Father Contact No."
            type="tel"
            value={fatherContact}
            variant="outlined"
            name="fatherContact"
            onChange={setFormData}
            size="small"
            fullWidth
            margin="normal"
            inputProps={{
              maxLength: "10",
            }}
          />
          <TextField
            label="Email"
            type="email"
            value={fatherEmail}
            variant="outlined"
            name="fatherEmail"
            onChange={setFormData}
            fullWidth
            size="small"
            margin="normal"
          />
          <TextField
            label="Father Qualification"
            name="fatherQualification"
            value={fatherQualification}
            onChange={setFormData}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            size="small"
            fullWidth
          />
          <TextField
            label="Father Occupation"
            value={fatherOccupation}
            name="fatherOccupation"
            onChange={setFormData}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            size="small"
            fullWidth
          />
        </Box>
        <Box flexBasis="45%">
          <h5>Mother</h5>
          <TextField
            label="Name"
            name="motherName"
            value={motherName}
            onChange={setFormData}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            size="small"
            fullWidth
          />
          <TextField
            label="Contact No."
            type="tel"
            value={motherContact}
            variant="outlined"
            name="motherContact"
            onChange={setFormData}
            size="small"
            fullWidth
            margin="normal"
            inputProps={{
              maxLength: "10",
            }}
          />
          <TextField
            label="Email"
            type="email"
            value={motherEmail}
            variant="outlined"
            name="motherEmail"
            onChange={setFormData}
            fullWidth
            size="small"
            margin="normal"
          />
          <TextField
            label="Qualification"
            name="motherQualification"
            value={motherQualification}
            onChange={setFormData}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            size="small"
            fullWidth
          />
          <TextField
            label="Occupation"
            value={motherOccupation}
            name="motherOccupation"
            onChange={setFormData}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            size="small"
            fullWidth
          />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button
          onClick={() => navigation.previous()}
          type="submit"
          color="primary"
          variant="outlined"
          style={{ marginTop: "20px", marginRight: "20px" }}
        >
          Previous
        </Button>
          <p style={{color:"green"}}>{msg}</p>
        <Button
          type="submit"
          color="primary"
          style={{ marginTop: "20px" }}
          variant="contained"
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Parent;
