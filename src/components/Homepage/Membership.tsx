import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Separator,
  Span,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Button } from "../ui/button";
import TickCircleBoldIcon from "@lovethepadel/assets/svgs/TickCircleBoldIcon.svg?react";
import CrownIcon from "@lovethepadel/assets/svgs/CrownIcon.svg?react";
import PadelIcon from "@lovethepadel/assets/svgs/PadelIcon.svg?react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IMembershipData,
  IRegisterPlayerDetail,
  IRegisterTeamForm,
} from "@lovethepadel/@types/components/homepage";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
} from "@lovethepadel/components/ui/dialog";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../InputField";
import SelectField from "../SelectField";

const defaultValues: IRegisterTeamForm = {
  preferredDay: "",
  playerOne: {
    firstname: "",
    lastname: "",
    email: "",
    mobileNumber: "",
    shirtSize: "",
    shortSize: "",
    initial: "",
  },
  playerTwo: {
    firstname: "",
    lastname: "",
    email: "",
    mobileNumber: "",
    shirtSize: "",
    shortSize: "",
    initial: "",
  },
};

const playerSchema: yup.ObjectSchema<IRegisterPlayerDetail> = yup.object({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  mobileNumber: yup.string().required("Mobile number is required"),
  shirtSize: yup.string().required("Shirt size is required"),
  shortSize: yup.string().required("Short size is required"),
  initial: yup.string().required("Initial is required"),
});

const schema: yup.ObjectSchema<IRegisterTeamForm> = yup.object({
  preferredDay: yup.string().required("Preferred day is required"),
  playerOne: playerSchema,
  playerTwo: playerSchema,
}) as yup.ObjectSchema<IRegisterTeamForm>;

const JoinLeagueModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: VoidFunction;
}) => {
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = () => {
    onClose();
    reset(defaultValues);
  };

  return (
    <DialogRoot
      placement={{ base: "top", xl: "center" }}
      motionPreset="slide-in-bottom"
      open={open}
      onOpenChange={() => {
        onClose();
        reset(defaultValues);
      }}
      closeOnInteractOutside={false}
      size={{ base: "full", md: "cover" }}
    >
      <DialogContent height={"auto"} bg={"none"} boxShadow={"none"}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Container
            p={10}
            width={"full"}
            flexShrink={0}
            bg={"white"}
            borderRadius={"3xl"}
            boxShadow={"lg"}
            as={Stack}
            gap={"52px"}
          >
            <DialogHeader as={Stack} p={0}>
              <Text
                textStyle={"dialogTitle"}
                fontSize={{ base: "20px", md: "24px" }}
              >
                Register Your Team for the League
              </Text>
              <Text
                textStyle={"paragraph_regular"}
                color={"gray.normal"}
                lineHeight={"150%"}
                fontSize={{ base: "12px", md: "14px" }}
              >
                Complete the form to sign up and secure your spot in the
                upcoming league season.
              </Text>
            </DialogHeader>
            <DialogBody p={0}>
              <Stack gap={12}>
                <Stack gap={3} alignItems={"center"}>
                  <Text textStyle={"paragraph_large"} fontWeight={500}>
                    Preferred Days (Select one)
                  </Text>
                  <Stack gap={1.5}>
                    <HStack gap={3}>
                      <Button
                        variant={"surface"}
                        borderRadius={"lg"}
                        boxShadowColor={"gray.lighter"}
                        borderColor={
                          watch("preferredDay") === "Monday" && "primary.500"
                        }
                        backgroundColor={
                          watch("preferredDay") === "Monday" && "primary.1100"
                        }
                        onClick={() => {
                          setValue("preferredDay", "Monday");
                        }}
                      >
                        Monday
                      </Button>
                      <Button
                        variant={"surface"}
                        borderRadius={"lg"}
                        boxShadowColor={"gray.lighter"}
                        borderColor={
                          watch("preferredDay") === "Wednesday" && "primary.500"
                        }
                        backgroundColor={
                          watch("preferredDay") === "Wednesday" &&
                          "primary.1100"
                        }
                        onClick={() => {
                          setValue("preferredDay", "Wednesday");
                        }}
                      >
                        Wednesday
                      </Button>
                      <Button
                        variant={"surface"}
                        borderRadius={"lg"}
                        boxShadowColor={"gray.lighter"}
                        borderColor={
                          watch("preferredDay") === "Friday" && "primary.500"
                        }
                        backgroundColor={
                          watch("preferredDay") === "Friday" && "primary.1100"
                        }
                        onClick={() => {
                          setValue("preferredDay", "Friday");
                        }}
                      >
                        Friday
                      </Button>
                    </HStack>
                    {errors.preferredDay && (
                      <Text fontSize={"12px"} color={"danger.600"}>
                        {errors.preferredDay.message}
                      </Text>
                    )}
                  </Stack>
                </Stack>
                <Flex gap={12} flexDirection={{ base: "column", lg: "row" }}>
                  <Stack flex={1} minW={0} flexShrink={0} gap={2}>
                    <HStack gap={3}>
                      <Icon fontSize={24}>
                        <PadelIcon />
                      </Icon>
                      <Text textStyle={"subTitle"} fontWeight={700}>
                        Player 1
                      </Text>
                    </HStack>
                    <Grid
                      flex={1}
                      minW={0}
                      flexShrink={0}
                      templateColumns={{
                        base: "repeat(1, 1fr)",
                        xl: "repeat(2, 1fr)",
                      }}
                      rowGap={1}
                      columnGap={4}
                    >
                      <GridItem>
                        <InputField
                          borderRadius={"xl"}
                          variant={"outline"}
                          boldLabel={false}
                          control={control}
                          name={"playerOne.firstname"}
                          label={"First Name"}
                          placeholder={"Enter First Name"}
                        />
                      </GridItem>
                      <GridItem>
                        <InputField
                          borderRadius={"xl"}
                          variant={"outline"}
                          boldLabel={false}
                          control={control}
                          name={"playerOne.lastname"}
                          label={"Last Name"}
                          placeholder={"Enter Last Name"}
                        />
                      </GridItem>
                      <GridItem>
                        <InputField
                          borderRadius={"xl"}
                          variant={"outline"}
                          boldLabel={false}
                          control={control}
                          name={"playerOne.email"}
                          label={"Email"}
                          placeholder={"Enter Email"}
                        />
                      </GridItem>
                      <GridItem>
                        <InputField
                          borderRadius={"xl"}
                          variant={"outline"}
                          boldLabel={false}
                          control={control}
                          name={"playerOne.mobileNumber"}
                          label={"Mobile Number"}
                          placeholder={"Enter Mobile Number"}
                        />
                      </GridItem>
                      <GridItem>
                        <SelectField
                          variant={"outline"}
                          control={control}
                          name={"playerOne.shirtSize"}
                          label={"Shirt Size"}
                          placeholder={"Enter Shirt Size"}
                          selectOptions={[
                            { label: "M", value: "M" },
                            { label: "L", value: "L" },
                            { label: "XL", value: "XL" },
                          ]}
                          required
                        />
                      </GridItem>
                      <GridItem>
                        <SelectField
                          variant={"outline"}
                          control={control}
                          name={"playerOne.shortSize"}
                          label={"Short Size"}
                          placeholder={"Enter Short Size"}
                          selectOptions={[
                            { label: "M", value: "M" },
                            { label: "L", value: "L" },
                            { label: "XL", value: "XL" },
                          ]}
                          required
                        />
                      </GridItem>
                      <GridItem colSpan={{ base: 1, xl: 2 }}>
                        <InputField
                          borderRadius={"xl"}
                          variant={"outline"}
                          boldLabel={false}
                          control={control}
                          name={"playerOne.initial"}
                          label={"Initial"}
                          placeholder={"Enter Initial"}
                        />
                      </GridItem>
                    </Grid>
                  </Stack>
                  <Box>
                    <Separator
                      orientation={{ base: "horizontal", lg: "vertical" }}
                      borderColor={"gray.lighter"}
                    />
                  </Box>
                  <Stack flex={1} minW={0} flexShrink={0} gap={2}>
                    <HStack gap={3}>
                      <Icon fontSize={24}>
                        <PadelIcon />
                      </Icon>
                      <Text textStyle={"subTitle"} fontWeight={700}>
                        Player 2
                      </Text>
                    </HStack>
                    <Grid
                      flex={1}
                      minW={0}
                      flexShrink={0}
                      templateColumns={{
                        base: "repeat(1, 1fr)",
                        xl: "repeat(2, 1fr)",
                      }}
                      rowGap={1}
                      columnGap={4}
                    >
                      <GridItem>
                        <InputField
                          borderRadius={"xl"}
                          variant={"outline"}
                          boldLabel={false}
                          control={control}
                          name={"playerTwo.firstname"}
                          label={"First Name"}
                          placeholder={"Enter First Name"}
                        />
                      </GridItem>
                      <GridItem>
                        <InputField
                          borderRadius={"xl"}
                          variant={"outline"}
                          boldLabel={false}
                          control={control}
                          name={"playerTwo.lastname"}
                          label={"Last Name"}
                          placeholder={"Enter Last Name"}
                        />
                      </GridItem>
                      <GridItem>
                        <InputField
                          borderRadius={"xl"}
                          variant={"outline"}
                          boldLabel={false}
                          control={control}
                          name={"playerTwo.email"}
                          label={"Email"}
                          placeholder={"Enter Email"}
                        />
                      </GridItem>
                      <GridItem>
                        <InputField
                          borderRadius={"xl"}
                          variant={"outline"}
                          boldLabel={false}
                          control={control}
                          name={"playerTwo.mobileNumber"}
                          label={"Mobile Number"}
                          placeholder={"Enter Mobile Number"}
                        />
                      </GridItem>
                      <GridItem>
                        <SelectField
                          variant={"outline"}
                          control={control}
                          name={"playerTwo.shirtSize"}
                          label={"Shirt Size"}
                          placeholder={"Enter Shirt Size"}
                          selectOptions={[
                            { label: "M", value: "M" },
                            { label: "L", value: "L" },
                            { label: "XL", value: "XL" },
                          ]}
                          required
                        />
                      </GridItem>
                      <GridItem>
                        <SelectField
                          variant={"outline"}
                          control={control}
                          name={"playerTwo.shortSize"}
                          label={"Short Size"}
                          placeholder={"Enter Short Size"}
                          selectOptions={[
                            { label: "M", value: "M" },
                            { label: "L", value: "L" },
                            { label: "XL", value: "XL" },
                          ]}
                          required
                        />
                      </GridItem>
                      <GridItem colSpan={{ base: 1, xl: 2 }}>
                        <InputField
                          borderRadius={"xl"}
                          variant={"outline"}
                          boldLabel={false}
                          control={control}
                          name={"playerTwo.initial"}
                          label={"Initial"}
                          placeholder={"Enter Initial"}
                        />
                      </GridItem>
                    </Grid>
                  </Stack>
                </Flex>
              </Stack>
            </DialogBody>
            <DialogFooter
              padding={0}
              paddingTop={10}
              borderTop={"1px solid"}
              borderColor={"gray.lighter"}
              as={HStack}
              justifyContent={"space-between"}
            >
              <Text
                textStyle={"paragraph_regular"}
                color={"black"}
                fontWeight={500}
                fontSize={{ base: "10px", xl: "14px" }}
              >
                * This field is mandatory
              </Text>
              <HStack gap={3}>
                <Button
                  variant={"surface"}
                  borderRadius={"xl"}
                  fontWeight={500}
                  boxShadowColor={"gray.light"}
                  onClick={() => reset(defaultValues)}
                >
                  Clear
                </Button>
                <Button
                  type={"submit"}
                  variant={"solid"}
                  borderRadius={"xl"}
                  fontWeight={500}
                >
                  Submit
                </Button>
              </HStack>
            </DialogFooter>
            <DialogCloseTrigger css={{ "& svg": { stroke: "red" } }} />
          </Container>
        </form>
      </DialogContent>
    </DialogRoot>
  );
};

const MembershipCard = ({
  title,
  hasCrown,
  subTitle,
  price,
  priceOptional,
  buttonText,
  onButtonClick,
  features,
}: IMembershipData) => {
  return (
    <Stack
      width={{ base: undefined, md: "420px" }}
      flexShrink={0}
      paddingY={10}
      paddingX={{ base: 6, md: 8 }}
      gap={8}
      backgroundColor={"white"}
      borderRadius={"xl"}
      boxShadow={"0px 4px 32px 0px rgba(0, 0, 0, 0.03)"}
    >
      <Stack gap={2}>
        <HStack as={Center}>
          <Text
            textAlign={"center"}
            textStyle={"subTitle"}
            fontWeight={700}
            color={"gray.normal"}
            fontSize={{ base: "14px", md: "18px" }}
          >
            {title}
          </Text>
          {hasCrown && (
            <Icon fontSize={{ base: "20px", md: "24px" }} marginTop={-5}>
              <CrownIcon />
            </Icon>
          )}
        </HStack>
        <Text
          textAlign={"center"}
          textStyle={"paragraph_regular"}
          color={"gray.normal"}
          lineHeight={"20px"}
          fontFamily={"Helvetica"}
        >
          {subTitle}
        </Text>
      </Stack>
      <Text
        textAlign={"center"}
        textStyle={"homepageTitle"}
        fontSize={{ base: "24px", md: "32px" }}
      >
        {price}
        {priceOptional && (
          <Span color={"gray.normal"}>
            {" "}
            /{" "}
            <Span fontSize={{ base: "18px", md: "24px" }}>{priceOptional}</Span>
          </Span>
        )}
      </Text>
      <Button
        variant={"solid"}
        paddingY={4}
        paddingX={6}
        borderRadius={"xl"}
        fontFamily={"Helvetica"}
        fontSize={{ base: "12px", md: "16px" }}
        onClick={onButtonClick ? () => onButtonClick() : undefined}
      >
        {buttonText}
      </Button>
      <Separator borderColor={"gray.light"} />
      <Stack gap={4}>
        {features.map((feature) => (
          <HStack gap={2} id={feature} key={feature}>
            <Icon fontSize={{ base: "20px", md: "24px" }}>
              <TickCircleBoldIcon />
            </Icon>
            <Text
              textStyle={"paragraph_regular"}
              fontSize={{ base: "12px", md: "14px" }}
            >
              {feature}
            </Text>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
};

const MembershipComponent = ({
  membershipData,
}: {
  membershipData: IMembershipData[];
}) => {
  return (
    <Flex gap={6} justifyContent={"center"}>
      {membershipData.map((data) => (
        <MembershipCard key={data.title} {...data} />
      ))}
    </Flex>
  );
};

export const SliderMembershipComponent = ({
  membershipData,
}: {
  membershipData: IMembershipData[];
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <Box
        bottom={"-40px"}
        css={{
          "& li": {
            margin: 0,
          },
          "& .slick-active button::before": {
            fontSize: "10px !important",
            color: "gray.dark !important",
            opacity: "100% !important",
          },
          "&  button::before": {
            fontSize: "10px !important",
            color: "gray.lighter !important",
            opacity: "100% !important",
          },
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </Box>
    ),
  };
  return (
    <Box
      className="slider-container"
      css={{
        "& .slick-list": {
          padding: "0px !important",
          width: "full !important",
        },
        "& .slick-slide": {},
      }}
    >
      <Slider {...settings}>
        {membershipData.map((event) => (
          <MembershipCard key={event.title} {...event} />
        ))}
      </Slider>
    </Box>
  );
};

const ResponsiveComponent = ({
  membershipData,
}: {
  membershipData: IMembershipData[];
}) => {
  const content = useBreakpointValue({
    base: <SliderMembershipComponent membershipData={membershipData} />,
    md: <MembershipComponent membershipData={membershipData} />,
  });

  return <>{content}</>;
};

const Membership = () => {
  const [membershipData, setMembershipData] = useState<IMembershipData[]>([]);

  const {
    open: joinLeagueOpen,
    onOpen: onJoinLeagueOpen,
    onClose: onJoinLeagueClose,
  } = useDisclosure();

  useEffect(() => {
    setMembershipData([
      {
        title: "Free Membership",
        subTitle: "Join Free - Connect and Play!",
        price: "0 AED",
        buttonText: "Join Now",
        features: [
          "Join the Community",
          "Play Matches",
          "Receive all the latest LTP news",
          "Access social events",
          "Join a league",
          "Play a tournament",
        ],
      },
      {
        title: "Join a League",
        hasCrown: true,
        subTitle: "Compete, connect, and grow!",
        price: "249 AED",
        priceOptional: "Player",
        buttonText: "Join League",
        onButtonClick: () => onJoinLeagueOpen(),
        features: [
          "Compete in a Love The Padel league",
          "Improve your game",
          "Meet like-minded padel enthusiasts",
          "Grow your network",
          "Enjoy the socials",
        ],
      },
    ]);
  }, [onJoinLeagueOpen]);

  return (
    <Container as={Stack}>
      <Stack gap={{ base: "32px", md: "56px" }}>
        <Stack>
          <Stack maxWidth={"594px"} alignSelf={"center"}>
            <Stack gap={{ base: 3, md: 5 }}>
              <Text
                textStyle={"subTitle"}
                color={"primary.500"}
                fontWeight={700}
                textAlign={"center"}
                fontSize={{ base: "14px", md: "18px" }}
              >
                🛡️ Membership Tiers
              </Text>
              <Stack gap={1}>
                <Text
                  textStyle={"homepageTitle"}
                  textAlign={"center"}
                  lineHeight={"140%"}
                  fontSize={{ base: "24px", md: "42px" }}
                >
                  Become a Member
                </Text>
                <Text
                  textStyle={"paragraph_large"}
                  lineHeight={"24px"}
                  color={"gray.normal"}
                  textAlign={"center"}
                  fontSize={{ base: "14px", md: "16px" }}
                >
                  Join the Love the Padel community and enjoy unmatched perks,
                  priority access, and a lifestyle centered around the game you
                  love.&rdquo;
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <ResponsiveComponent membershipData={membershipData} />
      </Stack>
      <JoinLeagueModal open={joinLeagueOpen} onClose={onJoinLeagueClose} />
    </Container>
  );
};

export default Membership;
