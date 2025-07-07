import { forwardRef, useState, type FocusEvent } from "react";
import Separator from "../separator/separator";
import { Text } from "../text/text";
import type { TextInputProps } from "./text-input-types";
import * as S from "./text-input.styled";
import { useTheme } from "styled-components";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const {
    $label,
    $size = "default",
    $helpText,
    $leadingItem,
    $trailingItem,
    $isDisabled = false,
    $maxWidth,
    $marginBottomX,
    $multiline = false,
    ...rest
  } = props;
  const [focused, setFocused] = useState(false);
  const {
    textInput: { sizes },
  } = useTheme();
  const { height } = sizes[$size];

  return (
    <S.InputWrapper
      $marginBottomX={$marginBottomX}
      $maxWidth={$maxWidth}
      $disabled={$isDisabled}
      $focused={focused}
    >
      {$label && <Text $renderAs="headingForm">{$label}</Text>}
      <Separator height={8} />

      <S.TextInputBaseWrapper $height={height} $multiline={$multiline}>
        <S.TextInputBase
          as={$multiline ? "textarea" : "input"}
          {...props}
          {...rest}
          ref={ref}
          onFocus={(e: FocusEvent<HTMLInputElement, Element>) => {
            setFocused(true);
            rest.onFocus?.(e);
          }}
          onBlur={(e: FocusEvent<HTMLInputElement, Element>) => {
            setFocused(false);
            rest.onBlur?.(e);
          }}
        />

        {$leadingItem && (
          <S.LeadingItemWrapper $size={$size}>
            {$leadingItem}
          </S.LeadingItemWrapper>
        )}

        {$trailingItem && (
          <S.TrailingItemWrapper $size={$size}>
            {$trailingItem}
          </S.TrailingItemWrapper>
        )}
      </S.TextInputBaseWrapper>

      {$helpText && (
        <>
          <Separator height={8} />
          <Text $renderAs="headingForm" $color={$helpText.color}>
            {$helpText.message}
          </Text>
        </>
      )}
    </S.InputWrapper>
  );
});

TextInput.displayName = "TextInput";

export default TextInput;
