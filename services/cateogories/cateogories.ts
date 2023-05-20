import { categoriesType } from "@/types/response";

// import { baseUrl } from "../config.json";
const baseURL = process.env.BASEURL;

export const get_all_categories = async (): Promise<categoriesType[]> => {
  try {
    const res = await fetch(`${baseURL}/categories`, {
      cache: "force-cache",
      method: "GET",
    });
    const data: categoriesType[] = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
