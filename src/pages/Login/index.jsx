import {
  Avatar,
  Box,
  Button,
  Card,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import background from "../../assets/login_page_background.jpg";
import icon from "../../assets/icon.jpg";
import styled from "styled-components";
import { styled as styledMaterial } from "@mui/material/styles";

const Wrapper = styled(Box)`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: -1;
  }
`;

const Container = styled(Card)`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 1rem !important;
  padding: 2rem 1rem;

  // Responsive
  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 425px) {
    width: 75%;
  }
`;

const FormLogin = styled(Stack)`
  margin-top: 2rem;
  width: 100%;
`;

const ForgotPassword = styled(Stack)`
  margin-top: 1rem;
  width: 100%;
  cursor: pointer;
  text-align: right;
  color: #26577c;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styledMaterial(Button)({
  backgroundColor: "#e55604",
  height: "50px",
  borderRadius: "1rem",

  ":hover": {
    backgroundColor: "#e55604",
    opacity: "0.9",
    scale: "1.01",
  },
});

const CustomTextFeild = styled(TextField)`
  :hover fieldset {
    border-color: #2196f3 !important;
  }
`;

const Login = () => {
  const [username, setUsername] = React.useState("");
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <Wrapper>
      <Container>
        <Box sx={{ width: "100%" }}>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
            width={"100%"}
          >
            <Avatar sx={{ width: 80, height: 80 }} src={icon} />
            <Box>
              <Typography variant="h4" fontWeight="bold">
                The Duck
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                Hospital
              </Typography>
            </Box>
          </Stack>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginTop: "2rem", fontSize: "2rem" }}
          >
            Đăng nhập
          </Typography>
          <Typography variant="h5">Chào mừng bạn đã quay trở lại</Typography>
        </Box>
        <FormLogin spacing={2}>
          <CustomTextFeild
            label="Tên đăng nhập"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            variant="outlined"
            fullWidth
          />
          <CustomTextFeild
            label="Mật khẩu"
            variant="outlined"
            type="password"
            fullWidth
          />
          <ForgotPassword>Bạn quên mật khẩu ?</ForgotPassword>
          <LoginButton variant="contained" fullWidth>
            Đăng nhập
          </LoginButton>
        </FormLogin>
      </Container>
    </Wrapper>
  );
};

export default Login;
