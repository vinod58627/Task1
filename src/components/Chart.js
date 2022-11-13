import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis , Tooltip} from 'recharts';

const Chart = () => {
    
    const vin = [
        {name:'1995', num:'0', react:51, angular:31, vue: 46},
        {name:'1996', num:'10', react:102, angular:37, vue: 57},
        {name:'1997', num:'20', react:96, angular:43, vue: 66},
        {name:'1998', num:'30', react:67, angular:54, vue: 84},
        {name:'1999', num:'40', react:63, angular:58, vue: 75},
        {name:'2000', num:'50', react:87, angular:64, vue: 35},
        {name:'2001', num:'60', react:84, angular:154, vue: 34},
        {name:'2002', num:'70', react:51, angular:66, vue: 55},
        {name:'2003', num:'80', react:49, angular:55, vue: 66},
        {name:'2004', num:'90', react:38, angular:31, vue: 77}
    ]
  return (
    <LineChart width={1000} height={600} data={vin} margin={{ top: 10, right: 30, bottom: 10, left: 50}}>
        <Line type="monotone" dataKey="react" stroke="#216eeb"  strokeWidth={2} />
        <Line type="monotone" dataKey="angular" stroke="#2dc432" strokeWidth={2} />
        <Line type="monotone" dataKey="vue" stroke="#c4832d" strokeWidth={2} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis dataKey={vin.num} />
        
        <Tooltip />
  </LineChart>
  )
}

export default Chart


