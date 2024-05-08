import NotBeenSentItems from "./NotBeenSentItems";
import styles from "./NotBeenSent.module.css";
import React from "react";

const NotBeenSent: React.FunctionComponent = () => {
   const NotBeenSentItemsItems = [
      {
         name: 'Жіночий кардиган-кімоно з квітковим принтом і пухкими рукавами, вільна повсякденна блузка з прикриттям',
         price: 692.12,
         image: 'image1',
      },
   ] as any
   return (
      <div className="notBeenSent">
         {NotBeenSentItemsItems.length > 0 ? (
            <NotBeenSentItems orderItems={NotBeenSentItemsItems} />
         ) : (
            <p className="notBeenSentText">
            </p>
         )}
      </div>
   );
}

export default NotBeenSent;
