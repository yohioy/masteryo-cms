import {getAllPostIds, getPostData, getSortedPostsData} from '../../lib/blog'
import Link from "next/link";
import React from "react";
// import Admin from "../../components/Layout/Admin";

function Post({ postData, allPostsData }) {
    return (
        <div>
            {postData.title}
            <br />
            {postData.date}

            <ul>
                {allPostsData.map(({ id, date, title }) => (
                    <li key={id}>
                        <Link href={`/blog/${id}`} key={id}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small>{date}</small>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    const allPostsData = getSortedPostsData()
    return {
        props: {
            postData,
            allPostsData
        }
    }
}

export default Post;
