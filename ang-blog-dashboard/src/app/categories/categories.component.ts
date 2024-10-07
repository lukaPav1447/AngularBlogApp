import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  constructor(private afs: Firestore) {}

  ngOnInit(): void {}

  onSubmit(formData: any) {
    let categoryData = {
      category: formData.value.category,
    };
  }
}
