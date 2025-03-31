import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TenantService } from './tenant.service';
import BaseResponseModel from '../../../core/models/base.response.model';
import { TenantResponse } from '../../../core/models/tenant.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tenant',
  imports: [CommonModule, RouterModule],
  templateUrl: './tenant.component.html',
  styleUrl: './tenant.component.css',
})
export class TenantComponent implements OnInit {
  tenants: TenantResponse[] = [];

  constructor(private tenantService: TenantService) {}

  ngOnInit() {
    this.tenantService.getTenants().subscribe((res: BaseResponseModel) => {
      if (res.isSuccess) {
        this.tenants = res.value;
      } else {
        console.error(res.error);
      }
    });
  }

  handlerClickBook(code: string) {
    sessionStorage.setItem('tenantCode', code);
  }

  public UIResource = {
    minPrice: 60000,
    maxPrice: 150000,
    duration: 'Today',
  };
}
