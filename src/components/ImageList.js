import React from 'react';
import ImageItem from './ImageItem';
import '../App.css';
import data from '../data';
import cameradata from '../cameradata';

function ImageList(props){
    const {elec,brand} = props;
    console.log(brand);
    var subdata = data;
    if (elec==='cameras'){
      subdata = cameradata;
    }
    //var tempdata = null;
    // if (brand!==null){
    //   tempdata = subdata.filter((item) => {
    //     return item.Brand===brand;
    //   })
    //   console.log(tempdata);
    // }else{
     var  tempdata= subdata;
    //}
      return (
        <div className="imagegrid">
          {tempdata.map(function(item){
            const { image,asin } = item;
              return (
                <>
                  <ImageItem 
                    img={image}
                    id={asin}
                    elec={elec}
                  >
                    </ImageItem>
                </>
              )
          })}
        </div>
      )
  }
  
export default ImageList;