import React from 'react';
import { components } from 'react-select';
import { SelectOption } from '../../types/warehouse';

interface CheckboxOptionProps {
  children: React.ReactNode;
  isSelected: boolean;
  data: SelectOption;
}

export const CheckboxOption = ({ children, ...props }: any) => {
  const { label } = props.data;

  return (
    <components.Option {...props}>
      <div className="flex items-center py-1.5 px-2">
        <input 
          type="checkbox"  
          className="size-[14px] mr-3" 
          checked={props.isSelected} 
          onChange={() => {}}
        />
        <div className="text-sm text-gray-700">{label}</div>
      </div>
    </components.Option>
  );
};