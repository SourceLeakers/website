const ipToVideo = {
    "172.56.73.70": "https://www.youtube.com/watch?v=VIDEO_ID_1",
    "IP_ADDRESS_2": "https://www.youtube.com/watch?v=VIDEO_ID_2"
};

const clientIP = "127.0.0.1:5000"; // Replace with actual IP detection logic

if (ipToVideo.hasOwnProperty(clientIP)) {
    const youtubeURL = ipToVideo[clientIP];
    window.location.href = youtubeURL;
} else {
   alert("unauthorized.");
}
