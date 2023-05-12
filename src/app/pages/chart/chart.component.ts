import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EChartsOption } from 'echarts';
import { MessageService, Message } from 'primeng/api';
import { Messages } from 'primeng/messages';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  jsondata: any[] = [{"item": "i1", "cost": 200}, {"item":"i2", "cost": 500}]
  data1!: any[]
  data2!: any[]
  invoicedata: any[] =
  [
    {
        "supplierName": "Dryer Vent Squad",
        "children": [
            {
                "docId": 2,
                "docName": "dryer1",
                "docType": "invoice",
                "invoiceNo": "28009",
                "supplierName": "Dryer Vent Squad",
                "remitTo": "Dryer Vent Squad",
                "invoiceDate": "2023-03-14T00:00:00",
                "dueDate": "2023-03-14",
                "subTotal": "208.00",
                "totalTaxAmount": 17.16,
                "freightAmount": null,
                "totalAmount": 225.16
            },
            {
                "docId": 3,
                "docName": "dryer2",
                "docType": "invoice",
                "invoiceNo": "28296",
                "supplierName": "Dryer Vent Squad",
                "remitTo": "Dryer Vent Squad",
                "invoiceDate": "2023-03-20T00:00:00",
                "dueDate": "2023-03-20",
                "subTotal": "199.00",
                "totalTaxAmount": 16.42,
                "freightAmount": null,
                "totalAmount": 215.42
            },
            {
                "docId": 4,
                "docName": "dryer3",
                "docType": "invoice",
                "invoiceNo": "28101",
                "supplierName": "Dryer Vent Squad",
                "remitTo": "Dryer Vent Squad",
                "invoiceDate": "2023-03-15T00:00:00",
                "dueDate": "2023-03-15",
                "subTotal": "308.00",
                "totalTaxAmount": 25.41,
                "freightAmount": null,
                "totalAmount": 333.41
            },
            {
                "docId": 5,
                "docName": "dryer4",
                "docType": "invoice",
                "invoiceNo": "28066",
                "supplierName": "Dryer Vent Squad",
                "remitTo": "Dryer Vent Squad",
                "invoiceDate": "2023-03-15T00:00:00",
                "dueDate": "2023-03-15",
                "subTotal": "248.00",
                "totalTaxAmount": 20.46,
                "freightAmount": null,
                "totalAmount": 268.46
            },
            {
                "docId": 6,
                "docName": "dryer5",
                "docType": "invoice",
                "invoiceNo": "28506",
                "supplierName": "Dryer Vent Squad",
                "remitTo": "Dryer Vent Squad",
                "invoiceDate": "2023-03-23T00:00:00",
                "dueDate": "2023-03-23",
                "subTotal": "715.00",
                "totalTaxAmount": 58.99,
                "freightAmount": null,
                "totalAmount": 773.99
            },
            {
                "docId": 7,
                "docName": "dryer6",
                "docType": "invoice",
                "invoiceNo": "28232",
                "supplierName": "Dryer Vent Squad",
                "remitTo": "Dryer Vent Squad",
                "invoiceDate": "2023-03-17T00:00:00",
                "dueDate": "2023-03-17",
                "subTotal": "949.00",
                "totalTaxAmount": 78.29,
                "freightAmount": null,
                "totalAmount": 1027.29
            },
            {
                "docId": 23,
                "docName": "dryer1",
                "docType": "invoice",
                "invoiceNo": "28009",
                "supplierName": "Dryer Vent Squad",
                "remitTo": "Dryer Vent Squad",
                "invoiceDate": "2023-03-14T00:00:00",
                "dueDate": "2023-03-14",
                "subTotal": "208.00",
                "totalTaxAmount": 17.16,
                "freightAmount": null,
                "totalAmount": 225.16
            },
            {
                "docId": 24,
                "docName": "dryer2",
                "docType": "invoice",
                "invoiceNo": "28296",
                "supplierName": "Dryer Vent Squad",
                "remitTo": "Dryer Vent Squad",
                "invoiceDate": "2023-03-20T00:00:00",
                "dueDate": "2023-03-20",
                "subTotal": "199.00",
                "totalTaxAmount": 16.42,
                "freightAmount": null,
                "totalAmount": 215.42
            },
            {
                "docId": 25,
                "docName": "dryer3",
                "docType": "invoice",
                "invoiceNo": "28101",
                "supplierName": "Dryer Vent Squad",
                "remitTo": "Dryer Vent Squad",
                "invoiceDate": "2023-03-15T00:00:00",
                "dueDate": "2023-03-15",
                "subTotal": "308.00",
                "totalTaxAmount": 25.41,
                "freightAmount": null,
                "totalAmount": 333.41
            },
            {
                "docId": 26,
                "docName": "dryer4",
                "docType": "invoice",
                "invoiceNo": "28066",
                "supplierName": "Dryer Vent Squad",
                "remitTo": "Dryer Vent Squad",
                "invoiceDate": "2023-03-15T00:00:00",
                "dueDate": "2023-03-15",
                "subTotal": "248.00",
                "totalTaxAmount": 20.46,
                "freightAmount": null,
                "totalAmount": 268.46
            },
            {
                "docId": 27,
                "docName": "dryer5",
                "docType": "invoice",
                "invoiceNo": "28506",
                "supplierName": "Dryer Vent Squad",
                "remitTo": "Dryer Vent Squad",
                "invoiceDate": "2023-03-23T00:00:00",
                "dueDate": "2023-03-23",
                "subTotal": "715.00",
                "totalTaxAmount": 58.99,
                "freightAmount": null,
                "totalAmount": 773.99
            },
            {
                "docId": 28,
                "docName": "dryer6",
                "docType": "invoice",
                "invoiceNo": "28232",
                "supplierName": "Dryer Vent Squad",
                "remitTo": "Dryer Vent Squad",
                "invoiceDate": "2023-03-17T00:00:00",
                "dueDate": "2023-03-17",
                "subTotal": "949.00",
                "totalTaxAmount": 78.29,
                "freightAmount": null,
                "totalAmount": 1027.29
            }
        ]
    },
    {
        "supplierName": "Merative",
        "children": [
            {
                "docId": 19,
                "docName": "merative5",
                "docType": "invoice",
                "invoiceNo": "231004210",
                "supplierName": "Merative",
                "remitTo": "Merative US L",
                "invoiceDate": "2023-03-06T00:00:00",
                "dueDate": "2023-04-05",
                "subTotal": "663.60",
                "totalTaxAmount": 0,
                "freightAmount": null,
                "totalAmount": 663.6
            },
            {
                "docId": 20,
                "docName": "merative6",
                "docType": "invoice",
                "invoiceNo": "231005546",
                "supplierName": "Merative",
                "remitTo": "Merative US L",
                "invoiceDate": "2023-04-07T00:00:00",
                "dueDate": "2023-05-07",
                "subTotal": "712.80",
                "totalTaxAmount": 0,
                "freightAmount": null,
                "totalAmount": 712.8
            },
            {
                "docId": 21,
                "docName": "merative7",
                "docType": "invoice",
                "invoiceNo": "231004210",
                "supplierName": "Merative",
                "remitTo": "Merative US L",
                "invoiceDate": "2023-03-06T00:00:00",
                "dueDate": "2023-04-05",
                "subTotal": "663.60",
                "totalTaxAmount": 0,
                "freightAmount": null,
                "totalAmount": 663.6
            },
            {
                "docId": 40,
                "docName": "merative5",
                "docType": "invoice",
                "invoiceNo": "231004210",
                "supplierName": "Merative",
                "remitTo": "Merative US L",
                "invoiceDate": "2023-03-06T00:00:00",
                "dueDate": "2023-04-05",
                "subTotal": "663.60",
                "totalTaxAmount": 0,
                "freightAmount": null,
                "totalAmount": 663.6
            },
            {
                "docId": 41,
                "docName": "merative6",
                "docType": "invoice",
                "invoiceNo": "231005546",
                "supplierName": "Merative",
                "remitTo": "Merative US L",
                "invoiceDate": "2023-04-07T00:00:00",
                "dueDate": "2023-05-07",
                "subTotal": "712.80",
                "totalTaxAmount": 0,
                "freightAmount": null,
                "totalAmount": 712.8
            },
            {
                "docId": 42,
                "docName": "merative7",
                "docType": "invoice",
                "invoiceNo": "231004210",
                "supplierName": "Merative",
                "remitTo": "Merative US L",
                "invoiceDate": "2023-03-06T00:00:00",
                "dueDate": "2023-04-05",
                "subTotal": "663.60",
                "totalTaxAmount": 0,
                "freightAmount": null,
                "totalAmount": 663.6
            }
        ]
    }
]
dateRangeForm!: FormGroup;
dateRange! : Date[];
msgs1!: Message[];

  constructor(private formBuilder: FormBuilder, private messageService : MessageService) { }

  chartOption1! : EChartsOption   //definition of this is inside ngOnInit()



  chartOption3!: EChartsOption ; 
/////////////////////////
chartOption4!: EChartsOption ; 
///////////////////////
chartOption5!: EChartsOption ;
supplierName : string[]=[]
totalTaxAmount : number[]=[]
totalfriegtAmount : number[]=[]
totalAmount : number[]=[]
pieChartData : any= [];
innerpieChartData : any= [];
pieNest : any=[]

  ngOnInit(): void {
    this.msgs1=[];
    this.dateRangeForm = this.formBuilder.group({
      dateRange: ['', Validators.required]
    });
    var employees = [{  
      id: 20,  
      name: 'Ajay',  
      salary: 30000,
      dept: 'it'  
  }, {  
      id: 24,  
      name: 'Vijay',  
      salary: 35000,  
      dept: 'hr'  
  }, {  
      id: 56,  
      name: 'Rahul',  
      salary: 32000,  
      dept: 'it'  
  }, {  
      id: 88,  
      name: 'Raman',  
      salary: 38000,  
      dept: 'hr'  
  }];
  const arr : any =["matin","jatin"]
   // var newarr=employees.map((value,index)=>value.salary.toString()+ index.toString())
 
    const studentGrades = employees.map(student => {
      if(student.dept == 'it'){
        return {
          dept: student,
          fall: "nam"
        }
      }
      else {
        return null
      }
      
  });
  var deptList =[... new Set(employees.map(item=> item.dept))]
var unique = employees.filter((value, index, array) => value.dept=='hr' );
var deptList1 = deptList.map(item=> {  
  var totalSal = employees.filter(record=>  record.dept === item )
  .reduce((tot, employee)=> tot + employee.salary , 0)  
  return {  
      'dept': item,  
      'total': totalSal  
  }  
}); 

    const newarr =employees.reduce((total,employee)=>total+employee.salary,0);
    // console.log(studentGrades); 
    // console.log(deptList1);

   
    
   
  }

  public onSubmit(f:any){
    this.totalTaxAmount=[];
    this.supplierName=[];
    this.totalfriegtAmount=[];
    this.totalAmount=[];
    this.pieChartData=[];
    this.innerpieChartData=[];
    this.pieNest=[];
    // reset alerts on submit
    this.invoicedata.map((item: any)=> {
      this.supplierName.push(item.supplierName);
    
     
      let taxamount : number=0
      let friegtamount : number =0
      let amount : number=0 
      item.children.filter((u:any)=> new  Date(u.invoiceDate)>= this.dateRangeForm.value.dateRange[0] && new Date(u.invoiceDate) <= this.dateRangeForm.value.dateRange[1]).map((childItem:any)=>{
        this.pieNest.push({value: childItem.totalAmount,name: childItem.docName})
      })
      this.msgs1=[{severity:'info', summary:'Date Range Selected', detail: this.dateRangeForm.value.dateRange}];
      const totalsjkljfls=item.children.filter((u: any)=> new  Date(u.invoiceDate)>= this.dateRangeForm.value.dateRange[0] && new Date(u.invoiceDate) <= this.dateRangeForm.value.dateRange[1] ).reduce((tot : number,children : any)=> tot+=children.totalAmount,0)
       
    
      this.totalTaxAmount.push(taxamount)
      this.totalfriegtAmount.push(friegtamount)
      this.totalAmount.push(totalsjkljfls)
      this.innerpieChartData.push({value: totalsjkljfls,name: item.supplierName})
    })
  this.pieChartData.push(this.innerpieChartData);  

this.pieChartData.push({
    // make an record to fill the bottom 50%
    value: this.innerpieChartData.reduce((tot :number, employee: any)=> tot + employee.value , 0),
    itemStyle: {
      // stop the chart from rendering this piece
      color: 'none',
      decal: {
        symbol: 'none'
      }
    },
    label: {
      show: false
    }
  })

  console.log(this.pieChartData);
//     const startDate = new Date(this.dateRange[0]);
// const endDate = new Date(this.dateRange[1]);

    // const filteredData = this.invoicedata.map((supplier) => ({
    //   ...supplier,
    //   children: supplier.children.filter(
    //     (invoice : any) =>
    //       new Date(invoice.invoiceDate) >= startDate &&
    //       new Date(invoice.invoiceDate) <= endDate
    //   ),
    // }));
    // console.log(filteredData);
    
    this.chartOption1 ={
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        data: this.supplierName,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: this.totalAmount,
          type: 'bar',
        },
      ],
    };
    this.chartOption5={
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center',
        // doesn't perfectly work with our tricks, disable it
        selectedMode: false
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar','stack'] },
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '70%'],
          // adjust the start angle
          startAngle: 180,
          label: {
            show: true,
            formatter(param) {
              // correct the percentage
              return param.name + ' (' + param.percent! * 2 + '%)';
            }
          },
          data: this.innerpieChartData
        }
      ]
    }

this.chartOption3={
  title: [
    {
      text: 'Tangential Polar Bar Label Position (middle)'
    }
  ],
  polar: {
    radius: [30, '80%']
  },
  angleAxis: {
    max: this.totalAmount.reduce((tot,acc)=>tot+acc,0),
    startAngle: 75
  },
  radiusAxis: {
    type: 'category',
    data: this.supplierName
  },
  tooltip: {},
  series: {
    type: 'bar',
    data: this.totalAmount,
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'middle',
      formatter: '{b}: {c}'
    }
  }
};
  this.chartOption4={
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      data: this.supplierName
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],
        label: {
          position: 'inner',
          fontSize: 14
        },
        labelLine: {
          show: false
        },
        data: this.innerpieChartData
      },
      {
        name: 'Access From',
        type: 'pie',
        radius: ['45%', '60%'],
        labelLine: {
          length: 30
        },
        label: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          backgroundColor: '#F6F8FC',
          borderColor: '#8C8D8E',
          borderWidth: 1,
          borderRadius: 4,
          rich: {
            a: {
              color: '#6E7079',
              lineHeight: 22,
              align: 'center'
            },
            hr: {
              borderColor: '#8C8D8E',
              width: '100%',
              borderWidth: 1,
              height: 0
            },
            b: {
              color: '#4C5058',
              fontSize: 14,
              fontWeight: 'bold',
              lineHeight: 33
            },
            per: {
              color: '#fff',
              backgroundColor: '#4C5058',
              padding: [3, 4],
              borderRadius: 4
            }
          }
        },
        data: this.pieNest
      }
    ]
    }


   }

}
