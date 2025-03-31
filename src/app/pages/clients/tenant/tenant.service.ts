import { Injectable } from '@angular/core';
import { ApiClientService } from '../../../core/services/api-client/api-client.service';
import { TenantModelResponse } from '../../../core/models/tenant.model';

@Injectable({
  providedIn: 'root',
})
export class TenantService {
  constructor(private apiClient: ApiClientService) {}

  getTenants() {
    return this.apiClient.getNoHeader<TenantModelResponse>('tenants');
  }
}
