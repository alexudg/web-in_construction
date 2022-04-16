import './header.js';

document.querySelector('.btnInput').classList.add('selected');

btnClickme.onclick = async () => {
    console.log('onclick')

    //const data = await fetch('http://gucitex.com.mx/web-damaxboutique/backend/index.php?fn=getAllCategories')
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': '0eab84ea-917d-4817-9e33-c98caecf626d'
    //     }
    // }).then(res => res.text())
    // .then(text => {
    //     console.log(text)
    //     return text
    // })
    // .catch(error => console.log('error:', error))

    //const data = await fetch('https://cors-anywhere.herokuapp.com/http://www.gucitex.com.mx/web-damaxboutique/backend/index.php?fn=getAllCategories',
    const data = await fetch('http://www.gucitex.com.mx/web-damaxboutique/backend/index.php?fn=getAllCategories',
        //const data = await fetch('http://puntoplanet.cu.ma/test.php',
        //const data = await fetch('https://jsonplaceholder.typicode.com/todos',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                origin: 'cuidatusventas.com.mx'
            },
            mode: 'no-cors'
            //referrerPolicy: 'origin-when-cross-origin'
            //referrerPolicy: 'unsafe-url'
        })
        .then(res => res.text())
        .catch(error => console.log('error:', error))
    console.log('res:', data)
}
