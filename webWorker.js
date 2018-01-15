onmessage = function(e) {
    const answer = e.data[0] + e.data[1];
    postMessage(answer);
};
