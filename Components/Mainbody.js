import Image from "next/image"

const food=[
    {name:"Mexican Taco", image:"/mexicantaco.jpg"},
    {name:"Farmhouse Pizza", image:"/pizza.jpg"},
    {name:" Chicken Burger", image:"/chickenburger.jpg"},
    {name:"Loaded Nachos", image:"/nachos.jpg"},
    {name:"Hakka Noodles", image:"/noodles.jpg"},
    
]


function Mainbody() {
    return (
        <div className="mainbody">

<div >
    <div className="upper">
    <h1 className="mainbodyhead">What are you<br /> having for lunch?</h1>
    <div  className="footer2  ">
    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis dolor laboriosam iure sint nam voluptas reiciendis ullam praesentium.</p>
<div className="line"></div>
</div>
</div>

    <div className="foodcontainer">

    <div className="container2">
    <div className="foodimage" >
        <img className="image" src="/mexicantaco.jpg"
        layout="fill"
        />
        <div className="name"> <p>Mexican Taco</p></div>
       
    </div>
    </div>
    <div className="container2">
    <div className="foodimage" >
        <img className="image" src="/pizza.jpg"
        layout="fill"
        />
        <div className="name"> <p>Farmhouse Pizza</p></div>
       
    </div>
    </div>
    <div className="container2">
    <div className="foodimage" >
        <img className="image" src="/chickenburger.jpg"
        layout="fill"
        />
        <div className="name"> <p>chicken burger</p></div>
       
    </div>
    </div>
    <div className="container2">
    <div className="foodimage" >
        <img className="image" src="/nachos.jpg"
        layout="fill"
        />
        <div className="name"> <p>Loaded Nachos</p></div>
       
    </div>
    </div>
    <div className="container2 hidden">
    <div className="foodimage" >
        <img className="image" src="/noodles.jpg"
        layout="fill"
        />
        <div className="name"> <p>Hakka Noodles</p></div>
       
    </div>
    </div>
    

    </div>
    <div  className="footer">
    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis dolor laboriosam iure sint nam voluptas reiciendis ullam praesentium.</p>
<div className="line"></div>
</div>
    
</div>

            
        </div>
    )
}

export default Mainbody
