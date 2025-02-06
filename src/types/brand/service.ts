import {
  BaseFilterable,
  Context,
  FindConfig,
  IModuleService,
  RestoreReturn,
} from "@medusajs/types";
import { ModuleBrand, ModuleCreateBrand, ModuleUpdateBrand } from "@starter/types/brand/module";


export interface ModuleBrandFilters
  extends BaseFilterable<ModuleBrandFilters> {
  q?: string;
  id?: string | string[];
}

/**
 * The main service interface for the Brand Module.
 */
export interface IBrandModuleService extends IModuleService {
  /* Entity: Companies */
  createBrands(
      data: ModuleCreateBrand,
      sharedContext?: Context
  ): Promise<ModuleBrand>;

  retrieveBrand(
      id: string,
      config?: FindConfig<ModuleBrand>,
      sharedContext?: Context
  ): Promise<ModuleBrand>;

  updateBrands(
      data: ModuleUpdateBrand,
      sharedContext?: Context
  ): Promise<ModuleBrand>;

  listBrands(
      filters?: ModuleBrandFilters,
      config?: FindConfig<ModuleBrand>,
      sharedContext?: Context
  ): Promise<ModuleBrand[]>;

  deleteBrands(ids: string[], sharedContext?: Context): Promise<void>;

  softDeleteBrands(ids: string[], sharedContext?: Context): Promise<void>;

  restoreBrands<TReturnableLinkableKeys extends string = string>(
      ids: string[],
      config?: RestoreReturn<TReturnableLinkableKeys>,
      sharedContext?: Context
  ): Promise<Record<TReturnableLinkableKeys, string[]> | void>;

}
