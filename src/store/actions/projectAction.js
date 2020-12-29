export const test = (param) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
    .collection(getState().firebase.auth.uid)
    .doc("Transport")
    .get()
    .then(doc=>{
      const fuel=parseInt(doc.data().Fuel)+parseInt(param.Fuel)
      const cab=parseInt(doc.data().Cab_Taxi)+parseInt(param.Cab_Taxi)
      const main=parseInt(doc.data().Maintainance)+parseInt(param.Maintainance)
      const other=parseInt(doc.data().Others)+parseInt(param.Others)
      const tot=parseInt(doc.data().Total)+parseInt(param.Total)
      firestore
      .collection(getState().firebase.auth.uid)
      .doc("Transport")
      .update({
        Fuel:fuel,
        Cab_Taxi:cab,
        Maintainance:main,
        Others:other,
        Total:tot
      })
      console.log("yay dude")
    })
    
  };
};

export const testentert = (param) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
    .collection(getState().firebase.auth.uid)
    .doc("Entertainment")
    .get()
    .then(doc=>{
      const hotel=parseInt(doc.data().Hotels)+parseInt(param.Hotels)
      const movie=parseInt(doc.data().Movies)+parseInt(param.Movies)
      const subs=parseInt(doc.data().Subscriptions)+parseInt(param.Subscriptions)
      const game=parseInt(doc.data().Games)+parseInt(param.Games)
      const concert=parseInt(doc.data().Concerts)+parseInt(param.Concerts)
      const other=parseInt(doc.data().Others)+parseInt(param.Others)
      const tot=parseInt(doc.data().Total)+parseInt(param.Total)
      firestore
      .collection(getState().firebase.auth.uid)
      .doc("Entertainment")
      .update({
        Hotels:hotel,
        Movies:movie,
        Subscriptions:subs,
        Games:game,
        Concerts:concert,
        Others:other,
        Total:tot
      })
      console.log("yay dude")
    })
    
  };
};

export const testedu = (param) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
    .collection(getState().firebase.auth.uid)
    .doc("Education")
    .get()
    .then(doc=>{
      const school=parseInt(doc.data().sfees)+parseInt(param.sfees)
      const hostel=parseInt(doc.data().hfees)+parseInt(param.hfees)
      const other=parseInt(doc.data().Others)+parseInt(param.Others)
      const tot=parseInt(doc.data().Total)+parseInt(param.Total)
      firestore
      .collection(getState().firebase.auth.uid)
      .doc("Education")
      .update({
        sfees:school,
        hfees:hostel,
        Others:other,
        Total:tot
      })
      console.log("yay dude")
    })
    
  };
};

export const testdebt = (param) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
    .collection(getState().firebase.auth.uid)
    .doc("Debt")
    .get()
    .then(doc=>{
      const per=parseInt(doc.data().Personnel)+parseInt(param.Personnel)
      const cre=parseInt(doc.data().Credit)+parseInt(param.Credit)
      const edu=parseInt(doc.data().Education)+parseInt(param.Education)
      const emi=parseInt(doc.data().Emi)+parseInt(param.Emi)
      const other=parseInt(doc.data().Others)+parseInt(param.Others)
      const tot=parseInt(doc.data().Total)+parseInt(param.Total)
      firestore
      .collection(getState().firebase.auth.uid)
      .doc("Debt")
      .update({
        Personnel:per,
        Credit:cre,
        Education:edu,
        Emi:emi,
        Others:other,
        Total:tot
      })
      console.log("yay dude")
    })
    
  };
};

export const testcare = (param) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
    .collection(getState().firebase.auth.uid)
    .doc("Personal")
    .get()
    .then(doc=>{
      const salon=parseInt(doc.data().Salon)+parseInt(param.Salon)
      const cos=parseInt(doc.data().Cosmetics)+parseInt(param.Cosmetics)
      const mem=parseInt(doc.data().Memberships)+parseInt(param.Memberships)
      const other=parseInt(doc.data().Others)+parseInt(param.Others)
      const tot=parseInt(doc.data().Total)+parseInt(param.Total)
      firestore
      .collection(getState().firebase.auth.uid)
      .doc("Personal")
      .update({
        Salon:salon,
        Cosmetics:cos,
        Memberships:mem,
        Others:other,
        Total:tot
      })
      console.log("yay dude")
    })
    
  };
};

export const testgro = (param) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
    .collection(getState().firebase.auth.uid)
    .doc("Groceries")
    .get()
    .then(doc=>{
      const Essentials=parseInt(doc.data().Essential_bills)+parseInt(param.Essential_bills)
      const other=parseInt(doc.data().Others)+parseInt(param.Others)
      const tot=parseInt(doc.data().Total)+parseInt(param.Total)
      firestore
      .collection(getState().firebase.auth.uid)
      .doc("Groceries")
      .update({
        Essential_bills:Essentials,
        Others:other,
        Total:tot
      })
    })
    
  };
};

export const testins = (param) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
    .collection(getState().firebase.auth.uid)
    .doc("Insurance")
    .get()
    .then(doc=>{
      const insu=parseInt(doc.data().Insurance)+parseInt(param.Insurance)
      const other=parseInt(doc.data().Others)+parseInt(param.Others)
      const tot=parseInt(doc.data().Total)+parseInt(param.Total)
      firestore
      .collection(getState().firebase.auth.uid)
      .doc("Insurance")
      .update({
        Insurance:insu,
        Others:other,
        Total:tot
      })
    })
    
  };
};


export const testhealth = (param) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
    .collection(getState().firebase.auth.uid)
    .doc("Health")
    .get()
    .then(doc=>{
      const Pharmacy=parseInt(doc.data().Pharmacy)+parseInt(param.Pharmacy)
      const Dental=parseInt(doc.data().Dental)+parseInt(param.Dental)
      const Emergency=parseInt(doc.data().Emergency)+parseInt(param.Emergency)
      const Special=parseInt(doc.data().Special)+parseInt(param.Special)
      const General=parseInt(doc.data().General)+parseInt(param.General)
      const other=parseInt(doc.data().Others)+parseInt(param.Others)
      const tot=parseInt(doc.data().Total)+parseInt(param.Total)
      firestore
      .collection(getState().firebase.auth.uid)
      .doc("Health")
      .update({
        Pharmacy:Pharmacy,
        General:General,
        Special:Special,
        Emergency:Emergency,
        Dental:Dental,
        Others:other,
        Total:tot
      })
    })
    
  };
};

export const testcloth = (param) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
    .collection(getState().firebase.auth.uid)
    .doc("Clothing")
    .get()
    .then(doc=>{
      const purchase=parseInt(doc.data().Purchase_bills)+parseInt(param.Purchase_bills)
      const other=parseInt(doc.data().Others)+parseInt(param.Others)
      const tot=parseInt(doc.data().Total)+parseInt(param.Total)
      firestore
      .collection(getState().firebase.auth.uid)
      .doc("Clothing")
      .update({
        Purchase_bills:purchase,
        Others:other,
        Total:tot
      })
    })
    
  };
};

export const testhouse = (param) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
    .collection(getState().firebase.auth.uid)
    .doc("Housing")
    .get()
    .then(doc=>{
      const Rent=parseInt(doc.data().Rent)+parseInt(param.Rent)
      const Phone=parseInt(doc.data().Phones)+parseInt(param.Phones)
      const water=parseInt(doc.data().Water)+parseInt(param.Water)
      const gas=parseInt(doc.data().Gas)+parseInt(param.Gas)
      const elec=parseInt(doc.data().Electricity)+parseInt(param.Electricity)
      const sal =parseInt(doc.data().Salary_emp)+parseInt(param.Salary_emp)
      const Purchase= parseInt(doc.data().Purchase_bills)+parseInt(param.Purchase_bills)
      const Others=parseInt(doc.data().Others)+parseInt(param.Others)
      const inter=parseInt(doc.data().Internet)+parseInt(param.Internet)
      const tot=parseInt(doc.data().Total)+parseInt(param.Total)
      firestore
      .collection(getState().firebase.auth.uid)
      .doc("Housing")
      .update({
        Rent:Rent,
        Phones:Phone,
        Water:water,
        Gas:gas,
        Electricity:elec,
        Salary_emp:sal,
        Internet:inter,
        Purchase_bills:Purchase,
        Others:Others,
        Total:tot
      })
    })
  }}


export const total = ()=>{
  return( dispatch , getState,{getFirebase})=>{
    const firestore = getFirebase().firestore()
    var k=0
    firestore
    .collection(getState().firebase.auth.uid)
    .get()
    .then(snap => {
      snap.forEach(doc => {
        k=k+parseInt(doc.data().Total)
        
      });
     
      firestore
      .collection(getState().firebase.auth.uid)
      .doc('Total')
      .update({
        FullTotal:k
      })
    })
     
  }
}
















 
  