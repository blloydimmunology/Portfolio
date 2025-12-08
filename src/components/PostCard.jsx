import Link from 'next/link';

export default function PostCard({ post }) {
  const postUrl = `/${post.topic.toLowerCase()}/${post.slug}`;

  return (
    <Link href={postUrl} className="block group">
      <article className="bg-white rounded-lg overflow-hidden shadow-sm card-hover border border-neutral-200/60">
        {/* Image or placeholder */}
        {post.image ? (
          <div className="w-full h-56 overflow-hidden relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ) : (
          <div className="w-full h-56 bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
            <span className="text-6xl opacity-20 relative z-10">🧬</span>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
              {post.topic}
            </span>
            <span className="text-xs text-neutral-400">•</span>
            <span className="text-xs text-neutral-500">{post.date}</span>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mb-3 leading-snug group-hover:text-blue-900 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3">
            {post.preview}
          </p>

          {post.subtopics && post.subtopics.length > 0 && (
            <div className="flex gap-2 flex-wrap pt-2 border-t border-neutral-100">
              {post.subtopics.slice(0, 3).map(subtopic => (
                <span
                  key={subtopic}
                  className="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-full font-medium hover:bg-neutral-200 transition-colors"
                >
                  {subtopic}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
