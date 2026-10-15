import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import * as FS from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import * as AU from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
export {FS,AU,initializeApp};
// 1) PASTE your Firebase web-app config here (see SETUP.md)
export const cfg={apiKey:"PASTE",authDomain:"PASTE",projectId:"PASTE",appId:"PASTE"};
// 2) The admin email you create in Firebase Authentication (your owner login)
export const ADMIN_EMAIL="PASTE_ADMIN_EMAIL";
export const NUM="919491304247";
export const configured=!cfg.apiKey.startsWith("PASTE");
export const app=initializeApp(cfg);
export const db=FS.getFirestore(app), auth=AU.getAuth(app);
export const mail=id=>id.trim().toLowerCase()+"@mgs-school.app";
export const fmt=t=>t?t.toDate().toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"}):"just now";
