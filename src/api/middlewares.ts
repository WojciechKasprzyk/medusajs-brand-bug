import {
  MedusaNextFunction,
  MedusaRequest,
  MedusaResponse, validateAndTransformBody, validateAndTransformQuery,
} from "@medusajs/framework";
import { defineMiddlewares } from "@medusajs/medusa";
import { adminMiddlewares } from "./admin/middlewares";
import { storeMiddlewares } from "./store/middlewares";
import { PostAdminCreateBrand } from "../admin/brands/validators";
import { z } from "zod";
import { createFindParams } from "@medusajs/medusa/api/utils/validators";

export const GetBrandsSchema = createFindParams();

export default defineMiddlewares({
  routes: [
    // ...adminMiddlewares,
    // ...storeMiddlewares,
    // {
    //   matcher: "/store/customers/me",
    //   middlewares: [
    //     (req: MedusaRequest, res: MedusaResponse, next: MedusaNextFunction) => {
    //       req.allowed = [
    //         "orders",
    //         "addresses",
    //         "employee",
    //         "employees",
    //       ];
    //
    //       next();
    //     },
    //   ],
    // },
    {
      matcher: "/admin/brands",
      method: "POST",
      middlewares: [
        validateAndTransformBody(PostAdminCreateBrand),
      ],
    },
    {
      matcher: "/admin/products",
      method: ["POST"],
      additionalDataValidator: {
        brand_id: z.string().optional(),
      },
    },
    {
      matcher: "/admin/brands",
      method: "GET",
      middlewares: [
        // validateAndTransformQuery(
        //     GetBrandsSchema,
        //     {
        //       defaults: [
        //         "id",
        //         "name",
        //         "products.*",
        //       ],
        //       isList: true,
        //     }
        // ),
      ],
    },
  ],
});
