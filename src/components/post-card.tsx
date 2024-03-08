import Link from 'next/link';

export default function PostCard({ post }: any) {
  return (
    <Link href={{ pathname: `blog/${post.frontMatter.fileName}` }}>
      <div className="rounded-lg shadow-md p-4 mb-4 cursor-pointer border border-gray-300 hover:border-blue-500">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{post.frontMatter.title}</h2>
          <p className="text-gray-600">{post.frontMatter.description}</p>
        </div>
        <div className="mt-2">
          <h2 className="text-sm font-medium text-gray-500">📅 {post.frontMatter.date}</h2>
          <p className="text-gray-500">⏰ {post.frontMatter.readTime} min read</p>
        </div>
      </div>
    </Link>
  );
}
