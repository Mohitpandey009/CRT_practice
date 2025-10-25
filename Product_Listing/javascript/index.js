const COLLECTION = "";
const API_URL = "";

const formSubmit = document.getElementById('productForm')
formSubmit.addEventListener('submit',function(e){
    // e.preventDefault();
    submitData()
    e.target.reset()
})

function submitData(){
    const product = document.getElementById('product').value
    const price = document.getElementById('price').value
    const category = document.getElementById('category').value

    const obj = {
        _id:"1",product,price,category
    }
    console.log(obj);
    

    // axios.post(`${API_URL}/${COLLECTION}`,obj)
    // .then((res)=>{
    //     displayData(res.data)
    // })
    // .catch((error)=>console.log(error))
    displayData(obj);
}

function displayData(obj){
    // const parent = document.getElementById()
    console.log(obj);
    
    const displayData = document.querySelector(`display_${obj.category}`)
    const div = document.createElement('div')
    div.id = obj._id;
    div.textContent = `${obj.product} ${obj.price} ${obj.category}`
    displayData.appendChild(div)
}

function deleteData(id){

}