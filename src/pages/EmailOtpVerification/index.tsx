import { Box, HStack, Icon, Image, Span, Stack, Text } from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@lovethepadel/router/routes.constants";
import { Link } from "react-router-dom";
import AppLogo from "@lovethepadel/assets/svgs/AppLogo.svg?react";
import EmailImage from "@lovethepadel/assets/images/EmailImage.png";
import { Button } from "@lovethepadel/components/ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "@lovethepadel/components/InputField";
import { IEmailOtpVerificationForm } from "@lovethepadel/@types/pages/emailOtpVerification";

const defaultValues: IEmailOtpVerificationForm = {
  code: "",
};

const schema: yup.ObjectSchema<IEmailOtpVerificationForm> = yup.object({
  code: yup.string().required("OTP code is required"),
});

const EmailOtpVerification = () => {
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
            <Box>
              <Image src={EmailImage} height={"108px"} />
            </Box>
            <Stack gap={1.5}>
              <Text textStyle={"cardTitle"} fontSize={"24px"}>
                E-Mail OTP Verification
              </Text>
              <Text
                textStyle={"paragraph_large"}
                color={"gray.normal"}
                lineHeight={"150%"}
              >
                An OTP has been sent to your email address{" "}
                <Span color={"gray.darkest"}>(abcd@gmail.com)</Span>. If you
                don&rsquo;t see it in your inbox, please check your spam folder.
              </Text>
            </Stack>
            <Stack>
              <InputField
                control={control}
                name={"code"}
                label={"OTP Code"}
                placeholder={"Enter OTP Code"}
              />
            </Stack>
            <Text textStyle={"paragraph_regular"} textAlign={"center"}>
              Haven&rsquo;t Got the OTP Code <Span color={"black"}>?</Span>{" "}
              <Span fontWeight={700} color={"primary.500"}>
                Resend
              </Span>
            </Text>
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

export default EmailOtpVerification;
