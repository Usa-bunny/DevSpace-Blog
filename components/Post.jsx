import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
    let x = 10;
    function apalah(a){
        x = 5;
        console.log(x + a)
    }
    apalah(x)
  return (
    <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
      <Image
        src={post.frontmatter.cover_image}
        alt={`${post.slug}-image`}
        height={420}
        width={600}
        className="mb-4 rounded"
      />

      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">
            {post.frontmatter.date}
        </span>
        <div>{post.frontmatter.category}</div>
      </div>

      <div className="mt-2">
        <Link href={`/blog/${post.slug}`} className="text-2xl text-gray-700 font-bold hover:underline">{post.frontmatter.title}</Link>
        <p className="mt-2 text-gray-600"></p>
      </div>
    </div>
  );
}
