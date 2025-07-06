import React, { useEffect, useRef, useState } from "react";
import { AppIcons } from "../../assets/icons";
import TextInput from "../text-input/text-input";
import { DropdownItem } from "./dropdown-item";
import type { DropdownProps } from "./dropdown-types";
import * as S from "./dropdown.styled";

export const Dropdown: React.FC<DropdownProps> = ({
  $label,
  $placeholder,
  $options,
  $value,
  $helpText,
  $isDisabled = false,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = $options.find((opt) => opt.value === $value);

  const handleOptionClick = (value: string | number) => {
    onChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <S.DropdownWrapper ref={dropdownRef} $disabled={$isDisabled}>
      <TextInput
        $label={$label}
        $size="default"
        placeholder={$placeholder}
        value={selectedOption?.label || ""}
        readOnly
        $cursor="pointer"
        $helpText={$helpText}
        $trailingItem={
          <S.Caret $isOpen={isOpen}>
            <AppIcons.ChevronDown />
          </S.Caret>
        }
        onClick={() => !$isDisabled && setIsOpen(!isOpen)}
      />

      {isOpen && (
        <S.OptionsList>
          {$options.map((opt) => (
            <DropdownItem
              key={opt.value}
              label={opt.label}
              value={opt.value}
              $isSelected={opt.$isSelected}
              $leadingItem={opt.$leadingItem}
              $trailingItem={opt.$trailingItem}
              onClick={() => handleOptionClick(opt.value)}
            />
          ))}
        </S.OptionsList>
      )}
    </S.DropdownWrapper>
  );
};
