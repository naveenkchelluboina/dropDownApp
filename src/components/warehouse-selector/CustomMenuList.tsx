import React from 'react';
import { components, MenuListProps } from 'react-select';
import { Warehouse } from '../../types/warehouse';

export const CustomMenuList = (props: MenuListProps<Warehouse>) => {
  return (
    <components.MenuList {...props}>
      <div className="py-2">
        {props.children}
      </div>
    </components.MenuList>
  );
};