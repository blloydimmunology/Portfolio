import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

export default function BlogPost({ post }) {
  return (
    <article className="max-w-[680px] mx-auto">
      {/* Header */}
      <header className="mb-12">
        <p className="text-xs uppercase tracking-wider text-primary-accent font-medium mb-4" style={{ letterSpacing: '0.05em' }}>
          {post.topic}
        </p>

        <h1 className="text-4xl font-semibold text-primary-text mb-4 font-serif" style={{ lineHeight: '1.3' }}>
          {post.title}
        </h1>

        <div className="text-sm text-secondary-text mb-8">
          {post.date}
        </div>

        {post.subtopics && post.subtopics.length > 0 && (
          <>
            <div className="border-t border-divider my-8" />
            <div className="flex gap-2 flex-wrap text-sm text-tertiary-text">
              {post.subtopics.map((subtopic, index) => (
                <span key={subtopic}>
                  {subtopic}
                  {index < post.subtopics.length - 1 && ' |'}
                </span>
              ))}
            </div>
          </>
        )}
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-semibold text-primary-text mt-12 mb-4 font-serif" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-xl font-semibold text-primary-text mt-8 mb-3 font-serif" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="text-base text-primary-text mb-6" style={{ lineHeight: '1.7' }} {...props} />
            ),
            a: ({ node, ...props }) => (
              <a className="text-primary-accent underline hover:text-primary-accent-hover transition-colors duration-200" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="mb-6 space-y-2 text-primary-text" style={{ lineHeight: '1.7' }} {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="mb-6 space-y-2 text-primary-text" style={{ lineHeight: '1.7' }} {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote className="border-l-[3px] border-primary-accent pl-6 italic text-secondary-text my-6" {...props} />
            ),
            code: ({ node, inline, ...props }) =>
              inline ? (
                <code className="bg-gray-100 px-1.5 py-0.5 text-sm font-mono" {...props} />
              ) : (
                <code className="block bg-gray-100 p-4 text-sm font-mono overflow-x-auto my-6" {...props} />
              ),
            img: ({ node, ...props }) => (
              <img className="w-full my-6" {...props} />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
