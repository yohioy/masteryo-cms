import Link from 'next/link'
import { getSortedPostsData } from '../../lib/blog'
import React from "react";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Blog ({ allPostsData }) {
    return (
        <section>
            <h2>Blog</h2>
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
        </section>
    )

}
