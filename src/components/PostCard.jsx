import Link from 'next/link';

export default function PostCard({ post }) {
  const postUrl = `/${post.topic.toLowerCase()}/${post.slug}`;

  return (
    <Link href={postUrl} className="block group">
      <article className="bg-white overflow-hidden border border-divider hover:border-primary-accent transition-colors duration-200 h-full flex flex-col">
        {/* Image or placeholder */}
        {post.image ? (
          <div className="w-full aspect-[16/9] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-full aspect-[16/9] bg-primary-accent-light flex items-center justify-center">
            <span className="text-5xl font-serif text-primary-accent opacity-30">
              {post.topic.charAt(0)}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3 text-sm">
            <span className="text-secondary-text">{post.date}</span>
            <span className="text-tertiary-text">•</span>
            <span className="text-xs uppercase tracking-wider text-primary-accent font-medium" style={{ letterSpacing: '0.05em' }}>
              {post.topic}
            </span>
          </div>

          <h3 className="text-xl font-semibold text-primary-text mb-3 leading-snug group-hover:text-primary-accent transition-colors duration-200 font-serif">
            {post.title}
          </h3>

          <p className="text-[15px] text-secondary-text leading-relaxed mb-4 flex-1" style={{ lineHeight: '1.6' }}>
            {post.preview}
          </p>

          {post.subtopics && post.subtopics.length > 0 && (
            <div className="flex gap-2 flex-wrap pt-3 border-t border-divider text-xs text-tertiary-text">
              {post.subtopics.slice(0, 3).map((subtopic, index) => (
                <span key={subtopic}>
                  {subtopic}
                  {index < Math.min(post.subtopics.length, 3) - 1 && ' |'}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
