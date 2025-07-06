import { forwardRef, useState } from "react";
import Separator from "../separator/separator";
import { Text } from "../text/text";
import type { TextInputProps } from "./text-input-types";
import * as S from "./text-input.styled";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const {
    $label,
    $size = "default",
    $helpText,
    $leadingItem,
    $trailingItem,
    $isDisabled = false,
    $marginBottom,
    ...rest
  } = props;
  const [focused, setFocused] = useState(false);

  return (
    <S.InputWrapper
      $marginBottom={$marginBottom}
      $disabled={$isDisabled}
      $focused={focused}
    >
      {$label && <Text $renderAs="headingForm">{$label}</Text>}
      <Separator $height={8} />

      <S.TextInputBaseWrapper>
        <S.TextInputBase
          {...props}
          {...rest}
          ref={ref}
          onFocus={(e) => {
            setFocused(true);
            rest.onFocus?.(e);
          }}
          onBlur={(e) => {
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
          <Separator $height={8} />
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
