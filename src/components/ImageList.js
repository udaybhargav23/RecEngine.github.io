import React from 'react';
import ImageItem from './ImageItem';
import '../App.css';
import data from '../data';
import cameradata from '../cameradata';
import soapdata from '../soapdata';
import Chocolatedata from '../Chocolatedata';

function ImageList(props){
    const {elec,brand} = props;
    console.log(brand);
    var subdata = data;
    if (elec==='cameras'){
      subdata = cameradata;
    }else if (elec==='soaps'){
      subdata = soapdata;
    }else if (elec==='chocolates'){
      subdata = Chocolatedata;
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