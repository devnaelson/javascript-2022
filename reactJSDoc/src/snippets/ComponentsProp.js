
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function ComponentsPros() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

/* 
    i will take it to index, make more sense.
    ReactDOM.render(
    <ComponentsPros />,
    document.getElementById('snp-compprop')
); */

export default ComponentsPros;