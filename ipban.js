const ipToVideo = {
      "172.56.73.70": "https://www.youtube.com/watch?v=nEPHyO-LqgM",
      "IP_UNAUTHROIZED": "https://www.youtube.com/watch?v=nEPHyO-LqgM",
};

const clientIP = "172.56.73.70"; // Replace with actual IP detection logic if necessary

if (ipToVideo.hasOwnProperty(clientIP)) {
    const youtubeURL = ipToVideo[clientIP];
    window.location.href = youtubeURL;
} else {
   alert("unauthorized to access the page.");
}
