import Product from "../infastructure/schemas/product.js"

const products=[
    {id:1,
    categoryId:1,
    name:"Airpods Max",
    price:500,
    image:'/src/assets/product/airpods-max.png',
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

    {   id:2,
        categoryId:5,
        name:"Apple-watch",
        price:200,
        image:'/src/assets/product/apple-watch.png',
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

    {id:3,
        categoryId:3,
        name:"Echo dot",
        price:80,
        image:'/src/assets/product/echo-dot.png',
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},


    {id:4,
        categoryId:4,
        name:"Iphone 15",
        price:1500,
        image:'/src/assets/product/iphone-15.png',
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

    {id:5,
        categoryId:4,
        name:"Pixel 8",
        price:899,
        image:'/src/assets/product/pixel-8.png',
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

    {id:6,
        categoryId:2,
        name:"Pixel buds",
        price:150,
        image:'/src/assets/product/pixel-buds.png',
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

    {id:7,
        categoryId:1,
        name:"Quietcomfort",
        price:99,
        image:'/src/assets/product/Quietcomfort.png',
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},

    {id:8,
        categoryId:3,
        name:"Soundlink",
        price:250,
        image:'/src/assets/product/Soundlink.png',
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo explicabo, est nobis sequi tempore numquam."},
]

export const getProduct= async(req, res,next)=>{
    try {
        const data=await Product.find()
        return res.status(200).json(data).send()}
     catch (error) {
        next(error)
    }
    
}
export const createProduct= async(req, res,next)=>{

    try {
       await Product.create(req.body);
    return res.status(201).json(Product).send()


    } catch (error) {
        next(error)
    }
    
}

export const getProducts= async(req, res,next)=>{
    try {
        const id =req.params.id;
    const product=await Product.findById(id)

    if (! product) {
        return res.status(404). json({ message: "Product not found" }).send()
    }
    return res.status(200).json(product).send()

    } catch (error) {
        next(error)
    }
    
}

export const deleteProduct=async(req,res,next)=>{
    try {
        const id=req.params.id;
    const product=await Product.findByIdAndDelete(id)

    if (! product) {
        return res.status(404).json({ message: "Product not found" }).send()
        
    }
    return res.status(200).json(Product).send()

    } catch (error) {
        next(error)
    }
    
}

export const updateProduct=async(req,res,next)=>{
    try {
        const id=req.params.id;
    const product=await Product.findByIdAndUpdate(id,req.body)

    if (!product) {
        return res.status(404).json({ message: "Product not found" }).send()
        
    }
    return res.status(200).json(Product).send()

    } catch (error) {
        next(error)
    }
    
}