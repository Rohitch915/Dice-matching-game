const Container=(props)=>{
    return (
        <>
          <div className="my-container">
            {props.children}
          </div>
        </>
    )
}

export default Container