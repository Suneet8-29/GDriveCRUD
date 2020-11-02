/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, Fragment} from 'react'

function BreadCrumb({ folderArray, index, getActiveCrumb, postUpdateIndex }) {
    

    const [crumbList, setCrumbList] = useState([]);
    //to be continued from here

    useEffect(() => {
        setCrumbList(['MyDrive']);     
     }, [])
     useEffect(() => {
         getActiveCrumb(crumbList);
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [crumbList])
    
    useEffect(() => {
        if(folderArray.length>=0 && folderArray[index])
        setCrumbList([...crumbList, folderArray[index]])
        postUpdateIndex();
         
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index])

    const handleCrumb = (name, index) => {
        getActiveCrumb(name);
        setCrumbList(crumbList.slice(0, index + 1)); 

    }
       return (
        <div className="ui huge breadcrumb"> 
            {
                crumbList.map((crumb, index) => {
                    var name = crumb.split('/');
                     return <Fragment key={index} >
                         <a className={`section active`} onClick={()=>handleCrumb(name, index)} >{name[name.length-1]} </a>
                        <i className="right angle icon divider"></i>
                    </Fragment>
                })    
            }    
                
        </div>
    )
}

export default BreadCrumb
