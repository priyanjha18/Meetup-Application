import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

export async function getStaticProps(){
    const client=await MongoClient.connect("mongodb+srv://priyan18:ZmXIqE9L8esh845h@Cluster0.j0yybjj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    const db=client.db();
    const meetupCollections=db.collection("Cluster0")
    const meetups=await meetupCollections.find().toArray()
    client.close()
    return {
        props:{
            meetups:meetups.map((meetup)=>({
                title:meetup.title,
                image:meetup.image,
                address:meetup.address,
                id:meetup._id.toString()

            })),
            revalidate:1
        }
    }
}
export default function HomePage(props){
    return  <MeetupList meetups={props.meetups}></MeetupList>
}
// export async function getServerSideProp(context){
//     const req=context.req;
//     const res=context
//     //fetch data from an API

//     return {
//         props:{
//             meetups:Dummy_Meetups
//         },
//     }

