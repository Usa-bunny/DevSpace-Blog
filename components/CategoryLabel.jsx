import Link from "next/link";
import { COLOR_KEY } from "@/config";

export default function CategoryLabel({ children }) {
  return (
    <div
      style={{ backgroundColor: COLOR_KEY[children] }}
      className="px-2 py-1 text-gray-100 font-bold rounded"
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
