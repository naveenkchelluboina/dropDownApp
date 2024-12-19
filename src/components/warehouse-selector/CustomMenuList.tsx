import React from 'react';
import { components, MenuListProps } from 'react-select';
import { SelectOption } from '../../types/warehouse';

interface CustomMenuListProps extends MenuListProps<SelectOption> {
  selectProps: any;
  options: any[];
}

const SelectAllOption = ({ selectProps, filteredOptions }: any) => {
  const allSelected =
    filteredOptions.length > 0 &&
    filteredOptions.every((option: SelectOption) =>
      selectProps.value.some(
        (selected: SelectOption) => selected.value === option.value
      )
    );

  const handleSelectAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newSelected = allSelected
      ? selectProps.value.filter(
          (selected: SelectOption) =>
            !filteredOptions.some(
              (option: SelectOption) => option.value === selected.value
            )
        )
      : [
          ...selectProps.value,
          ...filteredOptions.filter(
            (option: SelectOption) =>
              !selectProps.value.some(
                (selected: SelectOption) => selected.value === option.value
              )
          ),
        ];

    selectProps.onChange(newSelected, {
      action: allSelected ? 'clear' : 'select-option',
      option: filteredOptions,
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
            ? `Unselect All (${filteredOptions.length} selected)`
            : `Select All `}
        </span>
      </div>
    </div>
  );
};

export const CustomMenuList = (props: CustomMenuListProps) => {
  // Filter options based on the current search input
  const filteredOptions = props.options
    .flatMap((group) => group.options)
    .filter((option) =>
      option.label
        .toLowerCase()
        .includes(props.selectProps.inputValue.toLowerCase())
    );

  return (
    <components.MenuList {...props}>
      <div className="relative">
        <div className="mx-2">{props.children}</div>
        {filteredOptions.length > 0 && (
          <SelectAllOption
            selectProps={props.selectProps}
            filteredOptions={filteredOptions}
          />
        )}
      </div>
    </components.MenuList>
  );
};
