import { Component, OnInit } from '@angular/core';
import{AngularFirestore} from '@angular/fire/firestore';
import{NgForm} from '@angular/forms';
import{ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})

export class StaffComponent  {

staff=[];
name:string;
email:string;
address:string;
date:string;
city:string;
state:string;
contact:string;
id:string;

  constructor(private firestore:AngularFirestore,private toastr:ToastrService) {

    this.getS().subscribe(data => {
 
      this.staff = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          name: e.payload.doc.data()['name'],
          email: e.payload.doc.data()['email'],
          adrress: e.payload.doc.data()['address'],
          date: e.payload.doc.data()['date'],
          city: e.payload.doc.data()['city'],
          state: e.payload.doc.data()['state'],
          contact: e.payload.doc.data()['contact']

        };
      })
      console.log(this.staff);
    });
  }

  edit(formdata){
console.log(formdata);
this.name = formdata.name;
this.email = formdata.email;
this.address = formdata.address;
this.date = formdata.date;
this.city = formdata.city;
this.state = formdata.state;
this.contact = formdata.contact;
this.id = formdata.id
}
  delete(id){
    console.log(id);
    this.firestore.doc('staff/' + id).delete(); 
   this.toastr.success('Deleted!', 'Sucess fun!');
  }
  getS(){
    return this.firestore.collection('staff').snapshotChanges();
  }

  save(myForm:NgForm){
    if(this.id === undefined ||this.id == ''){
      let record = {};
      record['name'] = myForm.value.name;
      record['email'] = myForm.value.email;
      record['address'] = myForm.value.address;
      record['date'] = myForm.value.date;
      record['city'] = myForm.value.city;
      record['state'] = myForm.value.state;
      record['contact'] = myForm.value.contact;
     this.firestore.collection('staff').add(record)
      this.toastr.success('Successfully Inserted!', 'Toastr fun!');}
else{
  let record = {};
  record['name'] = myForm.value.name;
  record['email'] = myForm.value.email;
  record['address'] = myForm.value.address;
  record['date'] = myForm.value.date;
  record['city'] = myForm.value.city;
  record['state'] = myForm.value.state;
  record['contact'] = myForm.value.contact;
  this.firestore.doc('staff/' + myForm.value.id).update(record);
}
}
}