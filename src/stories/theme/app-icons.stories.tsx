// src/stories/theme/AppIcons.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { AppIcons, type AppIconKeys } from "../../assets/icons";

const meta: Meta = {
  title: "Theme/AppIcons",
};

export default meta;

type Story = StoryObj<typeof meta>;

const DisplayAllAppIcons: React.FC = () => {
  const iconKeys = Object.keys(AppIcons) as AppIconKeys[];

  return (
    <div style={{ padding: "1rem" }}>
      <h2>All App Icons</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {iconKeys.map((iconName) => {
          const IconComponent = AppIcons[iconName];
          return (
            <div
              key={iconName}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100px",
              }}
            >
              <IconComponent width={32} height={32} />
              <span style={{ marginTop: "0.5rem", fontSize: "0.75rem" }}>
                {iconName}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const AppIconsStory: Story = {
  render: () => <DisplayAllAppIcons />,
};
