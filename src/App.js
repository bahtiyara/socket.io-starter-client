import { io } from "socket.io-client"
import { useEffect } from "react"

const socket = io("ws://localhost:8000")

function App() {
    useEffect(() => {
        socket.on("countUpdated", (count) => {
            console.log("The count has been updated!", count)
        })
    })

    return (
        <div className="App">
            <button onClick={onButtonClicked}>Increment</button>
        </div>
    )
}

function onButtonClicked() {
    socket.emit("increment")
}

export default App
