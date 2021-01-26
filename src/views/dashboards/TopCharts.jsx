import React, { useState, useEffect } from 'react';
import { getTodayAppData } from "../../services/DashboardService";
import DataList from './../../components/DataList';


const TopCharts = () => {
   const [chartItems, setChartItems] = useState([]);

   useEffect(() =>{
      getTodayAppData().then(data => (setChartItems(data)));
   }, []);

   return ( 
      <DataList listItems={chartItems} title="Top Charts"/>
   );
}

export default TopCharts;