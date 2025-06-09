

function MyClockTime () {
    return(
        <div className='text-2xl font-bold'>
           현재시각  : {new Date().toLocaleTimeString()}        
        </div>
        
    )
}
export default MyClockTime
