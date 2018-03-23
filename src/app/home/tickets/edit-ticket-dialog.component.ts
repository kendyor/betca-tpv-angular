import { Component, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Shopping } from '../shared/shopping.model';
import { TicketService } from '../shared/ticket.service';

@Component({
  selector: 'app-edit-ticket-dialog',
  templateUrl: './edit-ticket-dialog.component.html',
  styleUrls: ['./edit-ticket-dialog.component.css']
})
export class EditTicketDialogComponent {
  idTicket: string = this.data.ticket.id;
  displayedColumns = ['numLineShopping', 'description', 'retailPrice', 'amount', 'discount', 'committed'];
  listAmountsShoppings: number[];
  listCommitedsShoppings: boolean[];
  dataSource: MatTableDataSource<Shopping>;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private ticketService: TicketService) {
    this.dataSource = new MatTableDataSource<Shopping>(this.data.ticket.shoppingList);
    this.listAmountsShoppings = [];
    this.listCommitedsShoppings = [];
    for (const shopping of this.data.ticket.shoppingList) {
      this.listAmountsShoppings.push(shopping.amount);
      this.listCommitedsShoppings.push(shopping.committed);
    }
  }
  decreaseAmount(indexShopping: number) {
    if (this.listAmountsShoppings[indexShopping] > 0) {
      this.listAmountsShoppings[indexShopping]--;
      if (this.listAmountsShoppings[indexShopping] === 0 && !this.data.ticket.shoppingList[indexShopping].committed) {
        this.listCommitedsShoppings[indexShopping] = true;
      }
    }
  }
  increaseAmount(indexShopping: number) {
    if (this.listAmountsShoppings[indexShopping] < this.data.ticket.shoppingList[indexShopping].amount) {
      this.listAmountsShoppings[indexShopping]++;
    }
  }
  isMaxAmountShopping(indexShopping: number): boolean {
    return this.listAmountsShoppings[indexShopping] === this.data.ticket.shoppingList[indexShopping].amount;
  }
  isMinAmountShopping(indexShopping: number): boolean {
    return this.listAmountsShoppings[indexShopping] === 0;
  }
  updateTicket() {
    this.ticketService.updateAmountAndStateTicket(this.idTicket, this.listAmountsShoppings, this.listCommitedsShoppings);
  }
}