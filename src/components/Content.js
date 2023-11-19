// function Content({ content }){
//     console.log(content);
//     const textareaStyle = {
//         background: 'transparent',
//         border: 'none',
//         width: '100%',
//         height: '75vh',
//     };
//     return(
//         <div>
//             <div className="row h-100 justify-content-center mt-3">
//                     <div className="col-11 col-xl-9">
//                         <div className="example " style={{borderRadius:"25px",backgroundColor:"rgba(220,220,220,0.627)", maxHeight: "90vh", overflowY: "scroll" }}>
                            
//                             <textarea className='example'
//                                     value={ content }
//                                     readOnly={true}
//                                     style={textareaStyle}
//                                 />
//                         </div>
//                     </div>
//                 </div>
//         </div>
//     )
// }
// export default Content;

function Content({ content }){
    console.log(content);
    const textareaStyle = {
        background: 'transparent',
        border: 'none',
        width: '100%',
        height: '75vh',
    };
    return(
        <div>
            <div className="row h-100 justify-content-center mt-3">
                    <div className="col-11 col-xl-9">
                        <div className="example " style={{borderRadius:"10px" , backgroundColor:"rgba(220,220,220,0.627)", maxHeight: "90vh", overflowY: "scroll", padding:"10px" }}>
                            
                            <textarea className='example'
                                    value={ content }
                                    readOnly={true}
                                    style={textareaStyle}
                                />
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Content;