import { productType } from "@/types/response";

// import { baseUrl } from "../config.json";
const baseURL = process.env.BASEURL;

export const get_all_products = async (): Promise<productType[]> => {
  try {
    const res = await fetch(`${baseURL}/products`, {
      cache: "force-cache",
      method: "GET",
    });
    const data: productType[] = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const get_single_product = async (
  productId: number
): Promise<productType> => {
  try {
    const res = await fetch(`${baseURL}/products/${productId}`, {
      cache: "force-cache",
      method: "GET",
    });
    const data: productType = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
