import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import SimpleRating from './SimpleRating';
import fulldata from '../Fulldata';
import cameradata from '../cameradata';
import cameradata2 from '../cameradata2';
import data from '../data';
import soapdata from '../soapdata';
import Chocolatedata from "../Chocolatedata";

function ImageItem(props){
    const { img,id,elec } = props;
    if (!img){
      return <img src="https://th.bing.com/th/id/OIP.RAubIxqEWEwx3kcb0x0JhQHaFj?pid=ImgDet&rs=1" alt="Laptops" className="firstimage" />
    }
    var subdata = [];
    var tempdata =[];
    if (elec==='cameras'){
      subdata = cameradata.filter((item) => {
        return item.asin === id;
      });
      tempdata = cameradata2.filter((item) => {
        return item.asin === id;
      })
    }else if (elec==='soaps'){
      subdata = soapdata.filter((item) => {
        return item.asin === id;
      });
      // tempdata = soapdata.filter((item) => {
      //   return item.asin === id;
      // })
    }else if (elec==='chocolates'){
      subdata = Chocolatedata.filter((item) => {
        return item.asin === id;
      });
    }else{
      subdata = fulldata.filter((item) => {
        return item.asin === id;
      });
      tempdata = data.filter((item) => {
        return item.asin === id;
      })
    }
    //console.log(elec);
    //console.log(subdata);
    var tempclass ="firstimage"
    if (elec==='cameras'){
      tempclass ='firstimage2'
    }
    if (elec==='laptops'){
      const { Brand,ModelName,GraphicsCoprocessor,
      RamMemoryInstalledSize,HardDriveSize,OperatingSystem,ItemWeight,ItemModelNumber } = tempdata[0];
      return (
        <>
          <div className="imagecontainer">  
            <Link to={'/laptops/'+id} style={{ textDecoration: 'none' }}>
                <div className="photo">
                  <img src={img} alt="Laptops" className={tempclass} />
                </div>
            </Link>
            <div className="details">
              <Link to={'/laptops/'+id} style={{ textDecoration: 'none' }}>
                <p className="detailssub">{Brand} {ModelName} {GraphicsCoprocessor}
                    ({RamMemoryInstalledSize}/{HardDriveSize}/{OperatingSystem}/
                    {ItemWeight}){ItemModelNumber}...</p>
              </Link>
              <SimpleRating rating={subdata[0].rating} />
              <div className='price'><sup>&#8377;</sup>{subdata[0].price}.00</div>
              <div><sup>Instock available from {tempdata[0].DateFirstAvailable}</sup></div>
            </div>
          </div>
        </>
      )
    }else if (elec==='soaps'){
      const { image,rating,Price,details } = subdata[0];
      return (
        <>
          <div className="imagecontainer">  
          <Link to={'/laptops/'+id} style={{ textDecoration: 'none' }}>
              <div className="photo">
                <img src={image} alt="Laptops" className={tempclass} />
              </div>
          </Link>
          <div className="details">
            <Link to={'/laptops/'+id} style={{ textDecoration: 'none' }}>
              <p className="detailssub">{details}</p>
            </Link>
            <SimpleRating rating={rating} />
            <div className='price'><sup>&#8377;</sup>{Price}.00</div>
            <div><sup>Instock available from</sup></div>
          </div>
        </div>
      </>
      )
    }else if (elec==='chocolates'){
      const { image,rating,Brand,Form,GenericName,Speciality,Weight,DateFirstAvailable,Price } = subdata[0];
      return (
        <>
          <div className="imagecontainer">  
          <Link to={'/laptops/'+id} style={{ textDecoration: 'none' }}>
              <div className="photo">
                <img src={image} alt="Laptops" className={tempclass} />
              </div>
          </Link>
          <div className="details">
            <Link to={'/laptops/'+id} style={{ textDecoration: 'none' }}>
              <p className="detailssub">{Brand} {Form} {GenericName} {Speciality} {Weight}</p>
            </Link>
            <SimpleRating rating={rating} />
            <div className='price'><sup>&#8377;</sup>{Price}.00</div>
            <div><sup>Instock available from {DateFirstAvailable}</sup></div>
          </div>
        </div>
        </>
      )
    }else{
      var { Brand,ItemModelNumber,BestSellersRank,Manufacturer,rating,price } = subdata[0];
      var { DateFirstAvailable } = tempdata[0];
    }
    return (
      <>
        <div className="imagecontainer">  
          <Link to={'/laptops/'+id} style={{ textDecoration: 'none' }}>
              <div className="photo">
                <img src={img} alt="Laptops" className={tempclass} />
              </div>
          </Link>
          <div className="details">
            <Link to={'/laptops/'+id} style={{ textDecoration: 'none' }}>
              <p className="detailssub">{Brand} {ItemModelNumber} {BestSellersRank} Manufactured by {Manufacturer}</p>
            </Link>
            <SimpleRating rating={rating} />
            <div className='price'><sup>&#8377;</sup>{price}.00</div>
            <div><sup>Instock available from {DateFirstAvailable}</sup></div>
          </div>
        </div>
      </>
    )
  }

export default ImageItem;