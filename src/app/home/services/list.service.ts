import { config } from './../../config';
import { Lists, IList, List } from './../../shared/interfaces/list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private readonly LIST_ITEM = 'LIST_ITEM'
  private readonly LIST_ITEMS: Lists = {
    items: [],
    hasNext: true
  }
  constructor(
    private http: HttpClient
  ) { }

  getLists(): Observable<Lists> {
    return of(this.getListItems())
    // return this.http.get<Lists>(`${config.apiURL}/lists`, {
    //   headers: new HttpHeaders({
    //     'content-type': 'application/json;charset=UTF-8',
    //     'Authorization': 'Bearer eyJraWQiOiJlNjc5YzJhNS00NmQxLTQxZDktYTk5OC1iNjVjNGU3Njk5MGMiLCJhbGciOiJSUzI1NiJ9.eyJ0ZW5hbnRJZHBJZCI6IjBiMmE3ZDA0Yzg2NDExZWFiNzM2MGE1ODY0NjA0MzQ4IiwibGFzdFVwZGF0ZURhdGUiOjE1OTcwMTc2MDAwMDAsInVzZXJfbmFtZSI6ImxvcmVubmEubWFydGluc0BkZXNhZmlvZmx1aWcuY29tIiwiaWRtUmVmcmVzaFRva2VuIjoiNzdmYzA2MjNmZGFhNGM2NjlhYmY5OGUzMGZkYTZmNjUiLCJmdWxsTmFtZSI6IkxvcmVubmEgTWFydGlucyIsInRlbmFudENvZGUiOiJkZXNhZmlvZmx1aWciLCJwYXJ0bmVyQ29tcGFueSI6ZmFsc2UsImlkbUFjY2Vzc1Rva2VuIjoiZTY2ZGNjYjkzN2U0NDE1YmFmY2MwOTk3OTg3YTcwNmQiLCJhdXRob3JpdGllcyI6WyJ1c2VyIl0sImNsaWVudF9pZCI6ImRlbW8iLCJ1c2VyVGltZVpvbmUiOiJBbWVyaWNhL1Nhb19QYXVsbyIsImF1ZCI6ImZsdWlnX2F1dGhlbnRpY2F0b3JfcmVzb3VyY2UiLCJjb21wYW55SWQiOiIwYjJhN2QwNGM4NjQxMWVhYjczNjBhNTg2NDYwNDM0OCIsImRvbWFpbiI6ImRlc2FmaW9mbHVpZyIsInNjb3BlIjpbIioiXSwidXNlcklkcElkIjoiODUxYTljZDVkMzY2MTFlYTgyZGEwYTU4NjQ2MDQzNGEiLCJleHAiOjE1OTcxOTE4MTgsImVtYWlsIjoibG9yZW5uYS5tYXJ0aW5zQGRlc2FmaW9mbHVpZy5jb20iLCJhcHBzIjpbImFjY291bnRzIiwidGFza3MiXSwic3ViIjoibG9yZW5uYS5tYXJ0aW5zQGRlc2FmaW9mbHVpZy5jb20iLCJpYXQiOjE1OTcwMTkwMTgsImlzcyI6IiouZmx1aWcuaW8ifQ.eWT20KH9B9-G4IxiEROKY67AcqAf7Hp96otk5sDNWYB4OqM5mbnSvwSWzP4msp2Low08GTz66hyYjiRaDwnOwiS_NQjlxyclYsQWX_QEkJcZTdip3g5akzDyxbmMEBmMOaR-yjl6XHN-GmfXsEAU4j39WrZahtLJgeBkLg4jBz11dG7bX9lVjKp_xWXA12iBfMpuRYgrkfU6alCZcFDFtzUjOUMH6oVN9jhFEIGaarVtMzGGzHBzqsz1vcOjJL1Vn4XMM66YSJsrtV9E2e8v8VXO0d1w5TNUP-L5-zPk6iwOO_EfE7mOOEUxgEPDlUGsVEdaEWnOZyFcvPvg3B9yTw'
    //   })
    // })
    // .pipe(
    //   map((res) => res)
    // )
  }

  addList(parameters: IList): Observable<List> {
    return of({
      id: "69f176c7-f2d5-488b-ad6c-bdba6fb9c856",
      description: parameters.description,
      name: parameters.name,
      authorId: "851a9cd5d36611ea82da0a586460434a",
      tenantId: "0b2a7d04c86411eab7360a5864604348",
      createDate: moment().format(),
      updateDate: moment().format(),
      active: true,
      archived: false,
      sortValue: parameters.sortValue,
      _expandables: [
        "selfPermission",
        "priorities",
        "author",
        "permissions",
        "tasks",
        "properties",
        "status"
      ]
    })
  }

  updateList() {

  }

  deleteList() {

  }

  setListItem(listItem) {
    this.LIST_ITEMS.items.push(listItem)
    localStorage.setItem(this.LIST_ITEM, JSON.stringify(this.LIST_ITEMS))
  }

  getListItems() {
    return JSON.parse(localStorage.getItem(this.LIST_ITEM))
  }

}
