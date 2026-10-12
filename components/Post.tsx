import { FiHeart as HeartIcon } from "react-icons/fi";
import { GoPaperAirplane as ShareIcon } from "react-icons/go";
import { TbMessageCircle } from "react-icons/tb";
import Image from "next/image";
import styles from "./styles.module.css";

interface PostProps {
  username: string;
  npo: string;
  city: string;
  state: string;
  text: string;
  image: string;
  likeCount: number;
}

export default function Post({
  username,
  npo,
  city,
  state,
  text,
  image,
  likeCount,
}: PostProps) {
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <div className={styles.profileIcon} />
        <div>
          <p>
            <b>{username}</b> at <b>{npo}</b>
          </p>
          <div className={styles.location}>
            <p>
              {city}, {state}
            </p>
          </div>
        </div>
      </div>
      <Image
        src={image}
        alt={text}
        width={800}
        height={600}
        className={styles.image}
      />
      <p>{text}</p>
      <div className={styles.stats}>
        <p>{likeCount} Likes</p>
        <p>View 2 Comments</p>
      </div>
      <div className={styles.actions}>
        <div className={styles.leftActions}>
          <HeartIcon size={24} />
          <TbMessageCircle size={24} />
        </div>
        <ShareIcon size={24} />
      </div>
      <div className={styles.date}>
        <p>February 1</p>
      </div>
    </div>
  );
}
