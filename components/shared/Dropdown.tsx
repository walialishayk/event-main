import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICategory } from "@/lib/database/models/category.model";
import { startTransition, useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "../ui/input";
import {
  createCategory,
  getAllCategories,
} from "@/lib/actions/category.actions";

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
};

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    createCategory({
      categoryName: newCategory.trim(),
    }).then((category) => {
      setCategories((prevState) => [...prevState, category]);
    });
  };

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();

      categoryList && setCategories(categoryList as ICategory[]);
    };

    getCategories();
  }, []);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 &&
          categories.map((category) => (
            <SelectItem
              key={category._id}
              value={category._id}
              className="select-item p-regular-14"
            >
              {category.name}
            </SelectItem>
          ))}

        <AlertDialog>
          <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500">
            Add new category
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>New Category</AlertDialogTitle>
              <AlertDialogDescription>
                <Input
                  type="text"
                  placeholder="Category name"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => startTransition(handleAddCategory)}
              >
                Add
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { ICategory } from "@/lib/database/models/category.model";
// import { startTransition, useEffect, useState } from "react";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog";
// import { Input } from "../ui/input";
// import {
//   createCategory,
//   getAllCategories,
// } from "@/lib/actions/category.actions";

// type DropdownProps = {
//   value?: string;
//   onChangeHandler?: (value: string) => void;
// };

// const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
//   const [categories, setCategories] = useState<ICategory[]>([]);
//   const [newCategory, setNewCategory] = useState("");
//   const [openDialog, setOpenDialog] = useState(false);

//   const handleAddCategory = async () => {
//     const category = await createCategory({
//       categoryName: newCategory.trim(),
//     });

//     startTransition(() => {
//       setCategories((prevState) => [...prevState, category]);
//       setNewCategory("");
//       setOpenDialog(false);
//     });
//   };

//   useEffect(() => {
//     const getCategories = async () => {
//       const categoryList = await getAllCategories();
//       if (categoryList) setCategories(categoryList as ICategory[]);
//     };

//     getCategories();
//   }, []);

//   return (
//     <>
//       <Select onValueChange={onChangeHandler} defaultValue={value}>
//         <SelectTrigger className="select-field">
//           <SelectValue placeholder="Category" />
//         </SelectTrigger>
//         <SelectContent>
//           {categories.length > 0 &&
//             categories.map((category) => (
//               <SelectItem
//                 key={category._id}
//                 value={category._id}
//                 className="select-item p-regular-14"
//               >
//                 {category.name}
//               </SelectItem>
//             ))}

//           <div
//             onClick={() => setOpenDialog(true)}
//             className="p-medium-14 flex w-full cursor-pointer rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500"
//           >
//             + Add new category
//           </div>
//         </SelectContent>
//       </Select>

//       <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
//         <AlertDialogContent className="bg-white">
//           <AlertDialogHeader>
//             <AlertDialogTitle>New Category</AlertDialogTitle>
//             <AlertDialogDescription>
//               Enter a new category name:
//             </AlertDialogDescription>
//           </AlertDialogHeader>

//           <div className="mt-4">
//             <Input
//               type="text"
//               placeholder="Category name"
//               value={newCategory}
//               onChange={(e) => setNewCategory(e.target.value)}
//             />
//           </div>

//           <AlertDialogFooter>
//             <AlertDialogCancel>Cancel</AlertDialogCancel>
//             <AlertDialogAction onClick={handleAddCategory}>
//               Add
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </>
//   );
// };

// export default Dropdown;
