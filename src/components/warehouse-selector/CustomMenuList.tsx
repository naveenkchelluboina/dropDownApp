import React from 'react';
import { components, MenuListProps } from 'react-select';
import { SelectOption } from '../../types/warehouse';

interface CustomMenuListProps extends MenuListProps<SelectOption> {
  selectProps: any;
  options: any[];
}

const SelectAllOption = ({ selectProps, allOptions }: any) => {
  const allSelected = selectProps.value?.length === allOptions.length;

  const handleSelectAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newSelected = allSelected ? [] : allOptions;
    selectProps.onChange(newSelected, {
      action: allSelected ? 'clear' : 'select-option',
      option: allOptions
    });
  };

  return (
    <div 
      className="sticky bottom-0 border-t border-gray-100 bg-white cursor-pointer hover:bg-gray-50"
      onClick={handleSelectAll}
    >
      <div className="w-full px-4 py-2">
        <span className="text-sm text-blue-600 font-medium">
          {allSelected 
            ? `Unselect All (${allOptions.length} selected)`
            : 'Select all'
          }
        </span>
      </div>
    </div>
  );
};

export const CustomMenuList = (props: CustomMenuListProps) => {
  const allOptions = props.options.flatMap((group) => group.options);
  
  return (
    <components.MenuList {...props}>
      <div className="relative">
        <div className="max-h-[300px] overflow-y-auto">
          {props.children}
        </div>
        <SelectAllOption selectProps={props.selectProps} allOptions={allOptions} />
      </div>
    </components.MenuList>
  );
};