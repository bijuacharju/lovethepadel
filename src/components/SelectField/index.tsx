import { FieldValues, useController } from "react-hook-form";

import { ISelectField } from "@lovethepadel/@types/components/selectField";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Field } from "../ui/field";

const SelectField = <T extends FieldValues>(props: ISelectField<T>) => {
  const {
    variant = "flushed",
    required,
    selectOptions,
    placeholder,
    isReadOnly,
    onAdditionalOnChange,
    ...fieldProps
  } = props;
  const {
    field: { value, onChange, ...rest },
    fieldState: { error },
  } = useController({ name: props.name, control: props.control });
  const animatedComponents = makeAnimated();
  return (
    <Field
      label={props.label}
      invalid={!!error}
      required={required}
      errorText={error?.message}
      paddingTop={4}
    >
      <Select
        {...fieldProps}
        {...rest}
        onChange={(selectedOptions) => {
          const selected = selectedOptions as {
            label: string;
            value: string;
          };
          onChange(selected.value);
          if (onAdditionalOnChange) onAdditionalOnChange(selected.value);
        }}
        isSearchable
        value={selectOptions.find((option) => value === option.value) ?? ""}
        components={animatedComponents}
        placeholder={placeholder}
        options={selectOptions}
        menuIsOpen={isReadOnly ? false : undefined}
        menuShouldScrollIntoView
        isDisabled={isReadOnly}
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            minWidth: "100%",
          }),
          control: (baseStyles, state) => ({
            ...baseStyles,
            minHeight: "48px",
            fontSize: "14px",
            border: variant === "flushed" && "none",
            borderBottom: variant === "flushed" && "1px solid",
            borderRadius: variant === "flushed" ? "0px" : "12px",
            borderColor: state.isFocused
              ? "#415B2E !important"
              : !!error && !state.isFocused
              ? "#E53E3E !important"
              : "#e4e4e7 !important",
            boxShadow: state.isFocused
              ? `${
                  variant === "flushed" ? "0px 1px 0px 0px" : "0px 0px 0px 1px"
                } #415B2E`
              : undefined,
            "&:hover": {
              borderColor: state.isFocused ? "#415B2E" : "#e4e4e7",
              boxShadow: state.isFocused
                ? `${
                    variant === "flushed"
                      ? "0px 1px 0px 0px"
                      : "0px 0px 0px 1px"
                  } #415B2E`
                : undefined,
            },
          }),
          option: (styles) => {
            return {
              ...styles,
              fontSize: "14px",
            };
          },
          indicatorSeparator: (styles) => {
            return { ...styles, display: "none" };
          },
        }}
      />
    </Field>
  );
};

export default SelectField;
