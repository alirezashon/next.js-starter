import Image from 'next/image'

export default function Products (){
    return(
        <div className='d-flex my-3' style={{justifyContent:'space-between'}}>
<div className="card w-25 mx-3 products-box ">
  <Image className="card-img-top  products-image" src="/images/123.jpg" alt="Vercel Logo" width={272} height={280} />
  <div className="card-body">
    <h5 className="card-title products-label">لورم ایپسوم</h5>
    <p className="card-text border border-warning py-2 px-1 rounded" style={{direction:'rtl'}}>لورم ایپسوم یک متن ساختگی صر فا جهت تست در ساخت نرم افزار بدون مفهوم معنایی مشخص استفاده شده است . </p>
    <a href="#" className="btn btn-outline-danger">خرید</a>
  </div>
</div>

<div className="card w-25 mx-3 products-box ">
  <Image className="card-img-top  products-image" src="/images/123.jpg" alt="Vercel Logo" width={272} height={280} />
  <div className="card-body">
    <h5 className="card-title products-label">لورم ایپسوم</h5>
    <p className="card-text border border-warning py-2 px-1 rounded" style={{direction:'rtl'}}>لورم ایپسوم یک متن ساختگی صر فا جهت تست در ساخت نرم افزار بدون مفهوم معنایی مشخص استفاده شده است . </p>
    <a href="#" className="btn btn-outline-danger">خرید</a>
  </div>
</div>

<div className="card w-25 mx-3 products-box ">
  <Image className="card-img-top  products-image" src="/images/123.jpg" alt="Vercel Logo" width={272} height={280} />
  <div className="card-body">
    <h5 className="card-title products-label">لورم ایپسوم</h5>
    <p className="card-text border border-warning py-2 px-1 rounded" style={{direction:'rtl'}}>لورم ایپسوم یک متن ساختگی صر فا جهت تست در ساخت نرم افزار بدون مفهوم معنایی مشخص استفاده شده است . </p>
    <a href="#" className="btn btn-outline-danger">خرید</a>
  </div>
</div>

<div className="card w-25 mx-3 products-box ">
  <Image className="card-img-top  products-image" src="/images/123.jpg" alt="Vercel Logo" width={272} height={280} />
  <div className="card-body">
    <h5 className="card-title products-label">لورم ایپسوم</h5>
    <p className="card-text border border-warning py-2 px-1 rounded" style={{direction:'rtl'}}>لورم ایپسوم یک متن ساختگی صر فا جهت تست در ساخت نرم افزار بدون مفهوم معنایی مشخص استفاده شده است . </p>
    <a href="#" className="btn btn-outline-danger">خرید</a>
  </div>
</div>

        </div>
    )
}












