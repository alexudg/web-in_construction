export class MainHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <style>
                header {
                    background-color: white;
                    height: 60px;
                    display: flex;
                    justify-content: space-around;
                    align-self: center;
                    box-shadow: 0 0 3px black;
                }
                
                header>a {
                    /* background-color: green; */
                    align-self: center;
                }
                
                header>a>img {
                    height: 55px;                    
                }
                
                header>nav {
                    background-color: white;
                    display: flex;
                    align-items: center;
                }
                
                header>nav>a {
                    text-decoration: none;
                    color: white;
                    background-color: cadetblue;
                    margin: 0 3px;
                    padding: 5px;
                    border-radius: 3px;
                }
            </style>
            <header>
                <a href="index.html"><img src="./src/img/logoTextBlack150x97.png" alt="Cuida tus ventas"></a>
                <nav>
                    <a class="btnHome" href="index.html">Inicio</a>
                    <a class="btnContact" href="contact.html">Contacto</a>
                    <a class="btnInput" href="input.html">Ingresar</a>
                </nav>
            </header>`;
    }
}

window.customElements.define('main-header', MainHeader);