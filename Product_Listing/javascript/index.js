const formSubmit = document.getElementById('productForm')
formSubmit.addEventListener('submit',(e)=>{
    e.preventDefault()
    submitData()
    e.target.reset()
})

function submitData(){
    const product = document.getElementById('product').value
    const price = document.getElementById('price').value
    const category = document.getElementById('category').value

    const obj = {
        product,price,category
    }

    axios.post(`${URL}/${collection}`,obj)
    .then((res)=>{
        displayData(res.data)
    })
    .catch((error)=>console.log(error))
}

function displayData(obj){
    // const parent = document.getElementById()
}

function deleteData(id){

}