import pix from "../../assets/car.jpg"

const ProudutSceen = () => {
  return (
    <div>
        <>
<div className="w-[100%] flex justify-center items-center h-[90vh]">
<div className="w-[260px] min-h-[10vh] border-[1px] border-[#ffff] shadow-2xl flex items-center flex-col rounded-[7px]">
<img src={pix} alt="" className="w-[250px] h-[300px] justify-center items-center object-cover rounded-[4px] cursor-pointer"/>
<b>Title of this Prodcut</b>
<div className=" relative w-[100%] min-h-[10px] flex justify-center items-center">
<div className="cursor-pointer">⭐⭐⭐⭐⭐</div>
{/* <div className="cursor-pointer">⭐⭐⭐⭐⭐</div> */}
</div>
<span className="">$40,000</span>
        </div>
</div>
        </>
    </div>
  )
}

export default ProudutSceen;