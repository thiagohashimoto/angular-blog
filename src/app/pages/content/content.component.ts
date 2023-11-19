import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover:string="https://cdn.fs.teachablecdn.com/UWKQZYkSCahRe0KPwKD8"
  contentTitle:string="Notícia exemplo do Revit"
  contentDescription:string="Ta cheio de novidade galera, só chega vambora"
  private id:string | null = "0"

  constructor(private route:ActivatedRoute
    ){  }

    ngOnInit(): void {
      this.route.paramMap.subscribe( value => this.id = value.get("Id"))
    }

    setValuestoComponent(id:string) {
        const result = dataFake.filter(article => article.id == id)
    }

}
