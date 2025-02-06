export type ModuleBrand = {
  id: string;
  name: string;
};

export type ModuleCreateBrand = {
  name: string;
};

export interface ModuleUpdateBrand extends Partial<ModuleBrand> {
  id: string;
}

export type ModuleDeleteBrand = {
  id: string;
};
