import io from "socket.io-client"

let socket;

export const init = () => {
    console.log("sunucuya bağlanılıyor..");




    socket = io ('http://localhost:3001',{
        transports:["websocket"],

    });

    socket.on('connect', () => console.log("sunucuya bağlantı gerçekleşti"))

    


}

export const send = (color) => {
    //clientten backende , backendden cliente veri göndermeye yarayan kod
    socket.emit('newColor',color);
};

export const subscribe = (cb) => {
    socket.on("receive",(color) => {
        console.log(color);
        cb(color);
    });
}