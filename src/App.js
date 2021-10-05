import './App.css';
import { Route,Switch } from 'react-router-dom';
import Header from './components/Header';
import ImageList from './components/ImageList';
import GalleryItem from './components/GalleryItem';
import HomePage from './components/Homepage';
import { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';
import ViewSubscriptions from './components/ViewSubscriptions';

function App() {
  const [res,setRes] = useState(null); 
  const handleSearch = (data) => {
    //console.log(data);
    setRes(data);
  }
  return (
    <>
      <Header setSearch={handleSearch} />
      <div className="margbot">  </div>
      <div className="margin">
        <Switch>
          <Route exact path='/'>
            <HomePage searchdata={res} />
          </Route>
          <Route path='/homepage'>
            <HomePage searchdata={res} />
          </Route>
          <Route exact path='/laptops'>
            <div className="dividemaincontainer">
              {/* <div className="sortandfilterbuttons">
                <button>Sort</button>
                <button>Filter</button>
              </div> */}
              <ImageList elec='laptops' brand='null' />  
            </div>
          </Route>
          <Route exact path='/cameras'>
            <div className="dividemaincontainer">
              {/* <div className="sortandfilterbuttons">
                <button>Sort</button>
                <button>Filter</button>
              </div> */}
              <ImageList elec='cameras' brand='null' />
            </div>
          </Route>
          <Route path='/laptops/:asin'>
            <GalleryItem />
            <ScrollToTop />
          </Route>
          <Route path='/recommendationengine'>
            <HomePage searchdata={res} />
          </Route>
          <Route path='/soaps'>
            <div className="dividemaincontainer">
              {/* <div className="sortandfilterbuttons">
                <button>Sort</button>
                <button>Filter</button>
              </div> */}
              <ImageList elec='soaps' brand='null' />
            </div>
          </Route>
          <Route path='/chocolates'>
            <div className="dividemaincontainer">
              {/* <div className="sortandfilterbuttons">
                <button>Sort</button>
                <button>Filter</button>
              </div> */}
              <ImageList elec='chocolates' brand='null' />
            </div>
          </Route>
          <Route path='/ViewSubscriptions'>
            <ViewSubscriptions />
          </Route>
          <Route>
            <h1>404! Error Page</h1>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
