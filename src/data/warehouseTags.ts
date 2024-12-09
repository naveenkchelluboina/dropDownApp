import { WarehouseTag, TagGroup, GroupedOption } from '../types/warehouse';

export const warehouseTags: WarehouseTag[] = [
  {
    tagGroupId: 88,
    tagGroupName: "ALL_SF_WAREHOUSES",
    tagValueId: 728,
    tagValueName: "Value"
  },
  {
    tagGroupId: 29,
    tagGroupName: "Color_C1",
    tagValueId: 100,
    tagValueName: "Blue"
  },
  {
    tagGroupId: 29,
    tagGroupName: "Color_C1",
    tagValueId: 609,
    tagValueName: "test"
  },
  {
    tagGroupId: 30,
    tagGroupName: "Day_C1",
    tagValueId: 77,
    tagValueName: "Sunday"
  },
  {
    tagGroupId: 30,
    tagGroupName: "Day_C1",
    tagValueId: 778,
    tagValueName: "Monday"
  },
  {
    tagGroupId: 30,
    tagGroupName: "Day_C1",
    tagValueId: 79,
    tagValueName: "Tuesday"
  },
  {
    tagGroupId: 40,
    tagGroupName: "Warehouse_Type",
    tagValueId: 901,
    tagValueName: "Distribution Center"
  },
  {
    tagGroupId: 40,
    tagGroupName: "Warehouse_Type",
    tagValueId: 902,
    tagValueName: "Fulfillment Center"
  },
  {
    tagGroupId: 50,
    tagGroupName: "Temperature_Control",
    tagValueId: 500,
    tagValueName: "Cold Storage"
  },
  {
    tagGroupId: 50,
    tagGroupName: "Temperature_Control",
    tagValueId: 501,
    tagValueName: "Ambient"
  },
  {
    tagGroupId: 60,
    tagGroupName: "Region",
    tagValueId: 305,
    tagValueName: "North America"
  },
  {
    tagGroupId: 60,
    tagGroupName: "Region",
    tagValueId: 306,
    tagValueName: "Europe"
  },
  {
    tagGroupId: 60,
    tagGroupName: "Region",
    tagValueId: 307,
    tagValueName: "Asia Pacific"
  }
];

export const getGroupedTags = (): GroupedOption[] => {
  const groupedTags = warehouseTags.reduce((acc, tag) => {
    if (!acc[tag.tagGroupName]) {
      acc[tag.tagGroupName] = [];
    }
    acc[tag.tagGroupName].push({
      label: tag.tagValueName,
      value: `${tag.tagGroupName}:${tag.tagValueName}`,
      groupName: tag.tagGroupName
    });
    return acc;
  }, {} as Record<string, any[]>);

  return Object.entries(groupedTags).map(([label, options]) => ({
    label,
    options
  }));
};