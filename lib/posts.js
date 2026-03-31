import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "@/utils";

const files = fs.readdirSync(path.join("posts"));

export function getPosts() {
  const posts = files.map((filename) => {
    const slug = filename
      .toLowerCase()
      .replace(".md", "")
      .trim()
      .replaceAll(" ", "-");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8",
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return { slug, frontmatter };
  });

  return posts.sort(sortByDate);
}
