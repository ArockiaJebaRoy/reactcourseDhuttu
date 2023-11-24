import React from 'react'


import ItemsList from './ItemsList';

const Content = ({items,handleCheck,
  handleDelete}) => {
  

  return (
    <>
      {(items.length) ? (
       <ItemsList 
       items={items}
       handleCheck={handleCheck}
       handleDelete={handleDelete}/>
      ) : (
        <p style= {{marginTop:'2rem'}}>Your List is empty</p>
      )
}
     </>
  )
}

export default Content

/*
<p>Lets {name} Money</p>
      <button onClick={handleNameChange}> Subscribe</button>*/

