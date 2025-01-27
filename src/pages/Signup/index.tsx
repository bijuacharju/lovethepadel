import { Box, HStack, Icon, Span, Stack, Text } from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@lovethepadel/router/routes.constants";
import { Link } from "react-router-dom";
import AppLogo from "@lovethepadel/assets/svgs/AppLogo.svg?react";
import { Button } from "@lovethepadel/components/ui/button";
import { ISignupForm } from "@lovethepadel/@types/pages/signup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "@lovethepadel/components/InputField";
import SelectField from "@lovethepadel/components/SelectField";

const defaultValues: ISignupForm = {
  firstname: "",
  lastname: "",
  email: "",
  phoneNumber: "",
  gender: "",
  playFrequency: "",
  padelLevel: "",
};

const schema: yup.ObjectSchema<ISignupForm> = yup.object({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  gender: yup.string().required("Gender is required"),
  playFrequency: yup.string().required("Play interval is required"),
  padelLevel: yup.string().required("Level is required"),
});

const Signup = () => {
  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = () => {};

  return (
    <Stack flex={1} justifyContent={"space-between"} gap={5}>
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
          <Stack gap={6} width={"460px"}>
            <Stack gap={1.5}>
              <Text textStyle={"cardTitle"} fontSize={"24px"}>
                Registration Screen
              </Text>
              <Text textStyle={"paragraph_large"} color={"gray.normal"}>
                Please fill up the following information to proceed.
              </Text>
            </Stack>
            <Stack>
              <HStack gap={4}>
                <InputField
                  control={control}
                  name={"firstname"}
                  label={"First Name"}
                  placeholder={"Enter First Name"}
                />
                <InputField
                  control={control}
                  name={"lastname"}
                  label={"lastName"}
                  placeholder={"Enter Last Name"}
                />
              </HStack>
              <InputField
                control={control}
                name={"email"}
                label={"Email"}
                placeholder={"Enter Email Address"}
              />
              <InputField
                control={control}
                name={"phoneNumber"}
                label={"Phone Number"}
                placeholder={"Enter Phone Number"}
              />
              <SelectField
                control={control}
                name="gender"
                label="Gender"
                placeholder="Select Gender"
                selectOptions={[
                  { label: "Male", value: "MALE" },
                  { label: "Female", value: "FEMALE" },
                  { label: "Others", value: "OTHERS" },
                ]}
                required
              />
              <SelectField
                control={control}
                name="playFrequency"
                label="How Often Do You Play?"
                placeholder="Select"
                selectOptions={[
                  { label: "Daily", value: "DAILY" },
                  { label: "1-2 times per week", value: "1-2 times per week" },
                  {
                    label: "1-2 times per month",
                    value: "1-2 times per month",
                  },
                ]}
                required
              />
              <SelectField
                control={control}
                name="padelLevel"
                label="What level are you at?"
                placeholder="Select your level"
                selectOptions={[
                  { label: "Beginner", value: "C" },
                  { label: "Intermediate", value: "B" },
                  { label: "Advanced", value: "A" },
                ]}
                required
              />
            </Stack>
            <Button type={"submit"} variant={"solid"}>
              Sign Up
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

export default Signup;
