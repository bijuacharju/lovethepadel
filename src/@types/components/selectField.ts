import { ReactNode } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface ISelectField<T extends FieldValues = FieldValues> {
  control: Control<T, unknown>;
  variant?: "outline" | "flushed";
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  uppercase?: boolean;
  rightIcon?: ReactNode;
  selectOptions: { label: string; value: string }[];
  isReadOnly?: boolean;
  required?: boolean;
  onAdditionalOnChange?: (e: string) => void;
}

export type { ISelectField };
