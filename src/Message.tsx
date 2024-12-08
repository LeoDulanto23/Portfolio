import './MoveText.css'
//pascal casing: captlizing the first word of every word
//cd into project
//npm run dev for localhost url link
const Message = () => {
    //JSX: Javascript XML
    const name = "Leonardo"

    if (name) 
    {
        return (
          <div className="container">
            <h1 className="moveHeader">Hello {name}</h1>
          </div>
        );
    } else {
        return (
          <div className="container">
            <h1 className="moveHeader">Hello World</h1>
          </div>
        );
    }
   
}

export default Message
