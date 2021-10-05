import React from 'react';
import fulldata from '../Fulldata';
//import cameradata from '../cameradata';
import cameradata2 from '../cameradata2';
import soapdata from '../soapdata';
import Chocolatedata from '../Chocolatedata';

function Table(props){
    const { id,dataset } = props;
    var subdata = null;
    if (dataset==='Desktop'){
        subdata = fulldata.filter((item) => {
            return item.asin===id;
        })
    }else if (dataset==='Soaps'){
        subdata = soapdata.filter((item) => {
            return item.asin===id;
        })
    }else if (dataset==='Chocolates'){
        subdata = Chocolatedata.filter((item) => {
            return item.asin===id;
        })
    }else{
        subdata = cameradata2.filter((item) => {
            return item.asin===id;
        })
    }

    const arr = Object.entries(subdata[0]);

    function modify(x){
        if (x==='RAM'){
            return x;
        }
        var l = x.length;
        var res="";
        for (let i=0;i<l;i++){
            if (i===0){
                res = res+x[i].toUpperCase();
            }else if (x.charCodeAt(i)<=90){
                res = res + " " +x[i];
            }else{
                res = res+x[i];
            }
        }
        return res;
    }

    function check(str){
        const arr = ['currency','InStock','image','asin','Asin','ASIN',
                    'reviewsCount','rating','itemDetailUrl','sellerOffersUrl',
                    'title','BestSellersRank','CustomerReviews','DateFirstAvailable',
                    'NumberOfQuestions','price','Question','rank','reviewCount',
                    'NetQuantity','images','Price'];
        if (arr.indexOf(str)!==-1) {
            return true;
        }
        return false;
    }

    return (
        <div id="About" style={{height: 500}}>
          <h2>Technical Information</h2>
          <table className="tb-1">
              {
                  arr.map((item) => {
                    if (check(item[0]) || item[1].length===0){
                        return <div></div>
                    }
                    return (
                        <tr className="tr-1">
                            <td className="td-1"><b>{modify(item[0])}</b></td>
                            <td className="td-2">{item[1]}</td>
                        </tr>
                    )
                  })
              }
          </table>
        </div>
    )
}

export default Table;