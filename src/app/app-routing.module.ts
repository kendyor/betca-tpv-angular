import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CancelYesDialogComponent} from './core/cancel-yes-dialog.component';
import {HomeComponent} from './home/home.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AdvancedSearchComponent} from './home/cashier-opened/advanced-search/advanced-search.component';
import {BudgetsComponent} from './home/budgets/budgets.component';
import {CashierClosedComponent} from './home/cashier-closed/cashier-closed.component';
import {CashierOpenedComponent} from './home/cashier-opened/cashier-opened/cashier-opened.component';
import {EditTicketDialogComponent} from './home/tickets/edit-ticket-dialog.component';
import {ProvidersComponent} from './home/providers/providers.component';
import {ProviderCreationEditDialogComponent} from './home/providers/provider-creation-edit-dialog.component';
import {ShoppingCartComponent} from './home/cashier-opened/shopping-cart/shopping-cart.component';
import {CashierCloseDialogComponent} from './home/cashier-opened/cashier-opened/cashier-close-dialog.component';
import {CashierMovementDialogComponent} from './home/cashier-opened/cashier-opened/cashier-movement-dialog.component';
import {CheckOutDialogComponent} from './home/cashier-opened/shopping-cart/check-out-dialog.component';
import {ArticleQuickCreationDialogComponent} from './home/cashier-opened/shopping-cart/article-quick-creation-dialog.component';
import {StatisticsComponent} from './home/statistics/statistics.component';
import {TicketsComponent} from './home/tickets/tickets.component';
import {UsersComponent} from './home/users/users.component';
import {UserCreationEditDialogComponent} from './home/users/user-creation-edit-dialog.component';
import {VouchersComponent} from './home/vouchers/vouchers.component';
import {VoucherCreationDialogComponent} from './home/vouchers/voucher-creation-dialog.component';
import {ArticlesComponent} from './home/articles/articles.component';
import {Statistics2Component} from './home/statistics2/statistics2.component';
import {VoucherConsumeDialogComponent} from './home/cashier-opened/shopping-cart/voucher-consume-dialog.component';
import {ArticleCreationEditDialogComponent} from './home/articles/article-creation-edit-dialog.component';
import {OrdersComponent} from './home/orders/orders.component';
import {UserChangingPasswordDialogComponent} from './home/users/user-changing-password-dialog.component';
import {VoucherEditDialogComponent} from './home/vouchers/voucher-edit-dialog.component';
import {InvoicesComponent} from './home/invoices/invoices.component';
import {ViewInvoiceDialogComponent} from './home/invoices/view-invoice-dialog.component';
import {InvoiceCreationDialogComponent} from './home/invoices/invoice-creation-dialog.component';
import {UserQuickCrudComponent} from './home/shared/user-quick-crud.component';
import {UserQuickCreationEditDialogComponent} from './home/shared/user-quick-creation-edit-dialog.component';
import {CashierClosuresComponent} from './home/cashier-closures/cashier-closures.component';
import {ArticlesFamilySizesDialogComponent} from './home/cashier-opened/articles-family/articles-family-sizes-dialog.component';
import {ArticlesFamilyComponent} from './home/articles/articles-family.component';
import {ArticlesFamilyViewComponent} from './home/cashier-opened/articles-family/articles-family.component';
import {FamilyAdditionDialogComponent} from './home/articles/family-addition-dialog.component';
import {FamilyCreationEditDialogComponent} from './home/articles/family-creation-edit-dialog.component';
import {HistoricChartComponent} from './home/statistics2/historicChart.component';
import {PercentageChartComponent} from './home/statistics2/percentageChart.component';
import {IncomeComparisonChartComponent} from './home/statistics2/incomeComparisonChart.component';
import {OrderCreationEditDialogComponent} from './home/orders/order-creation-edit-dialog.component';
import {PaymentComponent} from './home/shared/payment.component';
import {PaymentDialogComponent} from './home/tickets/payment-dialog.component';
import {TicketTrackingComponent} from './home/tickets/ticket-tracking.component';
import {TagCreationEditDialogComponent} from './home/articles/tag-creation-edit-dialog.component';
import {TagsComponent} from './home/articles/tags.component';
import {FamilySizesCreationDialogComponent} from './home/articles/family-sizes-creation-dialog.component';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: WelcomeComponent.URL},
  {path: WelcomeComponent.URL, component: WelcomeComponent},
  {
    path: HomeComponent.URL, component: HomeComponent,
    children: [
      {path: ArticlesComponent.URL, component: ArticlesComponent},
      {path: ArticlesFamilyComponent.URL, component: ArticlesFamilyComponent},
      {path: BudgetsComponent.URL, component: BudgetsComponent},
      {path: CashierClosedComponent.URL, component: CashierClosedComponent},
      {path: CashierClosuresComponent.URL, component: CashierClosuresComponent},
      {path: CashierMovementDialogComponent.URL, component: CashierMovementDialogComponent},
      {path: CashierOpenedComponent.URL, component: CashierOpenedComponent},
      {path: InvoicesComponent.URL, component: InvoicesComponent},
      {path: OrdersComponent.URL, component: OrdersComponent},
      {path: ProvidersComponent.URL, component: ProvidersComponent},
      {path: StatisticsComponent.URL, component: StatisticsComponent},
      {path: Statistics2Component.URL, component: Statistics2Component},
      {path: TagsComponent.URL, component: TagsComponent},
      {path: TicketsComponent.URL, component: TicketsComponent},
      {path: TicketTrackingComponent.URL, component: TicketTrackingComponent},
      {path: UsersComponent.URL, component: UsersComponent},
      {path: VouchersComponent.URL, component: VouchersComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static COMPONENTS = [
    AdvancedSearchComponent,
    ArticlesComponent,
    ArticlesFamilyComponent,
    ArticlesFamilyViewComponent,
    BudgetsComponent,
    CashierClosedComponent,
    CashierOpenedComponent,
    CashierMovementDialogComponent,
    CashierClosuresComponent,
    HomeComponent,
    InvoicesComponent,
    OrdersComponent,
    PaymentComponent,
    ProvidersComponent,
    ShoppingCartComponent,
    StatisticsComponent,
    Statistics2Component,
    TagsComponent,
    TicketsComponent,
    TicketTrackingComponent,
    UserQuickCrudComponent,
    UsersComponent,
    VouchersComponent,
    WelcomeComponent,
    HistoricChartComponent,
    PercentageChartComponent,
    IncomeComparisonChartComponent
  ];

  static COMPONENT_FACTORY = [
    ArticleCreationEditDialogComponent,
    ArticlesFamilySizesDialogComponent,
    ArticleQuickCreationDialogComponent,
    CancelYesDialogComponent,
    CashierCloseDialogComponent,
    CashierMovementDialogComponent,
    CheckOutDialogComponent,
    EditTicketDialogComponent,
    FamilyAdditionDialogComponent,
    FamilyCreationEditDialogComponent,
    FamilySizesCreationDialogComponent,
    InvoiceCreationDialogComponent,
    OrderCreationEditDialogComponent,
    PaymentDialogComponent,
    ProviderCreationEditDialogComponent,
    TagCreationEditDialogComponent,
    UserChangingPasswordDialogComponent,
    UserCreationEditDialogComponent,
    UserQuickCreationEditDialogComponent,
    ViewInvoiceDialogComponent,
    VoucherConsumeDialogComponent,
    VoucherCreationDialogComponent,
    VoucherEditDialogComponent
  ];
}
