import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useMemo, useState } from "react";
import Drawer from "../../components/drawer/drawer";
import type { DrawerBtnProps } from "../../components/drawer/drawer-types";
import type { DropdownItemProps } from "../../components/dropdown/dropdown-types";
import FlexView from "../../components/flex-view/flex-view";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

const DrawerStory = () => {
  const [selectedOption, setSelectedOption] = useState("dbservices");
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleToggleDrawer = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  const dropdownOptions: DropdownItemProps[] = useMemo(
    () => [
      { label: "DB Services", value: "dbservices" },
      { label: "PostgreSQL", value: "postgresql" },
      { label: "MySQL", value: "mysql" },
      { label: "MongoDB", value: "mongodb" },
      { label: "Redis", value: "redis" },
      { label: "SQLite", value: "sqlite" },
    ],
    []
  );
  const handleDropdownChange = useCallback((value: string | number) => {
    setSelectedOption(value as string);
  }, []);

  const menuOptions: DrawerBtnProps[] = [
    {
      $icon: "MyServices",
      $isSelected: true,
      label: "My Services",
    },
    {
      $icon: "Provisioning",
      label: "Provisioning",
    },
    {
      $icon: "AvailabilityMachines",
      label: "Availability Machines",
    },
    {
      $icon: "DataFlix",
      label: "Dataflix",
    },
    {
      $icon: "ScriptLibrary",
      label: "ScriptLibrary",
    },
    {
      $icon: "Benchmarks",
      label: "Benchmarks",
    },
    {
      $icon: "Servers",
      label: "Servers",
    },
  ];

  const footerOptions: DrawerBtnProps[] = [
    {
      $icon: "Add",
      label: "Invite People",
      $trailingIcon: "Pin",
    },
    {
      $icon: "Book",
      label: "Help & Support",
      $trailingIcon: "Pin",
    },
  ];

  return (
    <FlexView>
      <Drawer
        isOpen={drawerOpen}
        toggleDrawer={handleToggleDrawer}
        dropdown={{
          options: dropdownOptions,
          selected: selectedOption,
          handleChange: handleDropdownChange,
        }}
        menuOptions={menuOptions}
        footerOptions={footerOptions}
      />
    </FlexView>
  );
};

export const Default: Story = {
  render: () => <DrawerStory />,
};
