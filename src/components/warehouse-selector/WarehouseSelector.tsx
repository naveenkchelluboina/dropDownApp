import { useState } from 'react';
import Select, { components, GroupBase } from 'react-select';
import { getGroupedTags } from '../../data/warehouseTags';
import { CheckboxOption } from './CheckboxOption';
import { CustomMenuList } from './CustomMenuList';
import { CustomMultiValue, MultiValueRemove, MultiValueContainer } from './MultiValueComponents';
import { SelectOption, GroupedOption } from '../../types/warehouse';
import { ChevronDown, ChevronUp } from 'lucide-react';

const customComponents = {
  IndicatorSeparator: () => null,
  Group: (props: any) => {
    const [isOpen, setIsOpen] = useState(true);
    const allOptionsInGroup = props.children?.map((child: any) => child.props.data);
    const allSelected = allOptionsInGroup?.every((option: SelectOption) => 
      props.selectProps.value?.some((selected: SelectOption) => selected.value === option.value)
    );
    const someSelected = !allSelected && allOptionsInGroup?.some((option: SelectOption) =>
      props.selectProps.value?.some((selected: SelectOption) => selected.value === option.value)
    );
    
    const handleGroupSelect = (e: React.MouseEvent) => {
      e.stopPropagation();
      const currentSelected = props.selectProps.value || [];
      let newSelected;
      
      if (allSelected) {
        newSelected = currentSelected.filter((selected: SelectOption) => 
          !allOptionsInGroup.some((option: SelectOption) => option.value === selected.value)
        );
      } else {
        const optionsToAdd = allOptionsInGroup.filter((option: SelectOption) =>
          !currentSelected.some((selected: SelectOption) => selected.value === option.value)
        );
        newSelected = [...currentSelected, ...optionsToAdd];
      }
      
      props.selectProps.onChange(newSelected, {
        action: allSelected ? 'remove-option' : 'select-option',
        option: allOptionsInGroup
      });
    };
    
    return (
      <div className="border-b border-gray-100 last:border-0">
        <div className="w-full px-4 py-2 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
          <div className="flex items-center gap-3">
            <input 
              type="checkbox"
              className="size-[14px]"
              checked={allSelected}
              ref={input => input && (input.indeterminate = someSelected)}
              onChange={handleGroupSelect}
              onClick={(e) => e.stopPropagation()}
            />
            <span className="font-semibold text-sm text-gray-700">{props.label}</span>
          </div>
          
        </div>
        {isOpen && <div className="pl-4">{props.children}</div>}
      </div>
    );
  },
  
};

export const WarehouseSelector = () => {
  const [selectedTags, setSelectedTags] = useState<SelectOption[]>([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [groupedOptions] = useState<GroupedOption[]>(getGroupedTags());

  const handleChange = (selectedOptions: any) => {
    if (selectedOptions === null || selectedOptions.length === 0) {
      setSelectedTags([]);
    } else {
      setSelectedTags(selectedOptions);
    }
  };

  const filteredOptions = (candidate: any, input: string) => {
    if (!input) return true;
    return candidate.label.toLowerCase().includes(input.toLowerCase()) ||
           candidate.groupName?.toLowerCase().includes(input.toLowerCase());
  };

  return (
    <div className={`warehouse-dropdown ${menuIsOpen ? 'open' : 'closed'} w-3/5`}>
      <Select<SelectOption, true, GroupBase<SelectOption>>
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{
          Option: CheckboxOption,
          MenuList: CustomMenuList,
          MultiValue: CustomMultiValue,
          MultiValueRemove: MultiValueRemove,
          ValueContainer: MultiValueContainer,
          ...customComponents,
        }}
        value={selectedTags}
        onChange={handleChange}
        filterOption={filteredOptions}
        options={groupedOptions}
        placeholder="Search or select tags"
        menuShouldScrollIntoView={false}
        onMenuOpen={() => setMenuIsOpen(true)}
        onMenuClose={() => setMenuIsOpen(false)}
        menuIsOpen={menuIsOpen}
        classNamePrefix="custom-select"
      />
    </div>
  );
};