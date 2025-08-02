import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient ,ObjectId} from "mongodb";
export default function MeetupDetails(props) {
  return (
    <MeetupDetail
      src={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    ></MeetupDetail>
  );
}
// export async function getStaticPath() {
  
//   const client=await MongoClient.connect("mongodb+srv://priyan18:ZmXIqE9L8esh845h@Cluster0.j0yybjj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//   const db=client.db()
//   const meetupCollections=db.collections("Cluster0")
  
  
//   const meetups=await meetupCollections.find({},{_id:1}).toArray()
//   client.close()
//    return {

    
//     fallback:false,
//     paths:meetups.map((meetup)=>({params:{meetupId:meetup._id.toString()}})),
//   }
// }
export async function getServerSideProps(context) {
  
  const meetupId=context.params.meetupID
  const client=await MongoClient.connect("use ur own key")
  const db=client.db()
  const meetupCollections=db.collection("Cluster0")
  const objectId=new ObjectId(meetupId)
  const selectedMeetups=await meetupCollections.findOne({_id:objectId})

  return {
    props: {
      meetupData: {
        id:selectedMeetups._id.toString(),
        title:selectedMeetups.title,
        address:selectedMeetups.address,
        description:selectedMeetups.description,
        image:selectedMeetups.image
      },
    },
  };
}
