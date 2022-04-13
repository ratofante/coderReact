const OrderPurchased = (props) => {
   const { items } = props;

   console.log(props);
   console.log(items);
   return (<div className="purchase-showcase m-auto w-11/12">
      <h3 className="w-100 mx-auto text-center rounded">Thank you for your purchase! </h3>
      <h4 className="mt-4 text-yellow-500 font-bold">Here is what you bought: </h4>
      {items.map(e => {
         return (
            <div key={e.key}
               className="container sm flex flex-col-reverse justify-between mt-5 bg-slate-200 text-black p-5 rounded">
               <div className="">
                  <h4 className="text-2xl text-center">{e.name.toUpperCase()}</h4>
                  <p className="text-lg mt-3 border-b-2 border-black">
                     {e.description}
                  </p>
                  <span className="inline-block mt-3">
                     You bought {e.count} units for the total price of: <strong> $ {e.count * e.price} </strong>
                  </span>
               </div>
               <div className="mx-auto mb-4 w-6/12">
                  <img src={e.bigImg} alt={e.name}
                     className="w-full" />
               </div>
            </div>
         )
      })}
   </div>);
}

export default OrderPurchased;