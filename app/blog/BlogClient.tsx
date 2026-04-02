"use client";

import { useEffect, useState } from "react";
import { getPosts } from "../../lib/api";

export default function BlogClient() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPosts(20);
      console.log("post", data); // ✅ browser console
    //   debugger; // ✅ debugger works
      setPosts(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Check Console 🔥</h1>
      <p>Total posts: {posts.length}</p>
    </div>
  );
}