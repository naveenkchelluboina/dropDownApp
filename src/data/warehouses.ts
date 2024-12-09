import { GroupedOption, Warehouse } from '../types/warehouse';

export const warehouses: Warehouse[] = [
  { label: 'RS_warehouse_name_2', value: 'RS_warehouse_name_2', snowflakeAcct: 'SF_AWS_ACCT_EAST', lineOfBusiness: 'Engineering' },
  { label: 'RS_warehouse_name_22', value: 'RS_warehouse_name_22', snowflakeAcct: 'SF_AWS_ACCT_EAST', lineOfBusiness: 'Risk' },
  { label: 'RS_warehouse_name_24', value: 'RS_warehouse_name_24', snowflakeAcct: 'SF_AWS_ACCT_WEST', lineOfBusiness: 'Product' },
  { label: 'RS_warehouse_name_21', value: 'RS_warehouse_name_21', snowflakeAcct: 'SF_AWS_ACCT_WEST', lineOfBusiness: 'Bank' },
  { label: 'RS_warehouse_name_266', value: 'RS_warehouse_name_266', snowflakeAcct: 'SF_AWS_ACCT_EAST', lineOfBusiness: 'Design' },
  { label: 'RS_warehouse_name_232', value: 'RS_warehouse_name_232', snowflakeAcct: 'SF_AWS_ACCT_WEST', lineOfBusiness: 'Sales' },
  { label: 'RS_warehouse_name_223', value: 'RS_warehouse_name_223', snowflakeAcct: 'SF_AWS_ACCT_EAST', lineOfBusiness: 'Operations' },
  { label: 'RS_warehouse_name_2223', value: 'RS_warehouse_name_2223', snowflakeAcct: 'SF_AWS_ACCT_WEST', lineOfBusiness: 'Marketing' },
  { label: 'RS_warehouse_name_21223', value: 'RS_warehouse_name_21223', snowflakeAcct: 'SF_AWS_ACCT_WEST', lineOfBusiness: 'Finance' },
  { label: 'RS_warehouse_name_214523', value: 'RS_warehouse_name_214523', snowflakeAcct: 'SF_AWS_ACCT_EAST', lineOfBusiness: 'Legal' },
];

export const getGroupedOptions = (): GroupedOption[] => {
  const groupedByLOB = warehouses.reduce((acc, warehouse) => {
    const lob = warehouse.lineOfBusiness || 'Other';
    if (!acc[lob]) {
      acc[lob] = [];
    }
    acc[lob].push(warehouse);
    return acc;
  }, {} as Record<string, Warehouse[]>);

  return Object.entries(groupedByLOB).map(([label, options]) => ({
    label,
    options: options.map(option => ({
      ...option,
      formattedLabel: `${label}: ${option.label}`
    }))
  }));
};