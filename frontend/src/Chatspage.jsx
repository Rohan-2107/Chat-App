import { MultiChatSocket,MultiChatWindow,useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '70ebfe99-fb34-4063-9e49-9ffd5a42af24',
        props.user,username,
        props.user.secret
    );
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height: '100%'}} />
        </div>
    )
}
export default ChatsPage