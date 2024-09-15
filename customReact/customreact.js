function customRender(reactElement,container){
   /*
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    domElement.appendChild(domElement)
    */

    const docElement = document.createElement(reactElement.type)

    docElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
           docElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement= {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit google</a>
)

// const maiContainer= document.querySelector('#root');

// customRender(reactElement, maiContainer)

ReactDOM.createRoot(document.getElementById('root')).
render(
    anotherElement
)