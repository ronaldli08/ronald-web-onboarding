"use client";

import { useEffect, useState } from "react";
import { fetchAllRows, PostRow } from "@/actions/supabase/queries/query";
import { BlueprintLogo } from "@/assets/logos/BlueprintLogo";
import Post from "@/components/Post";
import styles from "@/components/styles.module.css";

export default function Home() {
  const [posts, setPosts] = useState<PostRow[] | null>(null);

  useEffect(() => {
    fetchAllRows().then(setPosts);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.topBar}>
          <div className={styles.logo}>
            <BlueprintLogo />
          </div>
          <span className={styles.headerText}>
            <span className={styles.blueprint}>blueprint</span> volunteers
          </span>
        </div>

        <div className={styles.contentScroll}>
          {posts?.map(post => (
            <Post
              key={post.id}
              username={post.user_name}
              npo={post.npo_name}
              city={post.Locations.city_name}
              state={post.Locations.state_abbr}
              text={post.post_text}
              image={post.image_link}
              likeCount={post.num_likes}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
