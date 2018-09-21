import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = (props) => (
    <li>
        <Link as={`/blog/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <h1>Our Blog</h1>
        <ul>
            <PostLink id="Article-1" title="Article 1"/>
            <PostLink id="Article_2" title="Article 2"/>
            <PostLink id="Article3" title="Article 3"/>
        </ul>
    </Layout>
)