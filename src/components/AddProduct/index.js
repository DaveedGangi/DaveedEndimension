import {Component} from "react"

import {Form,Input,Button, InputNumber} from "antd"

import productManage from "../../context"

import {Link} from "react-router-dom"

import "./index.css"

class AddProduct extends Component{

  state={name:"",price:"",description:"",category:""}



  render(){

    return(

      <productManage.Consumer>
        {
          value=>{

          const {addNewProductData}=value
            
    const onFinish=(values)=>{
       console.log(values)
        console.log("hooray")

        addNewProductData(values)

          }

           


          return(

            <div className="bg-for-add-product">
              
             <div className="home-button">
              <Link to="/">
                <Button>Home</Button>
              </Link>
             </div>

            <div className="add-product-bg">

            
            <div className="form-bg">
            <Form onFinish={onFinish}>
              <Form.Item label="Product Name" name={"name"} 
              rules={[{
                required:true,
                message:"Please enter product name"
    
              }]}>
                <Input placeholder="Enter a product name" />
    
              </Form.Item>
    
              <Form.Item label="Product Category" name={"category"}
              rules={[{
                required:true,
                message:"Please enter product category"
    
              }]}>
                <Input  placeholder="Enter a product category" />
    
              </Form.Item>
    
              <Form.Item label="Product Description" name={"description"}
              rules={[{
                required:true,
                message:"Please enter product description"
              }]}>
              
               <Input placeholder="Enter a product description" />
                  
                  
              
    
              </Form.Item>
    
              <Form.Item label="Product Price" name={"price"}
              rules={[{
                required:true,
                message:"please enter a price"
              },{
                warningOnly:true,
                type:"number",
                message:"please enter a number"
              }]}>
                <InputNumber placeholder="Enter a product price" />
    
              </Form.Item>
    
              <Button htmlType="submit" type="primary">Submit</Button>
            </Form>
            </div>
          </div>

          </div>
          )


          }
        }
      </productManage.Consumer>

     
    )
  }
}

export default AddProduct