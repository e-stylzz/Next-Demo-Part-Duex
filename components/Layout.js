import Head from './Head'
import Header from './Header'

const layoutStyle = {
    margin: 10,
    padding: 5
}

const Layout = (props) => (
    <div>
        <Head />
        <Header />
        <div style={layoutStyle}>
            {props.children}
        </div>
    </div>
    
)

export default Layout