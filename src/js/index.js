import router from './router/index.js';
import ui from './ui/index.js';

ui();
router();

console.log('hello mom');
console.log('heiheihei');

function myFunk(hello) {
        console.log('inside function' + hello);
}

myFunk(4);
