import {Table} from 'antd';
import { useEffect, useState } from 'react'

function App() {
  const [mahsulotlar,setMahsulotlar]=useState(null);

  function getData(){
    try {
      fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,borders,population,area,id")
      .then(res=> res.json())
      .then(data=>{
        console.log(data);
        setMahsulotlar(data);
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getData();
  },[])











  
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name.official',
      render: (text,record)=> record.name.common
    },
    {
      title: 'Poytaxti',
      dataIndex: 'capital',
      key: 'capital',
    },
    {
      title: 'Maydoni',
      dataIndex: 'area',
      key: 'area',
    },{
      title: 'aholi',
      dataIndex: 'population',
      key: 'population',
    },
  ];
  


  return (
    <div>
      <h1 style={{textAlign:'center'}} >Mahsulotlar</h1>

      {mahsulotlar&&<Table style={{width:"60%",margin:"20px auto"}} dataSource={mahsulotlar} columns={columns} />}
    </div>
  )
}

export default App
