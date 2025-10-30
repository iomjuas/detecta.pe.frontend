// src/app/core/api.service.ts
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = 'https://yioszgv26i.execute-api.us-east-1.amazonaws.com'; // tu stage

  constructor(private http: HttpClient) { }

  // upload(formData: FormData) {
  //   // /upload (multipart/form-data)
  //   return this.http.post<{ ok: boolean; results: Array<{ url: string; fieldname: string; error?: string }> }>(
  //     `${this.base}/upload`,
  //     formData
  //   );
  // }

  // saveSolicitud(payload: any) {
  //   return this.http.post<{ ok: boolean }>(`${this.base}/save-solicitud`, payload);
  // }

  // saveInversion(payload: any) {
  //   return this.http.post<{ ok: boolean }>(`${this.base}/save-inversion`, payload);
  // }

  sendEmail(payload: any) {
    return this.http.post<{ ok: boolean }>(`${this.base}/send-email`, payload);
  }
}
