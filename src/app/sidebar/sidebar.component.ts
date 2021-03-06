import { Component, OnInit } from '@angular/core';

declare var $: any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/login', title: 'Login', icon: 'ti-angle-right ', class: '' },
    { path: '/register', title: 'Register', icon: 'ti-angle-right ', class: '' },
    { path: '/dashboard', title: 'Dashboard', icon: 'ti-panel', class: '' },
    //{ path: 'table', title: 'Playlists',  icon:'ti-view-list-alt', class: '' },
    { path: '/maps', title: 'Amplify Sites', icon: 'ti-map', class: '' },
    { path: '/user', title: 'User Profile', icon: 'ti-user', class: '' },
    // { path: 'typography', title: 'Typography',  icon:'ti-text', class: '' },
    //{ path: 'icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '' },
    //{ path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO', icon: 'ti-export', class: 'active-pro' },
    { path: '/terms', title: 'Terms & Conditions', icon: '', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})




export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(r => r.path != '/terms').filter(r => r.path != '/login').filter(r => r.path != '/register');
    }
    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

}
