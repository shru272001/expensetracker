export const total=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firestore=getFirebase().firestore()
        firestore
        .collection(getState().firebase.auth.uid)
        .doc('Total')
        .set({
            Total:0,
            FullTotal:0
        })
    }
}






export const cloth=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firestore = getFirebase().firestore()
        firestore
        .collection(getState().firebase.auth.uid)
        .doc("Clothing")
        .set({
            Purchase_bills:0,
            Others:0,
            Total:0
        })
    }
}

export const debt=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firestore = getFirebase().firestore()
        firestore
        .collection(getState().firebase.auth.uid)
        .doc("Debt")
        .set({
        Personnel:0,
        Credit:0,
        Education:0,
        Emi:0,
        Others:0,
        Total:0
        })
    }
}

export const education=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firestore = getFirebase().firestore()
        firestore
        .collection(getState().firebase.auth.uid)
        .doc("Education")
        .set({
        sfees:0,
        hfees:0,
        Others:0,
        Total:0
        })
    }
}

export const entertainment=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firestore = getFirebase().firestore()
        firestore
        .collection(getState().firebase.auth.uid)
        .doc("Entertainment")
        .set({
            Movies:0,
            Subscriptions:0,
            Games:0, 
            Hotels:0, 
            Concerts:0,
            Others:0,
            Total:0
        })
    }
}

export const groceries=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firestore = getFirebase().firestore()
        firestore
        .collection(getState().firebase.auth.uid)
        .doc("Groceries")
        .set({
            Essential_bills:0,
            Others:0,
            Total:0
        })
    }
}

export const health=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firestore = getFirebase().firestore()
        firestore
        .collection(getState().firebase.auth.uid)
        .doc("Health")
        .set({
            Pharmacy:0,
        General:0,
        Special:0,
        Emergency:0,
        Dental:0,
            Others:0,
            Total:0
        })
    }
}

export const house=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firestore = getFirebase().firestore()
        firestore
        .collection(getState().firebase.auth.uid)
        .doc("Housing")
        .set({
            Rent:0,
            Phones:0,
            Water:0,
            Gas:0,
            Electricity:0,
            Salary_emp:0,
            Internet:0,
            Purchase_bills:0,
            Others:0,
            Total:0
        })
    }
}

export const insuran=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firestore = getFirebase().firestore()
        firestore
        .collection(getState().firebase.auth.uid)
        .doc("Insurance")
        .set({
            Insurance:0,
            Others:0,
            Total:0,
        })
    }
}

export const percare=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firestore = getFirebase().firestore()
        firestore
        .collection(getState().firebase.auth.uid)
        .doc("Personal")
        .set({
            Memberships:0,
            Cosmetics:0,
            Salon:0,
            Others:0,
            Total:0
        })
    }
}



export const transport=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firestore = getFirebase().firestore()
        firestore
        .collection(getState().firebase.auth.uid)
        .doc("Transport")
        .set({
            Fuel:0,
            Cab_Taxi:0,
            Maintainance:0,
            Others:0,
            Total:0
        })
    }
}














export const feedback=(param)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firestore=getFirebase().firestore()
        firestore
        .collection("Feedback")
        .add({
            ...param
        })
    }
}