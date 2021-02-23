import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './Chat.css';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../../utility/firebase'
import Message from './Message/Message';
import ChatInput from './ChatInput/ChatInput';

function Chat() {
    const {roomId} = useParams();
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])
    useEffect(() => {
        if(roomId){
            db.collection("rooms").doc(roomId)
                .onSnapshot(snapShot => {
                    setRoomDetails(snapShot.data())
                })
        }

        db.collection("rooms").doc(roomId)
        .collection("messages")
        .orderBy("timestamp",'asc')
        .onSnapshot(snapShot => {
            setRoomMessages(snapShot.docs.map(doc => doc.data()))
        })
        
    }, [roomId])

    console.log(roomDetails)
    console.log(roomMessages)
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat__messages">
                {roomMessages.map(({message,timestamp,user,userImage}) =>{
                    return <Message
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                })}
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId}/>

        </div>
    )
}

export default Chat
