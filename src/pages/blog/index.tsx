import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostCard from '../../components/post-card';

export async function getStaticProps(){
	
    let files = fs.readdirSync(path.join("posts")); // get the files
	files = files.filter(file => file.split('.')[1] == "mdx"); // filter only the mdx files
    const posts = files.map(file => { // for each file extract the front matter and the slug
        const fileData = fs.readFileSync(path.join("posts",file),'utf-8');
        const {data} = matter(fileData);
        return {
        frontMatter:data,
        slug:file.split('.')[0]
        }
    });
    return{
        props:{
        posts
        }
    }
}

const BlogPage = ({ posts }: { posts: any[] }) => {
    return (
      <div className="p-4 md:p-8"> {/* Add padding */}
        {posts.map((p: any) => (
          <PostCard post={p} key={p.id} />
        ))}
      </div>
    );
  };
  

export default BlogPage