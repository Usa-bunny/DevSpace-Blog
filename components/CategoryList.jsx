import Link from "next/link";
import { COLOR_KEY } from "@/config";

export default function CategoryList({ categories }) {
  return (
    <div className="w-full rounded-lg  mt-6">
      <h3 className="text-2xl bg-gray-800 text-white p-4 rounded">
        Blog Categories
      </h3>
      <ul className="divide-y divide-gray-300">
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
            <li
              style={{ backgroundColor: COLOR_KEY[category] }}
              className="p-3 m-4 cursor-pointer rounded-xl text-white font-bold hover:text-gray-800"
            >
              {category}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
