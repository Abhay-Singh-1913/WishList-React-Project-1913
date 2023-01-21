import React from 'react'

const Cards = ({ mainData }) => {
    return (
        <>
            {mainData.map((curElem) => {
                return (
                    <>
                        <div className='Container' key={curElem.id}>
                            <div className='Card'>
                                <span className='Num'>{curElem.id}</span>
                                <h2>{curElem.name}</h2>
                                <img src={curElem.image} alt="img is here" />
                                <p>{curElem.description}</p>
                                <button type='Submit' className='like'>{curElem.comment}</button>
                            </div>
                        </div>
                    </>
                );
            })}

        </>
    );
};
export default Cards;
