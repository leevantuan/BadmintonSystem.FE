import { Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { HomeComponent } from './pages/clients/home/home.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ShopComponent } from './pages/clients/shop/shop.component';
import { SupportComponent } from './pages/clients/support/support.component';
import { ProfileComponent } from './pages/clients/profile/profile.component';
import { BookComponent } from './pages/clients/book/book.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminYardComponent } from './pages/admins/admin-yard/admin-yard.component';
import { AdminDashboardComponent } from './pages/admins/admin-dashboard/admin-dashboard.component';
import { AdminRoleComponent } from './shared/components/admins/admin-role/admin-role.component';
import { AdminHomeComponent } from './pages/admins/admin-home/admin-home.component';
import { AdminYardTypeComponent } from './pages/admins/admin-yard-type/admin-yard-type.component';
import { AdminPriceComponent } from './pages/admins/admin-price/admin-price.component';
import { AdminScheduleComponent } from './pages/admins/admin-schedule/admin-schedule.component';
import { AdminDayOffComponent } from './pages/admins/admin-day-off/admin-day-off.component';
import { AdminBookingComponent } from './pages/admins/admin-booking/admin-booking.component';
import { AdminServiceComponent } from './pages/admins/admin-service/admin-service.component';
import { AdminBillComponent } from './pages/admins/admin-bill/admin-bill.component';
import { AdminSaleComponent } from './pages/admins/admin-sale/admin-sale.component';
import { AdminInventoryReceiptComponent } from './pages/admins/admin-inventory-receipt/admin-inventory-receipt.component';
import { AdminProviderComponent } from './pages/admins/admin-provider/admin-provider.component';
import { AdminCategoryComponent } from './pages/admins/admin-category/admin-category.component';
import { AdminSupportComponent } from './pages/admins/admin-support/admin-support.component';
import { AdminUserManagerComponent } from './pages/admins/admin-user-manager/admin-user-manager.component';
import { AdminMyClubComponent } from './pages/admins/admin-my-club/admin-my-club.component';
import { AdminReviewComponent } from './pages/admins/admin-review/admin-review.component';
import { TenantComponent } from './pages/clients/tenant/tenant.component';
import { ForbiddenComponent } from './pages/results/forbidden/forbidden.component';
import { InternalServerErrorComponent } from './pages/results/internal-server-error/internal-server-error.component';
import { NotFoundComponent } from './pages/results/not-found/not-found.component';
import { SuccessComponent } from './pages/results/success/success.component';

export const routes: Routes = [
  {
    path: 'auth',
    children: [{ path: '', component: AuthComponent }],
  },
  {
    path: 'results',
    children: [
      { path: 'code/403', component: ForbiddenComponent },
      { path: 'code/404', component: NotFoundComponent },
      { path: 'code/500', component: InternalServerErrorComponent },
      { path: 'success', component: SuccessComponent },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: TenantComponent },
      { path: 'home', component: HomeComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'book', component: BookComponent },
      { path: 'support', component: SupportComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'management/yard', component: AdminYardComponent },
      { path: 'management/yard-type', component: AdminYardTypeComponent },
      { path: 'management/price', component: AdminPriceComponent },
      { path: 'management/day-off', component: AdminDayOffComponent },
      { path: 'management/schedule', component: AdminScheduleComponent },
      { path: 'services/booking', component: AdminBookingComponent },
      { path: 'services/service', component: AdminServiceComponent },
      { path: 'services/bill', component: AdminBillComponent },
      { path: 'services/sale', component: AdminSaleComponent },
      {
        path: 'other-services/inventory-receipt',
        component: AdminInventoryReceiptComponent,
      },
      { path: 'other-services/provider', component: AdminProviderComponent },
      { path: 'other-services/category', component: AdminCategoryComponent },
      { path: 'support', component: AdminSupportComponent },
      { path: 'users/role', component: AdminRoleComponent },
      { path: 'users/user-manager', component: AdminUserManagerComponent },
      { path: 'settings/my-club', component: AdminMyClubComponent },
      { path: 'settings/review', component: AdminReviewComponent },
    ],
  },
];
