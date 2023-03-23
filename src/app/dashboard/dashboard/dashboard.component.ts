import { CompanyService } from './../../company/company.service';
import { VendorService } from './../../vendor/vendor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalCompany: any;
  totalVendors: any;

  constructor(
    private vendorService: VendorService,
    private companyService: CompanyService
  ) {

    this.companyService.getCount().subscribe(data => { this.totalCompany = data });
    this.vendorService.getCountPJ().subscribe(data => { this.totalVendors = data });
  }

  ngOnInit(): void {

  }
}
