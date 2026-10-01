"use client";

import { FiHeart as HeartIcon } from "react-icons/fi";
import { GoPaperAirplane as ShareIcon } from "react-icons/go";
import { LuCircle as ProfileIcon } from "react-icons/lu";
import { TbMessageCircle } from "react-icons/tb";
import { BlueprintLogo } from "@/assets/logos/BlueprintLogo";
import styles from "./styles.module.css";

export default function Home() {
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
          <div className={styles.post}>
            <div className={styles.postHeader}>
              <div className={styles.profileIcon} />
              <div>
                <p><b>neha32</b> at <b>Mission Bit</b></p>
                <div className={styles.location}>
                  <p>San Francisco, CA</p> 
                </div>
              </div>
            </div>
            <img
              src="https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg"
              alt="San Francisco"
              className={styles.image}
            />
            <p>
              This past weekend, I taught at Mission Bit. I was working with a
              group of high school students who were building their first web
              pages. I really enjoyed being able to help guide 10 students on
              learning CS fundamentals through a project! They were all really
              eager to learn, and I&#39;m glad I signed up. Highly recommend to
              any other software engineers interested in volunteering! Sign-up
              here: https://missionbit.org/get-involved/volunteer-with-us/
            </p>
            <div className={styles.stats}>
              <p>3 Likes</p>
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
          <div className={styles.post}>
            <div className={styles.postHeader}>
              <div className={styles.profileIcon} />
              <div>
                <p><b>aiden_ugh</b> at <b>Boys and Girls Club</b></p>
                <p>Oakland, CA</p>
              </div>
            </div>
            <p>I recently volunteered at my local Boys and Girls Club!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
