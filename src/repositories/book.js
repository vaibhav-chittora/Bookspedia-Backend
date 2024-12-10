import Book from "../schema/book.js";

export const getBook = async () => {
  try {
    const data = await Book.find();
    return data;
  } catch (error) {
    console.log("Error in Book Repository", error);
  }
};
