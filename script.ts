
class Cabecalho extends HTMLElement{

    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        this.build(shadow);
    }

    build(shadow: ShadowRoot){
        const style: HTMLLinkElement = document.createElement("link");
        style.rel = "stylesheet";
        style.href = "./estilo.css";

        const header: HTMLElement = document.createElement("header");
        const div: HTMLDivElement = document.createElement("div");
        const div_titulo: HTMLDivElement = document.createElement("div");
        const div_links: HTMLDivElement = document.createElement("div");
        const texto: HTMLHeadingElement = document.createElement("h1");
        texto.innerHTML = "TITULO";
        const titulo: HTMLHeadingElement = document.createElement("h1");
        titulo.innerText = "TITULO";
        const link_1: HTMLAnchorElement = document.createElement("a");
        link_1.target = "_blank";
        link_1.href = "#";
        link_1.innerText = "LINK 1";
        const link_2: HTMLAnchorElement = document.createElement("a");
        link_2.target = "_blank";
        link_2.href = "#";
        link_2.innerText = "LINK 2";
        const link_3: HTMLAnchorElement = document.createElement("a");
        link_3.target = "_blank";
        link_3.href = "#";
        link_3.innerText = "LINK 3";

        div_titulo.append(titulo);
        div.append(texto);
        div_links.append(link_1, link_2, link_3);
        header.append(div_titulo, div_links);
        shadow.append(header, style);
    }
}

customElements.define("meu-cabecalho", Cabecalho)