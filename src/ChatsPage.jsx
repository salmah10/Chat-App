import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '3955578c-7032-4c20-8f75-3807516a7ad3', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style = {{height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps}  style = {{height: '100%'}} />
        </div>
    )
}

export default ChatsPage