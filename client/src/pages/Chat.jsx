import { useSelector } from "react-redux";

const Chat = () => {
    const user = useSelector((state) => state.user)
    return (
        <div>
            <h3>Hello</h3>
        </div>
    );
};

export default Chat;