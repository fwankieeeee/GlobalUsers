import { SortOrderOptions, SortOptions } from "../types";

type SortProps = {
  sortOrder: SortOrderOptions;
  sortBy: SortOptions;
  onPressSortBy: () => void;
  onPressResetSort: () => void;
};

export type { SortProps };
