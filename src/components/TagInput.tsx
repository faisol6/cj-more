import React, { useState } from "react";
import styles from "./TagInput.module.css";

interface TagInputProps {
  maxTags?: number;
  separators?: string[];
}

const TagInput: React.FC<TagInputProps> = ({
  maxTags = 5,
  separators = [",", ";", "|", " ", "\t"],
}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [warningMessage, setWarningMessage] = useState<string>("");

  const addTag = (value: string) => {
    if (!value.trim()) return;

    const separatorRegex = new RegExp(`[${separators.join("")}]`);
    const newTags = value
      .split(separatorRegex)
      .map((tag) => tag.trim())
      .filter((tag) => tag);
    const uniqueNewTags = newTags.filter((tag) => !tags.includes(tag));

    if (tags.length + uniqueNewTags.length > maxTags) {
      setWarningMessage("You have reached the maximum number of tags!");
      return;
    }

    setTags([...tags, ...uniqueNewTags]);
    setInputValue("");
    setWarningMessage("");
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleBlur = () => {
    if (!inputValue) setWarningMessage("");
    addTag(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleBlur();
    }
  };

  const WarningMessage = () => (
    <p className={styles.warningMessage}>{warningMessage}</p>
  );

  return (
    <div className={styles.tagInputContainer}>
      <div className={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag} <button onClick={() => removeTag(index)}>❌</button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder="Add a tag..."
          className={styles.input}
        />
      </div>
      <WarningMessage />
    </div>
  );
};

export default TagInput;
