const data=[
    {name:"About"},
    {name:"Services"},
    {name:"Cuisine"},
    {name:"Gallery"},
    {name:"Contact"},
    {name:"Book"},
]


function Sidebar() {
    return (
        <div class="sidebar">
            <h1>Lorem Ispum</h1>
            <div class="sideitem">
                
                    <p class="sideitemname">About</p>
                    <div class="active"></div>
                    <p class="sideitemname">Services</p>
                    <p class="sideitemname">Cuisine</p>
                    <p class="sideitemname">Gallery</p>
                    <p class="sideitemname">Contact</p>
                    <p class="sideitemname">Book</p>
             
            </div>
            <div class="cartbutton">
            <button>Cart</button>
            </div>
            

            
            
        </div>
    )
}

export default Sidebar
