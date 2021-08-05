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
        <div class="mainbody">

<div >
    <div class="upper">
    <h1 class="mainbodyhead">What are you<br /> having for lunch?</h1>
    <div  class="footer2  ">
    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis dolor laboriosam iure sint nam voluptas reiciendis ullam praesentium.</p>
<div class="line"></div>
</div>
</div>

    <div class="foodcontainer">

    <div class="container2">
    <div class="foodimage" >
        <img class="image" src="/mexicantaco.jpg"
        layout="fill"
        />
        <div class="name"> <p>Mexican Taco</p></div>
       
    </div>
    </div>
    <div class="container2">
    <div class="foodimage" >
        <img class="image" src="/pizza.jpg"
        layout="fill"
        />
        <div class="name"> <p>Farmhouse Pizza</p></div>
       
    </div>
    </div>
    <div class="container2">
    <div class="foodimage" >
        <img class="image" src="/chickenburger.jpg"
        layout="fill"
        />
        <div class="name"> <p>chicken burger</p></div>
       
    </div>
    </div>
    <div class="container2">
    <div class="foodimage" >
        <img class="image" src="/nachos.jpg"
        layout="fill"
        />
        <div class="name"> <p>Loaded Nachos</p></div>
       
    </div>
    </div>
    <div class="container2 hidden">
    <div class="foodimage" >
        <img class="image" src="/noodles.jpg"
        layout="fill"
        />
        <div class="name"> <p>Hakka Noodles</p></div>
       
    </div>
    </div>
    

    </div>
    <div  class="footer">
    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis dolor laboriosam iure sint nam voluptas reiciendis ullam praesentium.</p>
<div class="line"></div>
</div>
    
</div>

            
        </div>
    )
}

export default Mainbody
