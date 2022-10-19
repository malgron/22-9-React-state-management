import React from 'react'


function Post({type, content, handleDelete, index}) {
    if (type === "Text") {      
        const textContent = <p>{content}</p>
              
        return (
            <li key={index} className="post">     
                {textContent}
                <button name="delete" onClick={handleDelete}>Delete</button>
            </li>
        )
    } else {
        const imgContent = <img src={`${content}`} alt=""/>
        return (
            <li key={index} className="post">
                {imgContent}
                <button name="delete" onClick={handleDelete}>Delete</button>
            </li>
        )
    }
}

export default Post