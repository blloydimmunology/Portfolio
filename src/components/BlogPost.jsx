import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

export default function BlogPost({ post }) {
  return (
    <article className="max-w-2xl mx-auto">
      {/* Post header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-3">
          {post.title}
        </h1>
        <p className="text-sm text-neutral-600">
          {post.date} • {post.topic}
        </p>
      </header>

      {/* Post content */}
      <div className="prose prose-sm prose-neutral max-w-none
                      prose-headings:text-blue-900 prose-headings:font-bold prose-headings:text-center
                      prose-a:text-blue-900 prose-a:no-underline hover:prose-a:underline
                      prose-code:text-blue-900 prose-code:bg-blue-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                      prose-pre:bg-neutral-900 prose-pre:text-neutral-100
                      prose-img:mx-auto prose-img:rounded">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      {/* Subtopics */}
      {post.subtopics && post.subtopics.length > 0 && (
        <div className="mt-12 pt-8 border-t border-blue-100 text-center">
          <p className="text-xs text-neutral-600 mb-3">Topics</p>
          <div className="flex gap-2 justify-center flex-wrap">
            {post.subtopics.map(subtopic => (
              <span
                key={subtopic}
                className="text-xs px-3 py-1 bg-blue-100 text-blue-900 rounded"
              >
                {subtopic}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
