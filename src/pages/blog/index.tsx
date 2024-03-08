import { query } from '../../lib/hashnode';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Post {
  coverImage?: { // Make coverImage optional to handle cases where it might be missing
    url: string;
  };
  id: string;
  publishedAt: string;
  slug: string;
  title: string;
  url: string; // Assuming you have a URL property for each post
}

// Use async/await syntax for cleaner error handling
async function getPosts(): Promise<Post[]> {
  const { data: { publication } } = await query({
    query: `
      query($host: String!) {
        publication(host: $host) {
          posts(first: 10) {
            edges {
              node {
                coverImage {
                  url
                }
                id
                publishedAt
                slug
                title
                url
              }
            }
          }
        }
      }
    `,
    variables: {
      host: 'hada.hashnode.dev',
    },
  });

  return publication.posts.edges.map(({ node }: { node: Post }) => node).filter((post: Post) => post.coverImage?.url);
}

const BlogPage = () => {
  const router = useRouter();
  // Call getPosts() inside the component to fetch data dynamically
  const [posts, setPosts] = useState<Post[]>([]); // Use React useState for state management
  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    };
    fetchData();
  }, []); // Empty dependency array to fetch data only once on component mount

  const handleCardClick = (url: string) => {
    window.open(url, '_blank'); // Open in new tab
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-12">
      <ul className="space-y-4 md:grid md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 lg:gap-x-4">
        {posts.map((post) => (
          <motion.li
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer" // Add cursor-pointer for hover indication
            onClick={() => handleCardClick(post.url)} // Call handleCardClick on click
            initial="hidden"
            animate="visible"
            layout
          >
            <Image
              width={600}
              height={400}
              src={post.coverImage?.url ?? '/default-image.png'} // Set default image if coverImage is missing
              alt=""
              className="object-cover w-full h-48 md:h-64"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-sm text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString('en-us', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
