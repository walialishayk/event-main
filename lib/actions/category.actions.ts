"use server";

import { CreateCategoryParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import Category from "../database/models/category.model";

/**
 * Create a new category with a validated name.
 */
export const createCategory = async ({ categoryName }: CreateCategoryParams) => {
  try {
    await connectToDatabase();
    if (!categoryName || typeof categoryName !== "string" || categoryName.trim() === "") {
      throw new Error("Category name is required.");
    }

    const trimmedName = categoryName.trim();

    const newCategory = await Category.create({ name: trimmedName });

    return JSON.parse(JSON.stringify(newCategory));
  } catch (error: any) {
    console.error("createCategory error:", error?.message || error);
    handleError(error);
  }
};

/**
 * Get all categories.
 */
export const getAllCategories = async () => {
  try {
    await connectToDatabase();

    const categories = await Category.find();

    return JSON.parse(JSON.stringify(categories));
  } catch (error: any) {
    console.error("getAllCategories error:", error?.message || error);
    handleError(error);
  }
};

// "use client"

// import { useState } from "react"
// import { createCategory } from "@/lib/actions/category.actions"
// import { useRouter } from "next/navigation"

// export default function CategoryForm() {
//   const [name, setName] = useState("")
//   const router = useRouter()

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!name.trim()) {
//       alert("Please enter a category name.")
//       return
//     }

//     try {
//       await createCategory({ categoryName: name })
//       router.push("/categories") // or wherever
//     } catch (err) {
//       console.error("Category creation failed:", err)
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter category name"
//       />
//       <button type="submit">Create Category</button>
//     </form>
//   )
// }
