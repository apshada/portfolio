import Link from 'next/link'
import React from 'react'


export default function PostCard({post}: any) {
  console.log(post)
  return (
    // A card to wrap all elements
    <Link href={{
      pathname: `blog/${post.frontMatter.fileName}`
    }}>
    <div>
        <div>
            <h2>{post.frontMatter.title}</h2>
            <p>{post.frontMatter.description}</p>
        </div>
        <div>
            <h2> 📅{post.frontMatter.date}</h2>
            <p>⏰{post.frontMatter.readTime} min read</p>
        </div>
    </div>
    </Link>
  )
}