import './header.js';

document.querySelector('.btnInput').classList.add('selected');

btnClickme.onclick = async () => {
    console.log('onclick')
    const data = await fetch('http://gucitex.com.mx/test.php').then(res => res.text())
    console.log('res:', data)
}