import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserChats } from "../features/chat/chatSlice";
import UserChat from "../components/chat/userChat";

const Chat = () => {
    // const user = useSelector((state) => state.user)
    // const chatInfo = useSelector((state) => state.chat.userChats)
    const dispatch = useDispatch()
    const { userChats, loading, error } = useSelector((state) => state.chat);
    const user = useSelector((state) => state.user)
    const userId = user?.user?._id
    useEffect(() => {
        if (userId) {
            dispatch(getUserChats(userId));
        }
    }, [dispatch, userId]);
    if (loading) {
        return "Loading"
    }
    if (error) return <p>Error: {error}</p>;
    return (
        <div>

            {/* <pre>{JSON.stringify(userChats, null, 2)}</pre> */}
            {
                userChats.length < 1 ? null : (
                    <div className="flex gap-4">
                        <div className="flex-1 flex-grow-0 messages-box pr-3">
                            {
                                loading && <p>Loading Chats...</p>
                            }
                            {
                                userChats?.map((chat, index) => {
                                    return (
                                        <div key={index} user={user}>
                                            <UserChat chat={chat}></UserChat>

                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>ChatBox</div>
                    </div>
                )
            }
        </div>
    );
};

export default Chat;