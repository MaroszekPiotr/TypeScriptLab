/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/client.ts ***!
  \***********************/
let socket = new WebSocket("ws://localhost:8080");
socket.onopen = function (e) {
    socket.send("Hello!");
};
socket.onmessage = function (event) {
    const msg = document.getElementById("messages");
    const item = document.createElement("li");
    item.textContent = event.data;
    msg?.appendChild(item);
};
document.getElementById("send").addEventListener("click", () => {
    socket.send(document.getElementById("msg").value);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYWI3Ly4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc29ja2V0ID0gbmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjgwODBcIik7XHJcbnNvY2tldC5vbm9wZW4gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgc29ja2V0LnNlbmQoXCJIZWxsbyFcIik7XHJcbn07XHJcbnNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGNvbnN0IG1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZXNcIik7XHJcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgaXRlbS50ZXh0Q29udGVudCA9IGV2ZW50LmRhdGE7XHJcbiAgICBtc2c/LmFwcGVuZENoaWxkKGl0ZW0pO1xyXG59O1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbmRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHNvY2tldC5zZW5kKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXNnXCIpLnZhbHVlKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=