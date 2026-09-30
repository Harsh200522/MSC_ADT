import {connectToMongoDB,disconnectFromMongoDB} from './config/database.js';
import { Product } from './models/Product.model.js';

async function run(){
    try{
        await connectToMongoDB();

        // const products = await Product.insertOne({
        //     productID: "P001",
        //     name: "Laptop",
        //     category: "Electronics",
        //     price: -100,
        //     stock: 10,
        //     supplierCity: "New York",
        //     isActive: true
        // });
        // console.log("Product inserted successfully:", products);


        // Insert all five records using the Product model and display the inserted records. 
        // const insProduct= await Product.insertMany([
        //     {
        //        productID: "P01",
        //        name: "Laptop",
        //        category: "Electronics",
        //        price: 1200,
        //        stock:15,
        //        supplierCity: "Surat"
        //     },
        //     {
        //         productID: "P02",
        //         name: "Mouse",
        //         category: "Electronics",
        //         price:650,
        //         stock:5,
        //         supplierCity: "Ahamedabad"
        //     },
        //     {
        //         productID : "P03",
        //         name: "Notebook",
        //         category:"Stationary",
        //         price : 80,
        //         stock : 50,
        //         supplierCity: "Surat"
        //     },
        //     {
        //         productID: "P04",
        //         name:"Headphones",
        //         category: "Electronics",
        //         price : 1800,
        //         stock: 0,
        //         supplierCity:"Vadodara"
        //     },
        //     {
        //         productID : "P05",
        //         name: "Pen set",
        //         category: "Stationary",
        //         price:150,
        //         stock: 8,
        //         supplierCity:"Rajkot"
        //     }
        // ]);
        // console.log(`${insProduct.length} Product insert Successfully!`);
        // console.log(insProduct);

        // Display all products.
        // const findAllPro= await Product.find();
        // console.log("Display all Product");
        // console.log(findAllPro);

        //Display products belonging to the Electronics category.
        // const findbyCategory= await Product.find({category:"Electronics"});
        // console.log("Find Product based on Electronics Category:");
        // console.log(findbyCategory);

        // Display products priced at most 1000, sorted by price from lowest to highest.
        // const findmost=await Product.find({price:{$lte:1000}}).sort({price:1});
        // console.log("Find most 1000");
        // console.log(findmost);

        //  Change P02 price to 700. Display the updated product. 
        // const UpdateProduct= await Product.updateOne({productID:"P02"},{$set:{price:700}});
        // console.log("Update Product:");
        // console.log(UpdateProduct);
        // const findUpdateProduct= await Product.find({productID:"P02"});
        // console.log("Find Update Product:");
        // console.log(findUpdateProduct);

        // const beforeUpdated= await Product.find();
        // console.log("Before Updated:");
        // console.log(beforeUpdated);
        // const updateAllProduct= await Product.updateMany({},{$inc:{stock:10}});
        // console.log("Product update Successfully");
        // console.log(updateAllProduct);
        // const afterUpdated= await Product.find();
        // console.log("After Updated:");
        // console.log(afterUpdated);

        const deleteProduct=await Product.deleteOne({productID:"P04"});
        console.log("Delete Successfully");
        console.log(deleteProduct);
        const afterUpdated= await Product.find();
        console.log("After Updated:");
        console.log(afterUpdated);
    }
    catch(err){
        if(err.name === 'ValidationError'){
            console.log("Validation Error:", err.message);
        }else{
            console.log("Error:", err);
        }
    }finally{
        await disconnectFromMongoDB();
    }
}

run();