import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';



export async function getStaticPaths(){
    const files = fs.readdirSync(path.join("posts")); // get all posts
    const paths = files.map((file) => { // for all files extract the slug
        return {
            params:{
                slug:file.replace(".mdx","")
            }
        }
    });
    return { // export the paths
        paths,
        fallback:false
    }
}

export async function getStaticProps({params:{slug}}: any){
    const fileData = fs.readFileSync(path.join("posts",slug+'.mdx'),'utf-8'); // get the file data
    const {data,content} = matter(fileData); // extract the front matter and the content
    const mdxSource = await serialize(content); // serialize the content
    return { // export the data
        props:{
            frontMatter:data,
            slug,
            mdxSource
        }
    }
}

export default function Post(props: any) {
    return (
        <div>
            {
                 (
                    <div>
                        
                            <title>{props.frontMatter.title}</title>
                        
                    <h1>{props.frontMatter.title}</h1>
                    
                    </div>
                )
            }
        </div>
    )
    }