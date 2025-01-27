import { ChakraProvider } from "@chakra-ui/react";
import themes from "@lovethepadel/themes";
import { PropsWithChildren } from "react";

const ChakraUIProvider = ({ children }: PropsWithChildren) => {
  return <ChakraProvider value={themes}>{children}</ChakraProvider>;
};

export default ChakraUIProvider;
