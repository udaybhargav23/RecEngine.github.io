import { React,useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fullcameradata from '../fullcameradata';
import cameradata2 from '../cameradata2';
import data from '../data';
import fulldata from '../Fulldata';
import SimpleRating from './SimpleRating';
import axios from 'axios';
import Details from './Details';        
import Recitem from './Recitem';
import { Link } from 'react-router-dom';
import Table from './Table';
import cameradata from '../cameradata';
import CircularProgress from '@material-ui/core/CircularProgress';
import Frequent from './Frequent'; 

function GalleryItem(){
    const params = useParams();
    const id = params.asin;
    var data2 = data.filter((item) => {
        return item.asin === id;
    });
    if (data2.length === 0){
        data2 = fullcameradata.filter((item) =>{
            return item.asin ===id;
        })
    }
    var bool = 'False';
    var x = localStorage.getItem(id);
    if (x){
        var myarr = x.split(",");
        bool = 'False';
    }
    const [current,setCurrent] = useState(data2[0].image);
    const [recarr,setrecarr] = useState(myarr ? myarr : null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setCurrent(data2[0].image);
    },[id]);
    var dataset = 'Camera';
    var bodyFormData = new FormData();
    bodyFormData.append('Product',id);
    bodyFormData.append('train',bool);
    bodyFormData.append('Dataset',dataset);
    var subdata = cameradata2.filter((item) => {
        return item.asin === id;
    });
    var tempdata = cameradata.filter((item) => {
        return item.asin === id;
    })
    if (subdata.length===0){
      dataset = 'Desktop';  
      bodyFormData.set('Dataset',dataset);
      subdata = fulldata.filter((item) => {
        return item.asin === id;
      });
    }
    useEffect(() => {
        axios({
            method: "post",
            url: "https://ecommerce21recommendation.herokuapp.com/get_recommendation",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            setrecarr(response.data.recommendation);
            setIsLoading(false);
            if (recarr){
                localStorage.setItem(id,recarr);
            }
        });
    },[id])


    if (isLoading) {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <CircularProgress color="secondary" />
          </div>
        );
      }

    if(recarr && dataset === 'Desktop'){
        var { Brand,ModelName,GraphicsCoprocessor,
            RamMemoryInstalledSize,HardDriveSize,OperatingSystem,ItemWeight,ItemModelNumber,sellerOffersUrl } = data2[0];
        return(
            <>
                <div className="personalimagecontainer">
                    <div className="allimages">
                        {data2[0].images.map((item) => {
                            var url = item.image;
                            return (
                                <>
                                    <img src={url} alt="laptops" className="smallimage" onClick={
                                        function(){
                                            return setCurrent(url);
                                        }
                                    }/>
                                </>
                            )
                        })}
                    </div>
                    <div className="mainimagecont">
                        <img src={current} alt="laptops" class="mainimage"/>
                        <div className="rollimagetext">Roll over image to zoom in</div>
                    </div>
                    <div className="details">
                        <div className="detailssub detailssub2">{Brand} {ModelName} {GraphicsCoprocessor}
                        ({RamMemoryInstalledSize}/{HardDriveSize}/{OperatingSystem}/
                        {ItemWeight}){ItemModelNumber}...</div>
                        <a href={sellerOffersUrl} className="scrolltext">Vist the store</a>
                        <SimpleRating rating={subdata[0].rating} />
                        <p className='price'><span className="textdesign rollimagetext">Price: </span><sup>&#8377;</sup>{subdata[0].price}.00</p>
                        <h3>About this item</h3>
                        <Details id={id} elec={dataset} />
                    </div>
                </div>
                <div>
                    <h2>Frequently bought together</h2>
                    <Frequent id={id} dataset={dataset} />
                </div>
                <div>
                    <h2>Products Related to this item</h2>    
                    <div className="reclist">
                        {
                            recarr.map((item) => {
                                const temp = item.toUpperCase();
                                return (
                                    <Link to={'/laptops/'+temp} style={{ textDecoration: 'none' }} >
                                        <Recitem id={item} elec={dataset} />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <h2>Customers also viewed this</h2>
                    <div className="reclist">
                        {
                            data.map((item) => {
                                if (item.Brand===Brand){
                                    return (
                                        <Link to={'/laptops/'+item.asin} style={{ textDecoration: 'none' }} >
                                            <Recitem id={item.asin.toLowerCase()} elec={dataset} />
                                        </Link>
                                    )
                                }
                                return (
                                    <div></div>
                                )
                            })
                        }
                    </div>
                </div>
                <Table id={id} dataset={dataset} />
            </>
        )
    }

    if (recarr && dataset==='Camera'){
        const { Brand,ItemModelNumber,BestSellersRank,Manufacturer,rating,price } = tempdata[0];
        const { sellerOffersUrl } = subdata[0];
        return(
            <>
                <div className="personalimagecontainer">
                    <div className="allimages">
                        {data2[0].images.map((item) => {
                            var url = item.image;
                            return (
                                <>
                                    <img src={url} alt="laptops" className="smallimage" onClick={
                                        function(){
                                            return setCurrent(url);
                                        }
                                    }/>
                                </>
                            )
                        })}
                    </div>
                    <div className="mainimagecont">
                        <img src={current} alt="laptops" class="mainimage"/>
                        <div className="rollimagetext">Roll over image to zoom in</div>
                    </div>
                    <div className="details">
                        <div className="detailssub detailssub2">{Brand} {ItemModelNumber} {BestSellersRank} Manufactured by {Manufacturer}</div>
                        <a href={sellerOffersUrl} className="scrolltext">Vist the store</a>
                        <SimpleRating rating={rating} />
                        <p className='price'><sup>&#8377;</sup>{price}.00</p>
                        <h3>About this item</h3>
                        <Details id={id} elec={dataset} />
                    </div>
                </div>
                <div>
                    <h2>Frequently bought together</h2>
                    <Frequent id={id} dataset={dataset} />
                </div>
                <div>
                    <h2>Products Related to this item</h2>    
                    <div className="reclist">
                        {
                            recarr.map((item) => {
                                const temp = item.toUpperCase();
                                return (
                                    <Link to={'/laptops/'+temp} style={{ textDecoration: 'none' }} >
                                        <Recitem id={item} elec={dataset} />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <h2>Customers also viewed this</h2>
                    <div className="reclist">
                        {
                            cameradata.map((item) => {
                                if (item.Brand===Brand){
                                    return (
                                        <Link to={'/laptops/'+item.asin} style={{ textDecoration: 'none' }} >
                                            <Recitem id={item.asin.toLowerCase()} elec={dataset} />
                                        </Link>
                                    )
                                }
                                return (
                                    <div></div>
                                )
                            })
                        }
                    </div>
                </div>
                <Table id={id} dataset={dataset} />
            </>
        )
    }

    return (
        <div></div>
    )
    
}

export default GalleryItem;