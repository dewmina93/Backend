

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

export const getProduct=(req, res,next)=>{
    try {
        return res.status(200).json(products).send()}
     catch (error) {
        next(error)
    }
    
}
export const createProduct=(req, res,next)=>{

    try {
        products.push(req.body)
    return res.status(201).json(products).send()

    } catch (error) {
        next(error)
    }
    
}

export const getProducts=(req, res,next)=>{
    try {
        const id =req.params.id;
    const product=products.find((pro)=>pro.id==id)

    if (! product) {
        return res.status(404). json({ message: "Product not found" }).send()
    }
    return res.status(200).json(product).send()

    } catch (error) {
        next(error)
    }
    
}

export const deleteProduct=(req,res,next)=>{
    try {
        const id=req.params.id;
    const index=products.findIndex((pro)=>pro.id==id)
    products.splice(index,1)

    if (index===-1) {
        return res.status(404).json({ message: "Product not found" }).send()
        
    }
    return res.status(200).json(products).send()

    } catch (error) {
        next(error)
    }
    
}

export const updateProduct=(req,res,next)=>{
    try {
        const id=req.params.id;
    const index=products.findIndex((pro)=>pro.id==id)
    products[index]=req.body

    if (index=== -1) {
        return res.status(404).json({ message: "Product not found" }).send()
        
    }
    return res.status(200).json(products).send()

    } catch (error) {
        next(error)
    }
    
}