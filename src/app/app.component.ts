import { Component, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';



const USER_DATA = [
  {
    id: 1,
    product : 'John Smith',
    lastSP: 'Advisor',
    salePrice: '2550',
    lastCP: '200',
    costPrice: '56',
    qTY: '60',
    saleAmout: '200',
    costAmout: '100',
    location: 'Ambalangoda',
  },
  {
    id: 2,
    product : 'John Smith',
    lastSP: '2550',
    salePrice: '1984-05-05',
    lastCP: '200',
    costPrice: '56',
    qTY: '60',
    saleAmout: '200',
    costAmout: '100',
    location: 'Ambalangoda',
  },
  {
    id: 3,
    product : 'John Smith',
    lastSP: '2550',
    salePrice: '1984-05-05',
    lastCP: '200',
    costPrice: '56',
    qTY: '60',
    saleAmout: '200',
    costAmout: '100',
    location: 'Ambalangoda',
  },
  {
    id: 4,
    product : 'John Smith',
    lastSP: '2550',
    salePrice: '1984-05-05',
    lastCP: '200',
    costPrice: '56',
    qTY: '60',
    saleAmout: '200',
    costAmout: '100',
    location: 'Ambalangoda',
  },
  
];
const COLUMNS_SCHEMA = [
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },
  {
      key: "product",
      type: "text",
      label: "Product "
  },
  {
      key: "lastSP",
      type: "text",
      label: "Last SP"
  },
  {
      key: "salePrice",
      type: "number",
      label: "Sale Price"
  },
  {
      key: "lastCP",
      type: "number",
      label: "Last CP"
  },
  {
    key: "costPrice",
    type: "number",
    label: "Cost Price"
  },
    {
      key: "qTY",
      type: "number",
      label: "QTY"
  },
  {
    key: "saleAmout",
    type: "number",
    label: "Sale Amout"
  },
  {
    key: "costAmout",
    type: "number",
    label: "Cost Amout"
  },
  {
    key: "location",
    type: "text",
    label: "Location"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  }
]



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-editable-table';
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);;
  dataSource: any = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;

  editable : any = false;


  constructor(public dialog: MatDialog) {}

  //add rows
  addRow() {
    const newRow = {
      id: Date.now(),
      product: '',
      lastSP: 0,
      salePrice: 0,
      lastCP: 0,
      costPrice: 0,
      qTY: 0,
      saleAmout: 0,
      costAmout: 0,
      location: '',
      isEdit: true,
    };
    this.dataSource = [ ...this.dataSource, newRow];
    console.log(this.dataSource);
  }

  // selected rows rmove
  removeRow(id: number) {
    this.dataSource = this.dataSource.filter((u:any) => u.id !== id);
  }
//remove row
   removeSelectedRows() {
    this.dialog
      .open(ConfirmDialogComponent)
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.dataSource = this.dataSource.filter((u: any) => !u.isSelected);
        }
      });
  }

}
