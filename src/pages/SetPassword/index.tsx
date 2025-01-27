import { Box, HStack, Icon, Span, Stack, Text } from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@lovethepadel/router/routes.constants";
import { Link } from "react-router-dom";
import AppLogo from "@lovethepadel/assets/svgs/AppLogo.svg?react";
import { Button } from "@lovethepadel/components/ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "@lovethepadel/components/InputField";
import { ISetPasswordForm } from "@lovethepadel/@types/pages/setPassword";

const defaultValues: ISetPasswordForm = {
  password: "",
  confirmPassword: "",
};

const schema: yup.ObjectSchema<ISetPasswordForm> = yup.object({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /^(?=.*[`~!@#$%^&*()\-_+={}[\]|\\:;"'<>,./?]).*$/,
      "Password must contain at least one special character"
    ),
  confirmPassword: yup.string().required("Confirm password is required"),
});

const SetPassword = () => {
  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = () => {};

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
                Set Password
              </Text>
              <Text
                textStyle={"paragraph_large"}
                color={"gray.normal"}
                lineHeight={"150%"}
              >
                Please fill up the following information to proceed.
              </Text>
            </Stack>
            <Stack>
              <InputField
                type={"password"}
                control={control}
                name={"password"}
                label={"Password"}
                placeholder={"Enter Password"}
              />
              <InputField
                type={"password"}
                control={control}
                name={"confirmPassword"}
                label={"Confirm Password"}
                placeholder={"Enter Password"}
              />
            </Stack>
            <Button type={"submit"} variant={"solid"}>
              Proceed
            </Button>
          </Stack>
        </form>
      </Stack>
      <Text textStyle={"paragraph_large"} textAlign={"center"}>
        Already have an account?{" "}
        <Link to={NAVIGATION_ROUTES.SIGNIN}>
          <Span fontWeight={"700"}>Signin</Span>
        </Link>
      </Text>
    </Stack>
  );
};

export default SetPassword;
