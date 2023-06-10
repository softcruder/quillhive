import React from 'react';
import { FiMessageSquare, FiEye, FiHeart, FiBookmark } from 'react-icons/fi';
import Image from 'next/image'
import styles from './Feed.module.scss';

interface FeedProps {
  author: {
    profilePicture: string;
    displayName: string;
    bio: string;
  };
  date: string;
  media: string;
  title: string;
  content: string;
  comments: number;
  views: number;
  likes: number;
  bookmarks: number;
}

const Feed: React.FC<FeedProps> = ({
  author,
  date,
  media,
  title,
  content,
  comments,
  views,
  likes,
  bookmarks,
}) => {
  return (
    <div className={styles.feed}>
      <div className={styles.header}>
        <div className={styles.authorInfo}>
          <Image
            className={styles.profilePicture}
            src={author.profilePicture}
            alt="Profile Picture"
            width='40'
            height='40'
          />
          <div className={styles.authorText}>
            <span className={styles.displayName}>{author.displayName}</span>
            <span className={styles.bio}>{author.bio}</span>
          </div>
        </div>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.mediaContainer}>
          <Image className={styles.media} src={media} alt="Featured Media" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{content}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.socialFeatures}>
          <div className={styles.socialIcon}>
            <FiMessageSquare />
            <span className={styles.stat}>{comments}</span>
          </div>
          <div className={styles.socialIcon}>
            <FiEye />
            <span className={styles.stat}>{views}</span>
          </div>
          <div className={styles.socialIcon}>
            <FiHeart />
            <span className={styles.stat}>{likes}</span>
          </div>
          <div className={styles.socialIcon}>
            <FiBookmark />
            <span className={styles.stat}>{bookmarks}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
