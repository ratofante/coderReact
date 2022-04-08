const OrderPurchased = (props) => {
   const { items } = props;

   console.log(props);
   console.log(items);
   return (<div className="purchase-showcase m-auto w-11/12">
      <h3>Thank you for your purchase! </h3>
      <h1>Here is what you bought: </h1>
      {items.map(e => {
         return (
            <div key={e.key}
               className="container sm flex justify-between mt-5 bg-slate-200 text-black p-5 rounded">
               <div className="w-6/12">
                  <h4 className="text-4xl">{e.name.toUpperCase()}</h4>
                  <p className="text-lg w-6/12 mt-3 border-b-2 border-black">
                     {e.description}
                  </p>
                  <span className="inline-block mt-3">
                     You bought {e.count} units for the total price of: <strong> $ {e.count * e.price} </strong>
                  </span>
               </div>
               <div className="w-3/12">
                  <img src={e.bigImg} alt={e.name}
                     className="w-full" />
               </div>
            </div>
         )
      })}
   </div>);
}

export default OrderPurchased;