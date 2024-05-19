import {Route,Switch} from "react-router-dom"

import {Component} from "react"

import Home from "./components/Home"



import AddProduct from "./components/AddProduct";

import productManage from "./context";

import {v4 as uuidV4} from "uuid"

import './App.css';

import {Button} from "antd"

import { EditOutlined,DeleteOutlined} from '@ant-design/icons';




const dataSourceData=[{
  key: '1',
  name: 'Pixel 8a',
  category: 'Mobile',
  description: "Meet the Pixel 8a, engineered by Google. Take amazing photos with the Pixel Camera.",
  price: 52999,
  id:uuidV4()
  },
{
  key: '2',
  name: 'Motorola Edge 50 Fusion',
  category: 'Mobile',
  description: '50 MP Ultra Pixel OIS Camera with Sony - LYTIA 700C Senor',
  price: 22999,
  id:uuidV4()
},
{
  key: '3',
  name: 'vivo X100 ',
  category: 'Mobile',
  description: 'The Periscope Structure, provides greater light sensitivity, and clearer image quality',
  price: 6999,
  id:uuidV4()

},
{
  key:"4",
  name:"Raymond ",
  category:"Cloths",
  description:"Men Slim Fit Checkered Formal Shirt",
  price:1079,
  id:uuidV4()
},
{
  key:"5",
  name:"Wakefit Leatherette Manual Recliner",
  category:"Home",
  description:"3 Reclining Positions",
  price:44000,
  id:uuidV4()
},{
  key:"6",
  name:"LA VERNE QUILTED",
  category:"Home",
  description:"LA VERNE QUILTED Microfibre Solid Sleeping Pillow Pack of 2  ",
  price:429,
  id:uuidV4()
},
{
  key:"7",
  name:"LA VERNE ",
  category:"Home",
  description:"LA VERNE Luxury Memory Foam Geometric Sleeping Pillow Pack of 1 ",
  price:599,
  id:uuidV4()
},
{
  key:"8",
  name:"LA VERNE QUILTED",
  category:"Home",
  description:"LA VERNE QUILTED Microfibre Solid Sleeping Pillow Pack of 2  ",
  price:429,
  id:uuidV4()
}
,
{
  key:"9",
  name:"Pillow",
  category:"Home",
  description:"credicus Cervical Contour Memory Foam Pillow  ",
  price:443,
  id:uuidV4()
},
{
  key:"10",
  name:"alt Hunk",
  category:"Electronics",
  description:"1.96, BT Calling, 200 Watchfaces,120 Sports modes.",
  price:999,
  id:uuidV4()
},
{
  key: '11',
  name: 'Zebronics EA124 Monitor',
  category: 'Electronics',
  description: 'Full HD LED Monitor Zebronics EA124',
  price: 6999,
  id:uuidV4()
},
{
  key:"12",
  name:"Lenovo",
  category:"Electronics",
  description:"Lenovo 23.8 inch Full HD VA Panel 3-Side Near Edgeless with TUV Eye Care Monitor  ",
  price:7299,
  id:uuidV4()
}]



class App extends Component {

  state={deleteModal:false,deleteRecord:[],productPrice:0,productDescription:"",productCategory:"",productName:"",editData:[],isModalOpen:false,columnsStorage:[{
    title: "Name",
    dataIndex: "name",
    key: "name",

    
  },
  {
    title:"Category",
    dataIndex:"category",
    key:"category",
    
  },
  {
    title:"Description",
    dataIndex:"description",
    key:"description",
  
  },
  {
    title:"Price",
    dataIndex:"price",
    key:"price",
  },
  {
    title:"Actions",
    dataIndex:"",
    key:"actions",
    render:(record)=>{
      return(
        <div>
          <div className="bigger-screens-buttons">
          <Button className="button-edit" onClick={()=>{this.sendData(record)}}>Edit</Button>
          <Button className="button-delete" onClick={()=>{this.deleteData(record)}}>Delete</Button>
          </div>

          <div className="smaller-screens-buttons">
          <Button className="button-edit" onClick={()=>{this.sendData(record)}}><EditOutlined /></Button>
          <Button className="button-delete" onClick={()=>{this.deleteData(record)}}><DeleteOutlined /></Button>
          </div>


       </div>
       
      )
    }
  }],dataSourceStorage:dataSourceData}


  changeShownModal=()=>{
    const{productCategory,productName,productPrice,productDescription,dataSourceStorage,editData}=this.state

    const filteringData=dataSourceStorage.filter((each)=>each.id===editData.id)
    console.log(filteringData)

    this.setState(prevState=>({dataSourceStorage:prevState.dataSourceStorage.map((each)=>{
      if(each.id===editData.id){
        const name=productName
        const description=productDescription
        const category=productCategory
        const price=productPrice
        return {...each,name,description,category,price}
      }
      return each
    })}))

      this.setState({isModalOpen:false})
  }

  editClosedModal=()=>{
    this.setState({isModalOpen:false})
  }

  sendData=(record)=>{
    console.log(record)
    console.log("your are clicked a Edit button")
    this.setState({productPrice:record.price,productDescription:record.description,productCategory:record.category,productName:record.name,isModalOpen:true,editData:record})
  

}

deleteData=(record)=>{
  console.log(record)
  console.log("your are clicked a Delete button")
  this.setState({deleteRecord:record,deleteModal:true})
}

editCard=(value)=>{
  const{editData}=this.state
  console.log("Edit")
  console.log(editData)
  console.log("edited")
  
    this.setState({productName:value})
}

editCategory=(value)=>{
  this.setState({productCategory:value})
}
  
editDescription=(value)=>{
  this.setState({productDescription:value})
}

editProductPrice=(value)=>{
  this.setState({productPrice:value})
}

deleteRecordData=()=>{
  const{deleteRecord}=this.state
  this.setState(prevState=>({dataSourceStorage:prevState.dataSourceStorage.filter((each)=>each.id!==deleteRecord.id)}))
  this.setState({deleteModal:false})
}

deleteCancelData=()=>{
  this.setState({deleteModal:false})
}

addNewProductData=(newData)=>{

  const newDataRecord={
    id:uuidV4(),
    name:newData.name,
    category:newData.category,
    description:newData.description,
    price:newData.price

  }

    this.setState(prevState=>({dataSourceStorage:[...prevState.dataSourceStorage,newDataRecord]}))
}

  render(){
    const{deleteRecord,deleteModal,productPrice,productDescription,productCategory,productName,editData,isModalOpen,columnsStorage,dataSourceStorage}=this.state
    
  return (
    <productManage.Provider value={{deleteRecord,addNewProductData:this.addNewProductData,deleteCancelData:this.deleteCancelData,deleteRecordData:this.deleteRecordData,deleteModal,editClosedModal:this.editClosedModal,editProductPrice:this.editProductPrice,productPrice,editDescription:this.editDescription,productDescription,editCategory:this.editCategory,productCategory,productName,editProductData:this.editCard,editData,modalClose:this.changeShownModal,isModalOpen,columnsStorage,dataSourceStorage}}>
     <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/addProduct" component={AddProduct}/>
      </Switch>
      
    </div>
    </productManage.Provider>
   
  );

}


}

export default App;
