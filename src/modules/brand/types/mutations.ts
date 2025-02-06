import { BrandDTO } from "./common";

export interface CreateBrandDTO
  extends Omit<Partial<BrandDTO>, "id"> {}

export interface UpdateBrandDTO extends Partial<BrandDTO> {
  id: string;
}

export interface DeleteBrandDTO {
  id: string;
}
