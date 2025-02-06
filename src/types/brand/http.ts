import { FindParams, PaginatedResponse } from "@medusajs/types";
import { ModuleBrandFilters } from "@starter/types/brand/service";
import { QueryBrand } from "@starter/types/brand/query";


/* Filters */

export interface BrandFilterParams extends FindParams, ModuleBrandFilters {}

/* Admin */

/* Brand */
export type AdminBrandResponse = {
  brand: QueryBrand;
};

export type AdminBrandsResponse = PaginatedResponse<{
  brands: QueryBrand[];
}>;

export type AdminCreateBrand = {
  name: string;
};

export type AdminUpdateBrand = Partial<AdminCreateBrand>;

/* Store */

/* Brand */

export type StoreBrandResponse = {
  brand: QueryBrand;
};

export type StoreBrandsResponse = PaginatedResponse<{
  brands: QueryBrand[];
}>;

export type StoreBrandPreviewResponse = {
  brand: QueryBrand;
};

export type StoreCreateBrand = {
  name: string;
};

export type StoreUpdateBrand = {
  id: string;
  name: string;
};
