import React, {useState} from 'react'
import BreadCrumb from './BreadCrumb'
import Add from './Add'
import FolderContainer from './FolderContainer'


function App() {

    const [folderArray, setFolderArray] = useState([]);
    const [index, setIndex] = useState(null);
    const [activeCrumb, setActiveCrumb] = useState('');
    

    const triggerPush = (link) => {
         setFolderArray([...folderArray,link])
     }
    
    const getIndex = (index) => {
        setIndex(index);
    }

    const getActiveCrumb = (crumbList)=> {
        setActiveCrumb(crumbList.join('/'));
    }

    const deleteFolder = (folder) => {
        var newArr = folderArray.filter(element => {
            return !element.includes(folder);
        })
        setFolderArray(newArr);
    }

    const editFolder = (newName, folder) => {
 
        var x = folder.split('/');
        x[x.length - 1] = newName;
        var final = x.join('/');
  
        var newArray = folderArray.map(element => {
            if (element.includes(folder)) {
                element = element.replaceAll(folder, final);
            }

            return element;
                
        })
         setFolderArray(newArray);
        
    }

    const postUpdateIndex = () => {
        setIndex(null);
    }

       return (
        <div className='ui container'>
            <br/>
            <Add activeCrumb={activeCrumb} triggerPush={triggerPush} ></Add>
            <br/>
             <BreadCrumb postUpdateIndex={postUpdateIndex} folderArray={folderArray} index={index} getActiveCrumb={getActiveCrumb}></BreadCrumb>
             <br/>
             <br/>
             <br/>
            <FolderContainer editFolder = {editFolder}  deleteFolder={deleteFolder} activeCrumb={activeCrumb} folderArray={folderArray} getIndex={getIndex} ></FolderContainer>
 
        </div>
    )
}

export default App;
