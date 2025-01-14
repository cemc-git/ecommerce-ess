import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users/users.service';
import { MatTableDataSource } from '@angular/material/table';
import { formatCPF } from 'src/app/utils/utils';
import { Router } from '@angular/router';
import { LoggedService } from 'src/app/services/logged/logged.service';


@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})

export class AdminUsersComponent implements OnInit {

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  formatCPF = formatCPF;


  displayedColumns: string[] = ['user', 'name', 'CPF', 'email', 'delete'];
  dataSource = new MatTableDataSource(this.getUsers())


  constructor(private loggedService: LoggedService, private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private usersService: UsersService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getCPFfromIndex(index: number): string {
    console.log(this.dataSource.data[index].CPF);
    return this.dataSource.data[index].CPF;
  }

  getUsers(): User[] {
    let users: Map<string, User> = new Map([]);
    this.usersService.getUsers().subscribe(usersList => users = usersList);
    return Array.from(users.values());
  }

  refresh(): void {
    this.usersService.getUsers().subscribe((res) => {
      this.dataSource.data = Array.from(res.values());
      this.changeDetectorRef.detectChanges();
    })
  }

  removeUser(CPF: string): void {
    this.usersService.removeUser(CPF);
    this.refresh();
  }


  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  logOut(): void {
    this.loggedService.logOut();
  }

}




