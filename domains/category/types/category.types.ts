import { CategoryColor } from '@/domains/category/constants';
import { IconName } from '@/shared/ui/icon';

export interface CategoryApiResponse {
  id: number;
  categoryName: string;
}

export interface Category {
  id: number;
  categoryName: string;
  categoryIconName: IconName;
  categoryColor: CategoryColor;
}

export interface CreateCategoryRequest {
  categoryName: string;
}
