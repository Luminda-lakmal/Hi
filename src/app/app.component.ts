import { Component, ElementRef, ViewChild } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // public convertToPDF()
  // {
  // html2canvas(document.body).then(canvas => {
  // // Few necessary setting options
   
  // const contentDataURL = canvas.toDataURL('image/png')
  // let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
  // var width = pdf.internal.pageSize.getWidth();
  // var height = canvas.height * width / canvas.width;
  // pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
  // pdf.save('output.pdf'); // Generated PDF
  // });
  // }

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  
  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }

}


