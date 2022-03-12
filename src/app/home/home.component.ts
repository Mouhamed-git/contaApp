import { Component, OnInit, ViewChild } from '@angular/core';
import { Timestamp } from 'firebase/firestore';
import { Helpers } from '../helpers/helpers';
import { TransactionService } from '../services/transaction.service';
import { DecaissementType } from '../shared/enums/decaissement-type';
import { Mounth, MOUNTHS } from '../shared/enums/mounth';
import { TransactionType, TRANSACTION_TYPE } from '../shared/enums/transaction-type';
import { TransactionModel } from '../shared/models/transaction-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  transactions: TransactionModel[] = [];
  mounths = MOUNTHS;
  transactionTypes = TRANSACTION_TYPE;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    // this.getTransactions();
  }

  getTransactions() {
    this.transactionService.getAll().subscribe(data => {
      console.log(data);  
      this.transactions = data;
    }, error => {
      console.log(error);
      
    })
  }

  ngAfterViewInit() {
    this.getTransactions();
  }

  filter(value: any) {

  }

  getStatus(status?: number) {
    switch (status) {
      case 0 : return 'Non Payé';
      case 1 : return 'Payé';
    }
    return;
  }

  getDate(dateTime: Timestamp) {
    return Helpers.convertToDate(dateTime!);
  }
}

