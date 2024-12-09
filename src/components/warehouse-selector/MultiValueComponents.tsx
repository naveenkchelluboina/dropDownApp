import React from 'react';
import { components, MultiValueProps, ValueContainerProps, ClearActionMeta } from 'react-select';
import { X } from 'lucide-react';
import { SelectOption } from '../../types/warehouse';

export const CustomMultiValue = ({ index, getValue, ...props }: MultiValueProps<SelectOption>) => {
  const selectedItems = getValue();
  const { data } = props;

  if (props.selectProps.menuIsOpen) {
    return (
      <components.MultiValue {...props} index={index} getValue={getValue}>
        <div className="flex items-center gap-1">
          <span>{`${data.groupName}: ${data.label}`}</span>
        </div>
      </components.MultiValue>
    );
  }

  if (selectedItems.length > 2 && index === 0) {
    return (
      <components.MultiValue {...props} index={index} getValue={getValue}>
        {`${selectedItems.length} items selected`}
      </components.MultiValue>
    );
  }

  if (selectedItems.length > 2 && index > 0) return null;

  return (
    <components.MultiValue {...props} index={index} getValue={getValue}>
      <div className="flex items-center gap-1">
        <span>{`${data.groupName}: ${data.label}`}</span>
      </div>
    </components.MultiValue>
  );
};

export const MultiValueRemove = (props: any) => {
  return (
    <components.MultiValueRemove {...props}>
      <button 
        className="flex items-center justify-center p-1 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Remove"
      >
        <X className="w-3 h-3 text-gray-500" />
      </button>
    </components.MultiValueRemove>
  );
};

export const MultiValueContainer = (props: ValueContainerProps<SelectOption>) => {
  const { selectProps: { menuIsOpen, value, onChange }} = props;
  const selectedItems = value as SelectOption[];
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [shouldCollapse, setShouldCollapse] = React.useState(false);

  React.useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const itemWidth = 200;
      const maxItemsInView = Math.floor(containerWidth / itemWidth);
      setShouldCollapse(selectedItems.length > maxItemsInView);
    }
  }, [selectedItems.length]);

  if (!menuIsOpen && (shouldCollapse || selectedItems.length > 2)) {
    return (
      <components.ValueContainer {...props}>
        <div className="flex items-center gap-2" ref={containerRef}>
          {`${selectedItems.length} items selected`}
          <button
            className="flex items-center justify-center p-1 hover:bg-gray-100 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault(); 
              const actionMeta: ClearActionMeta<SelectOption> = {
                action: 'clear',
                removedValues: selectedItems
              };
              if (onChange) {
                onChange([], actionMeta);
              }
            }}
            aria-label="Clear all"
          >
            <X className="w-3 h-3 text-gray-500" />
          </button>
        </div>
      </components.ValueContainer>
    );
  }

  return (
    <div ref={containerRef}>
      <components.ValueContainer {...props} />
    </div>
  );
};