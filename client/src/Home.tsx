import { styled } from "styled-components";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Country from "./Country";
import Steper from "./Stepper";
import {Button} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.5rem;
`;

const Input = styled.input``;

const Select = styled.select``;
const Option = styled.option``;
const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding: 5rem;
  .inputs {
    width: 40rem;
    height: 4rem;

    .input {
      width: 100%;
      height: 100%;
      font-size: 1.2rem;
      padding: 1rem 2rem;
      outline: none;
      border: none;
      border: 1px solid #34343457;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
`;
const Div = styled.div``;

const Home = () => {
    const navigate=useNavigate();
  const [govt, setGovt] = useState("");
  const handleInput = (e: any) => {
    e.preventDefault();
    setGovt(e.target.value);
  };

  const handleSubmit=()=>{
navigate("/secondStep")
  }
  return (
    <Container>
      <Div>
        <Typography variant="h3">Personal Details</Typography>
      </Div>
      <Div className="main-box">
        <Item>
          <Label htmlFor="username">
            Username
            <Box className="inputs">
              <Input
                className="input"
                type="text"
                name="username"
                id="username"
              ></Input>
            </Box>
          </Label>
         

          <Label htmlFor="mobile">
            Mobile
            <Box className="inputs">
              <Input
                className="input"
                type="text"
                name="mobile"
                id="mobiule"
              ></Input>
            </Box>
          </Label>

          <Label htmlFor="dob">
            Date of Birth or Age
            <Box className="inputs">
              <Input
                className="input"
                type="number"
                name="dob"
                id="dob"
              ></Input>
            </Box>
          </Label>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Label htmlFor="sex">Sex</Label>

            <Select
              className="inputs"
              id="sex"
              name="sex"
              style={{ border: "1px solid #34343457", borderRadius: "0.5rem" }}
            >
              <Option
                value={"male"}
                className="input"
                style={{ fontSize: "1.2rem" }}
              >
                male
              </Option>
              <Option
                value={"female"}
                className="input"
                style={{ fontSize: "1.2rem" }}
              >
                female
              </Option>
              <Option
                value={"others"}
                className="input"
                style={{ fontSize: "1.2rem" }}
              >
                others
              </Option>
            </Select>
          </Box>
          
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Label htmlFor="govtId">Govt issued Id</Label>

              <Select
                className="inputs"
                id="govtId"
                name="govtId"
                style={{
                  border: "1px solid #34343457",
                  borderRadius: "0.5rem",
                }}
                onClick={handleInput}
              >
                <Option
                  value={"adhaar"}
                  className="input"
                  style={{ fontSize: "1.2rem" }}
                >
                  Adhaar
                </Option>
                <Option
                  value={"pan"}
                  className="input"
                  style={{ fontSize: "1.2rem" }}
                >
                  Pan
                </Option>
              </Select>
            </Box>
            {govt === "adhaar" ? (
              <Box sx={{ marginTop: "2.2rem" }}>
                <Box className="inputs">
                  <Input
                    className="input"
                    type="number"
                    name="govtId"
                    id="govtId"
                    placeholder="Enter Adhaar Number"
                  ></Input>
                </Box>
              </Box>
            ) : (
              <Box sx={{ marginTop: "2.2rem" }}>
                <Box className="inputs">
                  <Input
                    className="input"
                    type="text"
                    name="govtId"
                    id="govtId"
                    placeholder="PAN"
                  ></Input>
                </Box>
              </Box>
            )}
       
        </Item>
      </Div>
      <Div>
        <Button variant="contained" sx={{fontSize:"1.5rem",width:"25rem"}} onClick={handleSubmit}>Submit</Button>
      </Div>
  
        <Steper/>
  
    </Container>
  );
};

export default Home;
