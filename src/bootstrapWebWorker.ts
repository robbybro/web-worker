export default function bootstrapWebWorker() {
    if ((window as any).Worker) {
        const myWorker = new Worker('../webWorker.js');

        myWorker.postMessage([2, 2]);

        myWorker.onmessage = function(e) {
            alert(e.data);
            myWorker.terminate();
        };
    }
}
