import { getBook } from "../repositories/book.js";

export const getBookService = async () => {
  try {
    const data = await getBook();
    return data;
  } catch (error) {
    console.log("Error in getBook service", error);
  }
};
