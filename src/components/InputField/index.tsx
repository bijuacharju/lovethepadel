import { Group, Input, InputAddon } from "@chakra-ui/react";
import { Field } from "@lovethepadel/components/ui/field";
import {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";
import { PasswordInput } from "../ui/password-input";
import { NumberInputField, NumberInputRoot } from "../ui/number-input";
import { InputFieldProps } from "@lovethepadel/@types/components/inputField";

const CustomInput = <T extends FieldValues>({
  field,
  props,
}: {
  field: ControllerRenderProps<T, FieldPath<T>>;
  props: InputFieldProps<T>;
}) => {
  const { name, placeholder, type = "text", rightIcon, ...otherProps } = props;

  if (props.type === "password") {
    return (
      <PasswordInput
        id={name}
        placeholder={placeholder}
        {...field}
        {...otherProps}
        variant={"flushed"}
        position="relative"
        pr={10}
        paddingY={1}
        height={"48px"}
        fontSize={"14px"}
        required={false}
        width="full"
      />
    );
  }

  if (props.type === "number") {
    return (
      <NumberInputRoot
        width="full"
        onValueChange={({ value }) => {
          field.onChange(value);
        }}
        {...field}
        id={name}
        required={false}
        min={0}
        css={{
          "& [data-part=control]": {
            display: "none",
            // background: "red",
          },
        }}
        readOnly={otherProps.readOnly}
      >
        <NumberInputField
          {...otherProps}
          placeholder={placeholder}
          height={"48px"}
          fontSize={"14px"}
        />
      </NumberInputRoot>
    );
  }

  return (
    <>
      <Group width="full" attached={!!rightIcon}>
        <Input
          {...field}
          {...otherProps}
          id={name}
          placeholder={placeholder}
          type={type === "number" ? "text" : type}
          inputMode="numeric"
          height={"48px"}
          fontSize={"14px"}
          onKeyDown={(e) => {
            if (props.type === "number") {
              if (["KeyE", "Equal", "Minus"].includes(e.code)) {
                e.preventDefault();
              }
            }
          }}
          required={false}
        />
        {rightIcon && <InputAddon>{rightIcon}</InputAddon>}
      </Group>
    </>
  );
};

const InputField = <T extends FieldValues = FieldValues>(
  props: InputFieldProps<T>
) => {
  const { boldLabel = true, required, ...fieldProps } = props;
  const {
    field,
    fieldState: { error },
  } = useController({ name: props.name, control: props.control });
  return (
    <Field
      label={props.label}
      invalid={!!error}
      required={required}
      errorText={error?.message}
      css={{
        "& label": boldLabel
          ? { fontSize: "16px", fontWeight: 500 }
          : { fontSize: "14px", fontWeight: 400 },
        "& input:focus-visible": {
          borderColor: "primary.500",
        },
      }}
      paddingTop={4}
    >
      <CustomInput field={field} props={fieldProps}></CustomInput>
    </Field>
  );
};

export default InputField;
