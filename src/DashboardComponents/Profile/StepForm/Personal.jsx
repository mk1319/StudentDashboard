import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

const Personal = ({ formData, setFormData, navigation }) => {
  const {
    name,
    surname,
    gender,
    dob,
    contact,
    email,
    currentAddress,
    language,
  } = formData;
  console.log(contact);
  return (
    <Box maxWidth="50%" style={{ marginTop: "40px" }}>
      <h3>Personal</h3>
      <TextField
        required
        label="Name"
        name="name"
        value={name}
        onChange={setFormData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        size="small"
        fullWidth
      />
      <TextField
        required
        label="Surname"
        name="surname"
        value={surname}
        onChange={setFormData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        size="small"
        fullWidth
      />
      <FormControl
        size="small"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      >
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          label="gender"
          name="gender"
          labelId="gender-label"
          id="gender"
          value={gender}
          variant="outlined"
          onChange={setFormData}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
      <TextField
        required
        label="Birthday"
        type="date"
        value={dob}
        variant="outlined"
        name="dob"
        onChange={setFormData}
        margin="normal"
        size="small"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Contact"
        type="tel"
        required
        value={contact}
        variant="outlined"
        name="contact"
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
        required
        value={email}
        variant="outlined"
        name="email"
        onChange={setFormData}
        fullWidth
        size="small"
        margin="normal"
      />
      <TextField
        label="Current Address"
        type="textarea"
        required
        value={currentAddress}
        variant="outlined"
        name="currentAddress"
        onChange={setFormData}
        fullWidth
        multiline
        rows={4}
        rowsMax={4}
        size="small"
        margin="normal"
      />
      <TextField
        label="Language Known"
        type="text"
        required
        value={language}
        variant="outlined"
        name="language"
        onChange={setFormData}
        fullWidth
        size="small"
        margin="normal"
      />

      <Button
        onClick={() => navigation.next()}
        type="submit"
        color="primary"
        fullWidth
        variant="contained"
      >
        Next
      </Button>
    </Box>
  );
};

export default Personal;
