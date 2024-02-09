import { FilterProductsEffect } from "@store/products/effects/filter-products.effect";
import { GetAllProductsEffect } from "@store/products/effects/get-all-products.effect";
import { GetBestSellersProductsEffect } from "@store/products/effects/get-best-sellers-products.effect";
import { GetCategoriesEffect } from "@store/products/effects/get-categories.effect";
import { GetFeaturedProductsEffect } from "@store/products/effects/get-featured-products.effect";
import { GetLatestProductsEffect } from "@store/products/effects/get-latest-products.effect";
import { GetNewArrivalsProductsEffect } from "@store/products/effects/get-new-arrivals-products.effect";
import { GetProductEffect } from "@store/products/effects/get-product.effect";
import { ProductsLoadingsEffect } from "@store/products/effects/products-loadings.effect";

const AllProductsEffects = [
  FilterProductsEffect,
  GetAllProductsEffect,
  GetBestSellersProductsEffect,
  GetCategoriesEffect,
  GetFeaturedProductsEffect,
  GetLatestProductsEffect,
  GetNewArrivalsProductsEffect,
  GetProductEffect,
  ProductsLoadingsEffect,
];

export default AllProductsEffects;
