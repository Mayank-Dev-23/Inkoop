import {MenuAlt2Icon, ShoppingCartIcon} from "@heroicons/react/solid"

function Header() {
    return (
        <div className="header">
            <div><MenuAlt2Icon  className="icon"/></div>
            <div>
                <p>Lorem</p>
            </div>
            <div><ShoppingCartIcon className="icon" /></div>
        </div>
    )
}

export default Header
