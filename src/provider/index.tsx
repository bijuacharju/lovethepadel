import { PropsWithChildren } from "react";
import ChakraUIProvider from "./ChakraUIProvider";

const Provider = ({ children }: PropsWithChildren) => {
  return <ChakraUIProvider>{children}</ChakraUIProvider>;
};

export default Provider;
