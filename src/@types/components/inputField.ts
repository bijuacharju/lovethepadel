import { InputProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface InputFieldProps<T extends FieldValues = FieldValues>
  extends InputProps {
  control: Control<T, unknown>;
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  uppercase?: boolean;
  rightIcon?: ReactNode;
  boldLabel?: boolean;
}

export type { InputFieldProps };
