import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { TABLE_DATA, TableItem } from '../table/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['Client Id', 'Company Name', 'Creation Date', 'Assigned Member'];
  dataSource = new MatTableDataSource<TableItem>([]);
  currentPage = 1;
  itemsPerPage = 20;
  typeSelected = 'ball-fussion';
  totalLength=0;
  constructor(private apiService: ApiService,private authService: AuthService,private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedInUser()) {
     this.router.navigate(['/login']);
    }else{
    this.loadTableData(this.authService.getToken());
    }
  }
   loadTableData(token:any): void {
    this.authService.showSpinner();
    this.apiService.getData(this.currentPage, this.itemsPerPage,token).subscribe(
      (data: any) => {
      console.log("tejaaaaa",data)
      const transformedData = data?.records?.map((item:any) => ({
      'Client Id': item.clientID,
      'Company Name': item.companyName,
      'Creation Date': new Date(item.createdAt).getTime(),
      'Assigned Member': item.assignedMembers.length > 0 ? item.assignedMembers[0].name : '',
      }));
      this.dataSource.data = transformedData;
      this.totalLength=data?._metaData.total_count
      this.authService.hideSpinner();
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.authService.hideSpinner();
      }
    );
  }
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1; // Adjust page number
    this.loadTableData(this.authService.getToken());
  }
}
