import './index.css'

function Header(products) {
    return (
        <div className='header'>
            <div className='header-container container'>
                <h1 className='header-logo'>Products</h1>
                <h3 className='header-counter'>
                    {products.className > 0 ? "You have: " + products.className + " products" : "No Products :("}
                </h3>
            </div>
        </div>
    )
}

export default Header