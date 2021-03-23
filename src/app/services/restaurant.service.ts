import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantList } from '../model/restaurant-list';
import { Menu } from '../model/menu';
import { map } from 'rxjs/operators';
import { getNumberOfCurrencyDigits } from '@angular/common';

const url = 'http://localhost:3000/api/restaurants';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(public http: HttpClient) {}

  getAll(parameters): Observable<RestaurantList> {
    let queryParams = {};
    if (parameters) {
      queryParams = {
        params: new HttpParams()
          .set('page', parameters.page || '')
          .set('pageSize', parameters.pageSize || '')
          .set(
            'filter',
            (parameters.filter && JSON.stringify(parameters.filter)) || ''
          ),
      };
    }

    return this.http.get(url, queryParams).pipe(
      map((x) => {
        return new RestaurantList(x);
      })
    );
  }

  getMenu(restaurantId): Observable<Menu> {
    return this.http.get(`${url}/${restaurantId}/menus`).pipe(
      map((x) => {
        return new Menu((x as any)?.results[0]);
      })
    );
  }
}
