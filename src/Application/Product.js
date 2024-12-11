

const products=[
    {id:1,
    name:"Airpods Max",
    price:500,
    image:'/src/assets/product/airpods-max.png',
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

    {   id:2,
        name:"Apple-watch",
        price:200,
        image:'/src/assets/product/apple-watch.png',
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

    {id:3,
        name:"Echo dot",
        price:80,
        image:'/src/assets/product/echo-dot.png',
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},


    {id:4,
        name:"Iphone 15",
        price:1500,
        image:'/src/assets/product/iphone-15.png',
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

    {id:5,
        name:"Pixel 8",
        price:899,
        image:'/src/assets/product/pixel-8.png',
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

    {id:6,
        name:"Pixel buds",
        price:150,
        image:'/src/assets/product/pixel-buds.png',
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

    {id:7,
        name:"Quietcomfort",
        price:99,
        image:'/src/assets/product/Quietcomfort.png',
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

    {id:8,
        name:"Soundlink",
        price:250,
        image:'/src/assets/product/Soundlink.png',
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},
]

export const getProduct=(req, res)=>res.status(200).json(products).send()

export const createProduct=(req, res)=>{
    
    products.push(req.body)
    res.status(201).send()
}

export const getProducts=(req, res)=>{
    const id =req.params.id;
    const product=products.find((pro)=>pro.id==id)
    res.status(200).json(product).send()
}

export const deleteProduct=(req,res)=>{
    const id=req.params.id;
    const index=products.findIndex((pro)=>pro.id==id)
    products.splice(index,1)
    res.status(200).json(products).send()
}

export const updateProduct=(req,res)=>{
    const id=req.params.id;
    const index=products.findIndex((pro)=>pro.id==id)
    products[index]=req.body
    res.status(200).json(products).send()
}