import React, { useCallback, useState } from "react";
import FlexView from "../flex-view/flex-view";
import TextInput from "../text-input/text-input";
import type { Tag, TextInputTagProps } from "./textinput-tag-types";
import TagItem from "./comps/tag-item";

const TextinputTag: React.FC<TextInputTagProps> = ({
  label,
  maxWidth,
  name,
  placeholder,
  marginBottomX = 0,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState<Tag[]>([]);
  const [error, setError] = useState<string>("");

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const trimmed = inputValue.trim();
        const isValid = /^[^:]+:[^:]+$/.test(trimmed);

        if (!isValid) {
          setError("Input must be in 'key:value' format.");
          return;
        }

        const isDuplicate = tags.some((tag) => tag.label === trimmed);

        if (isDuplicate) {
          setError("This tag already exists.");
          return;
        }

        const newTag: Tag = {
          id: Date.now().toString(),
          label: trimmed,
        };

        setTags((prev) => [...prev, newTag]);
        setInputValue("");
        setError("");
      }
    },
    [inputValue, tags]
  );

  const handleRemoveTag = useCallback((id: string) => {
    setTags((prev) => prev.filter((tag) => tag.id !== id));
  }, []);

  return (
    <FlexView $marginBottomX={marginBottomX} $direction="column" $gapX={0.5}>
      <TextInput
        $label={label}
        name={name}
        placeholder={placeholder}
        $maxWidth={maxWidth}
        $size="default"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        $helpText={
          error
            ? { message: error, color: "danger-400" }
            : undefined
        }
        autoComplete="off"
      />

      <FlexView $gapX={0.5} $wrap="wrap">
        {tags.map((tag) => (
          <TagItem
            key={tag.id}
            label={tag.label}
            onDismiss={() => handleRemoveTag(tag.id)}
          />
        ))}
      </FlexView>
    </FlexView>
  );
};

export default TextinputTag;
