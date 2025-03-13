import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Permission {
  name: string;
  access: boolean;
  create: boolean;
  edit: boolean;
  delete: boolean;
  viewAll: boolean;
}

interface Role {
  name: string;
  permissions: Permission[];
}

@Component({
  selector: 'app-admin-role',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-role.component.html',
  styleUrl: './admin-role.component.css',
})
export class AdminRoleComponent {
  roles: Role[] = [
    {
      name: 'Admin',
      permissions: [
        {
          name: 'Quản lý phòng ban',
          access: true,
          create: true,
          edit: true,
          delete: true,
          viewAll: true,
        },
        {
          name: 'Quản lý người dùng',
          access: true,
          create: true,
          edit: true,
          delete: false,
          viewAll: true,
        },
        {
          name: 'Quản lý file',
          access: true,
          create: false,
          edit: true,
          delete: true,
          viewAll: true,
        },
        {
          name: 'Email Marketing',
          access: true,
          create: true,
          edit: true,
          delete: true,
          viewAll: true,
        },
        {
          name: 'SMS Marketing',
          access: false,
          create: false,
          edit: false,
          delete: false,
          viewAll: true,
        },
        {
          name: 'Automation',
          access: true,
          create: true,
          edit: true,
          delete: true,
          viewAll: true,
        },
        {
          name: 'Quản lý Inbox',
          access: true,
          create: true,
          edit: true,
          delete: true,
          viewAll: false,
        },
        {
          name: 'Quản lý công việc',
          access: true,
          create: true,
          edit: false,
          delete: true,
          viewAll: true,
        },
      ],
    },
    {
      name: 'Customer',
      permissions: [
        {
          name: 'Quản lý phòng ban',
          access: true,
          create: true,
          edit: true,
          delete: true,
          viewAll: true,
        },
        {
          name: 'Quản lý người dùng',
          access: true,
          create: true,
          edit: true,
          delete: false,
          viewAll: true,
        },
        {
          name: 'Quản lý file',
          access: true,
          create: false,
          edit: true,
          delete: true,
          viewAll: true,
        },
        {
          name: 'Email Marketing',
          access: true,
          create: true,
          edit: true,
          delete: true,
          viewAll: true,
        },
        {
          name: 'SMS Marketing',
          access: false,
          create: false,
          edit: false,
          delete: false,
          viewAll: true,
        },
        {
          name: 'Automation',
          access: true,
          create: true,
          edit: true,
          delete: true,
          viewAll: true,
        },
        {
          name: 'Quản lý Inbox',
          access: true,
          create: true,
          edit: true,
          delete: true,
          viewAll: false,
        },
        {
          name: 'Quản lý công việc',
          access: true,
          create: true,
          edit: false,
          delete: true,
          viewAll: true,
        },
      ],
    },
    {
      name: 'Manager',
      permissions: [
        {
          name: 'Quản lý phòng ban',
          access: true,
          create: true,
          edit: true,
          delete: true,
          viewAll: true,
        },
        {
          name: 'Quản lý người dùng',
          access: true,
          create: true,
          edit: true,
          delete: false,
          viewAll: true,
        },
        {
          name: 'Quản lý file',
          access: true,
          create: false,
          edit: true,
          delete: true,
          viewAll: true,
        },
        {
          name: 'Email Marketing',
          access: true,
          create: true,
          edit: true,
          delete: true,
          viewAll: true,
        },
        {
          name: 'SMS Marketing',
          access: false,
          create: false,
          edit: false,
          delete: false,
          viewAll: true,
        },
        {
          name: 'Automation',
          access: true,
          create: true,
          edit: true,
          delete: true,
          viewAll: true,
        },
        {
          name: 'Quản lý Inbox',
          access: true,
          create: true,
          edit: true,
          delete: true,
          viewAll: false,
        },
        {
          name: 'Quản lý công việc',
          access: true,
          create: true,
          edit: false,
          delete: true,
          viewAll: true,
        },
        {
          name: 'Quản lý phòng ban',
          access: true,
          create: true,
          edit: true,
          delete: true,
          viewAll: true,
        },
        {
          name: 'Quản lý người dùng',
          access: true,
          create: true,
          edit: true,
          delete: false,
          viewAll: true,
        },
        {
          name: 'Quản lý file',
          access: true,
          create: false,
          edit: true,
          delete: true,
          viewAll: true,
        },
        {
          name: 'Email Marketing',
          access: true,
          create: true,
          edit: true,
          delete: true,
          viewAll: true,
        },
        {
          name: 'SMS Marketing',
          access: false,
          create: false,
          edit: false,
          delete: false,
          viewAll: true,
        },
        {
          name: 'Automation',
          access: true,
          create: true,
          edit: true,
          delete: true,
          viewAll: true,
        },
        {
          name: 'Quản lý Inbox',
          access: true,
          create: true,
          edit: true,
          delete: true,
          viewAll: false,
        },
        {
          name: 'Quản lý công việc',
          access: true,
          create: true,
          edit: false,
          delete: true,
          viewAll: true,
        },
      ],
    },
  ];

  selectedRole: Role = this.roles[0];
  currentPage = 1;
  itemsPerPage = 9;
  searchTerm: string = '';

  get filteredPermissions(): Permission[] {
    return this.selectedRole.permissions.filter((permission) =>
      permission.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get totalPages(): number {
    return Math.max(
      1,
      Math.ceil(this.filteredPermissions.length / this.itemsPerPage)
    );
  }

  get pagedPermissions(): Permission[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredPermissions.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

  selectRole(role: Role) {
    this.selectedRole = role;
    this.currentPage = 1; // 🔥 Reset về trang đầu khi chọn role mới
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
