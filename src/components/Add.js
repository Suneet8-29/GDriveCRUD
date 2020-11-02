import React, {useState} from 'react'
import Modal from 'react-modal'
import classes from './Add.module.css'

Modal.setAppElement('#root');

function Add({triggerPush, activeCrumb}) {
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    const [link, setLink] = useState(null);
    const [inputValue, setInputValue] = useState(null);

    const handleChange = (e) => {
        e.target.value = e.target.value.replaceAll('/', '');
         setInputValue(e.target.value);
        setLink(`${activeCrumb}/${e.target.value}`)
    }

     return (
        <div>
            <Modal className={classes.modal} isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)} >
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
                            <input  onChange={(e) => handleChange(e) }  type="text" placeholder="Name..."/>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <span className="right floated">
                            <button disabled={!inputValue} className="ui green button" onClick={() => { triggerPush(link); setmodalIsOpen(false); setInputValue(null) }} >Create</button>
                                                </span>
                                            </div>
                                            
                                            </div> 
            </Modal> 
             <button className="ui green button" onClick={() => setmodalIsOpen(true)}>
                 Add New 
                 <span style = {{marginLeft:'10px'}} ><i class="plus icon"></i></span>
                 </button>
            
        </div>
    )
}

export default Add
