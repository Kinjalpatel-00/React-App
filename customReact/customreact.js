
function customRender(reactElemnet, mainContainer){
const domEle = document.createElement(reactElemnet.type)
domEle.innerHTML = reactElement.children

for (const prop in reactElement.props){
    if(prop === 'children') continue
    domEle.setAttribute(prop, reactElement.props[prop])
}

// domEle.setAttribute('href', reactElement.props.href)
// domEle.setAttribute('target', reactElement.props.target)
mainContainer.appendChild(domEle)
}

const reactElement= {
    type: 'a',
    props:{
        href:"https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google 00"
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer) 