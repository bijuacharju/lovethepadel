import { Box, HStack, Span, Stack, Text } from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@lovethepadel/router/routes.constants";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@lovethepadel/components/ui/button";
import { ISignupForm } from "@lovethepadel/@types/pages/signup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "@lovethepadel/components/InputField";
import SelectField from "@lovethepadel/components/SelectField";
import ReactPlayer from "react-player";
import LogoAnimation from "@lovethepadel/assets/videos/logoAnimation.webm";
import { useSignup } from "@lovethepadel/service/signup";
import { countries } from "@lovethepadel/utils/countryList";

const defaultValues: ISignupForm = {
  firstname: "",
  lastname: "",
  email: "",
  country: "ARE",
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
  country: yup.string().required("Country is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  gender: yup.string().required("Gender is required"),
  playFrequency: yup.string().required("Play interval is required"),
  padelLevel: yup.string().required("Level is required"),
});

const Signup = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { mutateAsync } = useSignup();

  const onSubmitHandler = (data: ISignupForm) => {
    mutateAsync(data).then(() => {
      navigate(NAVIGATION_ROUTES.HOME);
    });
  };

  return (
    <Stack
      flex={1}
      justifyContent={"space-between"}
      gap={5}
      width={{ base: "full", sm: "460px" }}
    >
      <Box></Box>
      <Stack gap={10}>
        <HStack gap={2}>
          <Box
            width={{ base: "48px" }}
            height={{ base: "48px" }}
            onClick={() => navigate(NAVIGATION_ROUTES.HOME)}
            cursor={"pointer"}
          >
            <ReactPlayer
              loop
              muted
              playing
              width={"100%"}
              height={"100%"}
              url={LogoAnimation}
            />
          </Box>
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
                Registration Screen
              </Text>
              <Text textStyle={"paragraph_large"} color={"gray.normal"}>
                Please fill up the following information to proceed.
              </Text>
            </Stack>
            <Stack>
              <HStack gap={4} flexDirection={{ base: "column", sm: "row" }}>
                <InputField
                  control={control}
                  name={"firstname"}
                  label={"First Name"}
                  placeholder={"Enter First Name"}
                />
                <InputField
                  control={control}
                  name={"lastname"}
                  label={"Last Name"}
                  placeholder={"Enter Last Name"}
                />
              </HStack>
              <InputField
                control={control}
                name={"email"}
                label={"Email"}
                placeholder={"Enter Email Address"}
              />
              <HStack gap={4} flexDirection={{ base: "column", sm: "row" }}>
                <SelectField
                  control={control}
                  name="country"
                  label="Country"
                  placeholder="Select Country"
                  selectOptions={countries.map((x) => {
                    return { label: x.name, value: x.value };
                  })}
                  required
                />
                <InputField
                  control={control}
                  name={"phoneNumber"}
                  label={"Phone Number"}
                  placeholder={"Enter Phone Number"}
                />
              </HStack>
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
                  { label: "0-1 times per week", value: "0-1 times per week" },
                  { label: "1-2 times per week", value: "1-2 times per week" },
                  { label: "3-4 times per week", value: "3-4 times per week" },
                  { label: "4+ times per week", value: "4+ times per week" },
                ]}
                required
              />
              <SelectField
                control={control}
                name="padelLevel"
                label="What level are you at?"
                placeholder="Select your level"
                selectOptions={[
                  { label: "Beginner", value: "Beginner" },
                  { label: "D", value: "D" },
                  { label: "C-", value: "C-" },
                  { label: "C", value: "C" },
                  { label: "C+", value: "C+" },
                  { label: "B-", value: "B-" },
                  { label: "B", value: "B" },
                  { label: "Don't know", value: "Don't know" },
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
