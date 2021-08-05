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


    <div className="upper">
    <h1 className="mainbodyhead">What are you<br /> having for lunch?</h1>
    <div  className="footer2  ">
    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis dolor laboriosam iure sint nam voluptas reiciendis ullam praesentium.</p>
<div className="line"></div>
</div>
</div>

<div className="cardcontain">

<div className="card">
<img 
className="image"
src="/mexicantaco.jpg" alt=""/>

<div className="name">
<p>Mexican Taco</p>
</div>


</div>

<div className="card">
<img 
className="image"
src="/pizza.jpg" alt=""/>

<div className="name">
<p>Farmhouse Pizza</p>
</div>


</div>

<div className="card">
<img 
className="image"
src="/chickenburger.jpg" alt=""/>

<div className="name">
<p>Chicken Burger</p>
</div>


</div>
<div className="card">
<img 
className="image"
src="/nachos.jpg" alt=""/>

<div className="name">
<p> Loaded Nachos</p>
</div>


</div>
<div className="card hide">
<img 
className="image"
src="/noodles.jpg" alt=""/>

<div className="name">
<p>Hakka Noodles</p>
</div>


</div>


</div>
<div  className="footer show ">
    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis dolor laboriosam iure sint nam voluptas reiciendis ullam praesentium.</p>
<div className="line"></div>
</div>



            
        </div>
    )
}

export default Mainbody
