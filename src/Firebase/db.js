import firebase from './firebase';


    const auth = firebase.auth();
    const db = firebase.database();

    //products node 

   export const rootRefProducts=db.ref().child('products');

    //all Categories 
   export const catRef=rootRefProducts.child('category');

   // particular category
   export const apparelsRef=catRef.child('apparels');
   export const back_to_schoolRef=catRef.child('back_to_school');
   export const health_beautyRef=catRef.child('health_beauty');
   export const food_groceryRef=catRef.child('food_grocery');
   export const home_appliancesRef=catRef.child('home_appliances');
   export const pharmacyRef=catRef.child('pharmacy');

   





//    export const product_idRef=apparelsRef.child('product_id');
//     exportconst barcodeRef=product_idRef.child('barcode');
    
    
// barcodeRef.on('value', snap =>{
//     console.log(snap.val());
//     })
//   }