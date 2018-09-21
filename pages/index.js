import Layout from '../components/Layout'
import Link from 'next/link'
import "../styles.css"

export default () => (
    <Layout>
        <h1><span className="first">S</span>olverant</h1> <span>Enterprise Technical Solutions for Small Businesses</span>
        
        <p>That's right.  Why should big businesses have all the fun?</p>
        <p>Test</p>

        {/* <Link href="/">
            <a>No Styling</a>
        </Link> */}

        <style jsx>{`
            h1, a, p {
                font-family: "Arial";
                font-size: 20px;
            }
            .first {
                font-family: "Dawning of a New Day";
                font-size: 22px;
            }
        `}</style>
    </Layout>
)