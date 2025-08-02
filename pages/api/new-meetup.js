import {MongoClient} from "mongodb";

async function handler(req,res){
    if (req.method==="POST"){
        const data=req.body;
        const {title,image,address,description}=data;
        const client=await MongoClient.connect("use ur own key")
        const db=client.db()
        const meetupCollections=db.collection("Cluster0")
        const result=await meetupCollections.insertOne(data)
        console.log(result)
        client.close()
        res.status(201).json({message:"Meetup Inserted"})


    }

}
export default handler;