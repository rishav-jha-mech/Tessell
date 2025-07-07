import { useCallback, useMemo, useState } from "react";
import type { DropdownItemProps } from "../../components/dropdown/dropdown-types";
import type { DrawerBtnProps } from "../../components/drawer/drawer-types";

export const useDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState("dbservices");

  const toggleDrawer = useCallback(() => setIsDrawerOpen((prev) => !prev), []);
  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const contextValue = useMemo(
    () => ({ isDrawerOpen, toggleDrawer, openDrawer, closeDrawer }),
    [isDrawerOpen, toggleDrawer, openDrawer, closeDrawer]
  );

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

  const menuOptions: DrawerBtnProps[] = useMemo(
    () => [
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
    ],
    []
  );

  const footerOptions: DrawerBtnProps[] = useMemo(
    () => [
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
    ],
    []
  );

  return useMemo(
    () => ({
      isDrawerOpen,
      selectedOption,
      dropdownOptions,
      handleDropdownChange,
      menuOptions,
      footerOptions,
      contextValue,
    }),
    [
      contextValue,
      dropdownOptions,
      footerOptions,
      handleDropdownChange,
      isDrawerOpen,
      menuOptions,
      selectedOption,
    ]
  );
};
