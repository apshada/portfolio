import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostCard from '../../components/PostCard';

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

const BlogPage =  (props: any) => {
    const { posts } = props
    return(
        posts.map((p: any) => {
        return <PostCard post={p} key={p.id} />
        })
    )
}


export default BlogPage