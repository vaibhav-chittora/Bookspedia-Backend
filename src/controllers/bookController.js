import { getBookService } from "../services/book.js";

export const getBook = async (req, res) => {
  try {
    const data = await getBookService(req.body);
    console.log(req.data);
    return res.status(200).json({
      success: true,
      message: "Books Fetched Successfully",
      data: data,
    });
  } catch (error) {
    console.log("Error in books Controller", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
