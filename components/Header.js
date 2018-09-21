import Link from 'next/link'

const linkStyle = {
    marginRight:20,
    float: 'right',
}

const headerStyle = {
    padding: '15px 5px',
    paddingBottom: 30,
    boxShadow: '0 5px 5px rgba(0, 0, 0, 0.6)'
}

const Header = () => (
    <div style={headerStyle}>

        <Link href="/blog">
            <a style={linkStyle}>Blog</a>
        </Link>

        <Link href="/contact">
            <a style={linkStyle}>Contact</a>
        </Link>

        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>

        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
    
        {/* <Link href="/shows">
            <a style={linkStyle}>Shows</a>
        </Link>

        <Link href="/markdown">
            <a style={linkStyle}>Markdown</a>
        </Link> */}

        <style jsx>{`
            a {
                text-decoration: none;
            }
            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </div>
)

export default Header