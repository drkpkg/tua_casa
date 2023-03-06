import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SupabaseService} from "../../supabase.service";
import {environment} from "../../../enviroments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-property-document',
  templateUrl: './property-document.component.html',
  styleUrls: ['./property-document.component.css']
})
export class PropertyDocumentComponent implements OnInit {
  id: number;
  documents: any[];

  constructor(private activatedRoute: ActivatedRoute, private supabaseService: SupabaseService, private httpClient: HttpClient, private router: Router) {
    this.documents = [];
    this.id = 0;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = params.id;
      this.loadDocuments();
    });
  }

  uploadFile(event: any) {
    // foreach is not a function
    for (const file of event.target.files) {
      this.supabaseService.createDocument(this.id, 'properties', file).then(({data, error}) => {
        if (error) {
          console.log(error);
        } else {
          this.loadDocuments();
        }
      });
    }
  }

  loadDocuments() {
    this.documents = [];
    this.supabaseService.getPropertyDocuments(this.id, 'properties').then(({data, error}) => {
      if (error) {
        console.log(error);
      } else {
        let documents = data ? data : [];
        documents.forEach((document: any) => {
          // get url as blob
          this.httpClient.get(this.getDocumentUrl(document), {responseType: 'blob'}).subscribe((blob: any) => {
            const file = new File([blob], document.name, {type: blob.type});
            this.documents.push({
              id: document.id,
              description: document.description,
              uuid: document.uuid,
              type: file.type,
              url: this.getDocumentUrl(document),
              filename: document.filename
            });
          });
        });
      }
    });
  }

  getDocumentUrl(document: any) {
    return `${environment.supabaseUrl}/storage/v1/object/public/tuacasa-storage/${document.url}`
  }

  deleteDocument(id: number, filename: string) {
    this.supabaseService.deleteDocument(id, 'properties', filename).then(({data, error}) => {
      if (error) {
        console.log(error);
      } else {
        this.loadDocuments();
      }
    });
  }

  back() {
    this.router.navigate(['/properties', this.id]);
  }
}
