export interface TagValue {
  tagValueId: number;
  tagValueName: string;
}

export interface TagGroup {
  tagGroupId: number;
  tagGroupName: string;
  tagValues: TagValue[];
}

export interface WarehouseTag {
  tagGroupId: number;
  tagGroupName: string;
  tagValueId: number;
  tagValueName: string;
}

export interface GroupedOption {
  label: string;
  options: TagValue[];
}

export interface SelectOption {
  label: string;
  value: string;
  groupName?: string;
}