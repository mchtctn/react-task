import React from 'react';
import FR from '../assets/images/flags/FR.png';
import UK from '../assets/images/flags/UK.png';
import US from '../assets/images/flags/US.png';
import { FaStar, FaCaretDown, FaCaretUp, FaMinus } from 'react-icons/fa';
import '../css/data-list.css'

const DataList = (props) => {
    const renderFlag = ((flag) => {
        switch(flag){
           case 'FR': return <img src={FR} className="flag"/>
           case 'UK': return <img src={UK} className="flag"/>
           case 'US': return <img src={US} className="flag"/>
        }
     });
  
     const renderRating = ((rating) => {
        let element = []
        for(let i = 1; i <= 5; i++){
           element.push(<FaStar key={i} style={{color: i <= rating ? "#f1cd4b" : "gray"}} className="rating-star"/>);
        }
        return element;
     });
  
     const renderRankChange = ((rankChange) => {
        if(rankChange < 0){
           return <span style={{color: "red"}} >{rankChange}<FaCaretDown className="rank-icon"/></span>
        }
        else if(rankChange > 0){
           return <span style={{color: "#36d136"}} >+{rankChange}<FaCaretUp className="rank-icon"/></span>
        } 
        else 
           return <span style={{color: "yellow"}} >{rankChange}<FaMinus className="rank-icon"/></span>
  
    });

    return (  
        <div className="card">
         <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <div className="card-text">
               <ul className="list-group">
                    {props.listItems.length !== 0 && props.listItems.map(listItem => 
                        <li key={listItem.id} className="list-group-item">
                            <div className="flex-row">
                                <div className="app-id">
                                    {listItem.id}
                                </div>
                                <div className="app-image-container">
                                    <img src={`../../assets/images/appIcons/${listItem.iconName}`}/>
                                </div>
                                <div className="flex-column app-detail-container">
                                    <div className="app-name">
                                        {listItem.name}
                                    </div>
                                    <div className="app-details">
                                        {renderFlag(listItem.country)}
                                        {listItem.publisher}
                                        <span className="rating">
                                            {renderRating(listItem.rating)}
                                        </span>
                                        (1.234)
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="rank-change">
                                    {renderRankChange(listItem.rankDiff ? listItem.rankDiff : listItem.rank)}
                                </div>
                            </div>
                        </li>
                    )}
               </ul>
            </div>
         </div>
      </div>
    );
}
 
export default DataList;