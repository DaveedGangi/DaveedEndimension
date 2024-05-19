import {Component} from "react"


import {Table,Button, Modal,Input} from "antd"

import {Link} from "react-router-dom"

import "./index.css"

import productManage from "../../context"




class Home extends Component{

 

  render(){
    return(

      <productManage.Consumer>

        {
          value=>{
            const {deleteRecord,deleteCancelData,deleteRecordData,deleteModal,editClosedModal,editProductPrice,productPrice,editDescription,productDescription,editCategory,productCategory,productName,editProductData,modalClose,dataSourceStorage,columnsStorage,isModalOpen}=value
            console.log(dataSourceStorage)
            console.log(columnsStorage)

            const changeShown=()=>{
              modalClose()
            }

            const editProduct=(event)=>{
              editProductData(event.target.value)
              
            }

            const editCategoryCard=(event)=>{
              editCategory(event.target.value)
            }
            
            const editDescriptionCard=(event)=>{
              editDescription(event.target.value)
            }
            const editPrice=(event)=>{
              editProductPrice(event.target.value)
            }

            const changeShownCancel=()=>{
              editClosedModal()
            }

            const deleteDataOfRecord=()=>{
              deleteRecordData()
            }
            const deleteCancelRecord=()=>{
              deleteCancelData()
            }
            return(
              
      <div className="bg-home">

   

      <div className="button-add">
        <Link to="/addProduct">
        <Button type="primary">Add a new product</Button>
        </Link>
      </div>
      
      <div className="table-bg">
        <div className="table">
      <Table 
      rowClassName={(record)=>record.category.includes("Electronics")?"bg-red":record.category.includes("Cloths")?"bg-blue":record.category.includes("Mobile")?"bg-yellow":"bg-green"}
      columns={columnsStorage}
      dataSource={dataSourceStorage}>
      </Table>
      </div>
      </div>

      <Modal title="Do you want to edit" open={isModalOpen} onOk={changeShown} onCancel={changeShownCancel}>
    
      <Input className="Input" onChange={editProduct} value={productName}/>
      <br/>
      <Input className="Input" onChange={editCategoryCard} value={productCategory}/>
      <br/>
      <Input className="Input" onChange={editDescriptionCard} value={productDescription}/>


      <Input className="Input" onChange={editPrice} value={productPrice}/>

    
    </Modal>

    <Modal title="Are you sure you want to delete?" open={deleteModal} onOk={deleteDataOfRecord} onCancel={deleteCancelRecord}>
     <p>{deleteRecord.name}</p>
    </Modal>
    </div>

            )

          }
        }



      </productManage.Consumer>


    )
  }
}

export default Home