import React, { type ReactNode } from "react";
import Drawer from "../../components/drawer/drawer";
import * as S from "./drawer-context-styled";
import { useDrawer } from "./use-drawer";
import { DrawerContext } from "./use-drawer-context";

export const DrawerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const {
    menuOptions,
    contextValue,
    footerOptions,
    selectedOption,
    dropdownOptions,
    handleDropdownChange,
  } = useDrawer();

  return (
    <DrawerContext.Provider value={contextValue}>
      <Drawer
        isOpen={contextValue.isDrawerOpen}
        toggleDrawer={contextValue.toggleDrawer}
        footerOptions={footerOptions}
        menuOptions={menuOptions}
        dropdown={{
          selected: selectedOption,
          options: dropdownOptions,
          handleChange: handleDropdownChange,
        }}
      />
      <S.MainContent $isDrawerOpen={contextValue.isDrawerOpen}>
        {children}
      </S.MainContent>
    </DrawerContext.Provider>
  );
};
