//Đây là dạng component chữ cái đầu phải viết hoa đó là quy tắc của React
//component = html + css + js
//Trong thế giới của Javascript tất cả đều là function , để biến nó thành 1 component bắt buộc chúng ta cần return ra HTML
const MyComponent = () => {

    //const variable = "Quang Linh"; //String 
    //const variable = 25   //number
    //const variable = true   //boolean
    //const variable = undefined   
    //const variable = null   
    // const variable = [1, 2, 3]
    const variable = {
        name: "Quang Linh",
        age: 26
    }




    return (
        //Nếu muốn in ra cả biến mà không cần chấm tới thuộc tính thì chúng ra cần convert sang kiẻu JSON
        // <div>Quang Linh {JSON.stringify(variable)}</div>

        <div>Quang Linh {variable.age}</div>
    )
}

//Xuất ra 1 component thì dùng default 
export default MyComponent;