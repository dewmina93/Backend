import Category from '../infastructure/schemas/category.js';

export const getCategory= async(req, res,next)=>{
    try {
        
        const data=await Category.find()
        return res.status(200).json(data).send()}
     catch (error) {
        next(error)
    }
    
}
export const createCategory= async(req, res,next)=>{

    try {
       await Category.create(req.body);
    return res.status(201).json(Category).send()


    } catch (error) {
        next(error)
    }
    
}

export const getCategories= async(req, res,next)=>{
    try {
        const id =req.params.id;
    const category=await Category.findById(id)

    if (! category) {
        return res.status(404). json({ message: "Product not found" }).send()
    }
    return res.status(200).json(category).send()

    } catch (error) {
        next(error)
    }
    
}

export const deleteCategory=async(req,res,next)=>{
    try {
        const id=req.params.id;
    const category=await Category.findByIdAndDelete(id)

    if (! category) {
        return res.status(404).json({ message: "Product not found" }).send()
        
    }
    return res.status(200).json(category).send()

    } catch (error) {
        next(error)
    }
    
}

export const updateCategory=async(req,res,next)=>{
    try {
        const id=req.params.id;
    const category=await Category.findByIdAndUpdate(id,req.body)

    if (!category) {
        return res.status(404).json({ message: "Product not found" }).send()
        
    }
    return res.status(200).json(Category).send()

    } catch (error) {
        next(error)
    }
    
}