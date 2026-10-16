import { Link } from 'react-router-dom';
import { blogPath, blogPosts } from '../../data/blogPosts';
import { Seo } from '../../components/seo/Seo';
import { Breadcrumbs } from '../../components/shared/Breadcrumbs/Breadcrumbs';
import { PageHero } from '../../components/shared/PageHero/PageHero';
import { formatDate } from '../../utils/dates';
import styles from './Article.module.css';

export function BlogIndex() {
  const posts = [...blogPosts].sort((a, b) => b.datePublished.localeCompare(a.datePublished));

  return (
    <>
      <Seo page="blog" />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      <PageHero
        badge="Insights · Pricing guides · How-tos"
        title="Straight answers on websites, apps and software"
        subtitle="Honest pricing guides and comparisons from the senior UK engineers at 2xdev — so you can plan, budget and choose with confidence."
      />
      <div className={styles.grid}>
        {posts.map((post) => (
          <Link key={post.slug} to={blogPath(post.slug)} className={styles.postCard}>
            <span className={styles.category}>{post.category}</span>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
            <span className={styles.postMeta}>
              {formatDate(post.datePublished)} · {post.readingMinutes} min read
            </span>
            <span className={styles.readMore}>Read the guide →</span>
          </Link>
        ))}
      </div>
    </>
  );
}
