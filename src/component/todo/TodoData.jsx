const TodoData = (props) => {
    console.log(">>> check props", props);

    const { name, age, data } = props
    return (
        <div>
            <div>My name is {name} . Im {age} .Now I living in {data.address}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    )
}
export default TodoData;