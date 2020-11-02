import React,{useState} from 'react'
import classes from './FolderContainer.module.css'

import Modal from 'react-modal'
import Modalclasses from './Add.module.css'

Modal.setAppElement('#root');

function FolderContainer({ activeCrumb, folderArray, getIndex, deleteFolder, editFolder}) {
     const [modalIsOpen, setmodalIsOpen] = useState(false);
    const [link, setLink] = useState(null);
    const [inputValue, setInputValue] = useState(null);
    const [activeFolder, setActiveFolder] = useState([]);
 
    const handleEdit = (e, folder) => {
        e.stopPropagation();
        setmodalIsOpen(true);
        setActiveFolder(folder);
    }

    const handleDelete = (e, folder) => {
        e.stopPropagation();
        var confirmMessage = window.confirm('Are You sure you want to delete this folder ?');
        if (confirmMessage) {
            deleteFolder(folder);
        }
        
    }
     

          return (
         <div className="ui grid">
             {
                   folderArray.map((folder, index) => {
                       var x = [];
                       if (folder.includes(activeCrumb + '/')) {
                           x = folder.split(activeCrumb + '/');
                            if (!x[x.length - 1].includes('/')) {
                               return <div  className={`four wide column ${classes.folder}`} key={index} onClick={() => getIndex(index)}>
                                   <i className="folder icon"></i>
                                   <span >{x[x.length - 1]}</span>
                                   <span style={{ float: 'right' }}>
                                       <i className="edit icon" onClick={(e)=>handleEdit(e,folder)}></i>
                                       
                                       <i className="trash alternate icon" onClick={(e)=>handleDelete(e,folder)}></i>
                                       </span>
                               </div>
                           }
                           else return null;
 
                       }
                       else return null;
                      
                      
                 })
                 } 
                 

                 <Modal className={Modalclasses.modal} isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)} >
                                     <div className="ui card" style={{width : 'inherit'}}>
                                            <div className="content">
                                                <div className="right floated" onClick={()=>setmodalIsOpen(false)} ><i className="window close icon"></i></div>
                                                 Enter Folder Name 
                                            </div>
                                            <div className="image">
                                             </div>
                                             <div className="extra content">
                                                <div className="ui large transparent left icon input" style={{width : '100%'}}>
                                                <i className="angle double right icon"></i>
                            <input onChange={(e) => { setInputValue(e.target.value); setLink(e.target.value) }}  type="text" placeholder="Name..."/>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <span className="right floated">
                                 <button disabled={!inputValue} className="ui green button" onClick={() => { setmodalIsOpen(false); editFolder(link,activeFolder); setInputValue(null) }} >Change</button>
                                                </span>
                                            </div>
                                            
                                            </div> 
            </Modal> 

         </div>
    )
}

export default FolderContainer
