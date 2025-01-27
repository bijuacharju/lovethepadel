import { Box, HStack, Icon, Span, Stack, Text } from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@lovethepadel/router/routes.constants";
import { Link } from "react-router-dom";
import AppLogo from "@lovethepadel/assets/svgs/AppLogo.svg?react";
import { Button } from "@lovethepadel/components/ui/button";
import { Checkbox } from "@lovethepadel/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ISigninForm } from "@lovethepadel/@types/pages/signin";
import InputField from "@lovethepadel/components/InputField";
import { useEffect, useState } from "react";

const defaultValues: ISigninForm = {
  email: "",
  password: "",
};

const schema: yup.ObjectSchema<ISigninForm> = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required"),
  password: yup.string().required("Password is required"),
});

const Signin = () => {
  const [remember, setRemember] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = () => {};

  useEffect(() => {
    setRemember(localStorage.getItem("remember_me") === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("remember_me", remember?.toString());
  }, [remember]);

  return (
    <Stack
      flex={1}
      justifyContent={"space-between"}
      width={{ base: "full", sm: "460px" }}
    >
      <Box></Box>
      <Stack gap={10}>
        <HStack gap={2}>
          <Icon fontSize={{ base: "48px", md: "60px" }}>
            <AppLogo />
          </Icon>
          <Text
            textStyle={"brandName"}
            color="primary.500"
            fontSize={{ base: "14px", md: "20px" }}
          >
            Love the padel
          </Text>
        </HStack>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Stack gap={6}>
            <Stack gap={1.5}>
              <Text textStyle={"cardTitle"} fontSize={"24px"}>
                Login Screen
              </Text>
              <Text textStyle={"paragraph_large"} color={"gray.normal"}>
                Please enter email and password to login
              </Text>
            </Stack>
            <Stack>
              <InputField
                control={control}
                name={"email"}
                label={"Email"}
                placeholder={"Enter Email Address"}
              />
              <InputField
                type={"password"}
                control={control}
                name={"password"}
                label={"Password"}
                placeholder={"Enter Password"}
              />
            </Stack>
            <HStack justifyContent={"space-between"}>
              <Checkbox
                _checked={{
                  "& div.chakra-checkbox__control": {
                    background: "primary.500",
                    borderColor: "primary.500",
                  },
                }}
                css={{
                  "& div.chakra-checkbox__control": {
                    height: "18px",
                    width: "18px",
                  },
                }}
                size={"md"}
                cursor={"pointer"}
                checked={remember}
                onCheckedChange={(e) => {
                  setRemember(!!e.checked);
                }}
              >
                <Span fontSize={"14px"} fontWeight={500}>
                  Remember Me
                </Span>
              </Checkbox>
              <Link to={NAVIGATION_ROUTES.FORGOT_PASSWORD}>
                <Span
                  fontSize={"14px"}
                  fontWeight={"500"}
                  color={"primary.500"}
                  lineHeight={"100%"}
                >
                  Forgot Password?
                </Span>
              </Link>
            </HStack>
            <Button type={"submit"} variant={"solid"}>
              Signin
            </Button>
          </Stack>
        </form>
      </Stack>
      <Text textStyle={"paragraph_large"} textAlign={"center"}>
        Don&rsquo;t have an account?{" "}
        <Link to={NAVIGATION_ROUTES.SIGNUP}>
          <Span fontWeight={"700"}>Signup</Span>
        </Link>
      </Text>
    </Stack>
  );
};

export default Signin;
