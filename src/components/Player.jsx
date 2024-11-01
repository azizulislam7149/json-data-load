import React, { useEffect, useState } from 'react';
import ShowPlayer from './ShowPlayer';
import { data } from 'autoprefixer';

const Player = () => {

    const[datas, setData]= useState([]);

    useEffect(()=>{
    
        fetch('../../public/fakeData.json')
        .then(res=>res.json())
        .then(data=>setData(data));
    },[])



    return (
        <div className='md:w-2/3 grid grid-cols-3 gap-10 mt-28'>
           
          {
            datas.map(data=> (<div key={data.id} className="card card-compact bg-base-100">
                <figure>
                  <img className='w-96 h-48'
                    src={data.image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{data.name}</h2>
                  <p>{data.role}</p>
                  <p>{data.battingType}</p>
                  <p>{data.bowlingType}</p>
                  <span>{data.biddingPrice}</span>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Choose player</button>
                  </div>
                </div>
              </div>)
          )}
        </div>
    );
};

export default Player;