/*!

=========================================================
* * NextJS Material Dashboard v1.0.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import ArtTrack from '@material-ui/icons/ArtTrack';
import Power from '@material-ui/icons/Power';
import ArrowRight from '@material-ui/icons/ArrowRight';
import People from "@material-ui/icons/People";

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: Dashboard,
    subRoutes: [
      {
        path: '/dashboard',
        name: 'View Dashboard',
        icon: ArrowRight
      }
    ]
  },
  {
    path: '/products',
    name: 'Products',
    icon: ArtTrack,
    subRoutes: [
      {
        path: '/products',
        name: 'All Products',
        icon: ArrowRight
      },
      {
        path: '/products/new',
        name: 'Add New',
        icon: ArrowRight
      },
      {
        path: '/categories',
        name: 'Categories',
        icon: ArrowRight
      },
      {
        path: '/attributes',
        name: 'Attributes',
        icon: ArrowRight
      }
    ]
  },
  {
    path: '/shop',
    name: 'Shop',
    icon: ArtTrack,
    subRoutes: [
      {
        path: '/shipping',
        name: 'Shipping',
        icon: ArrowRight
      },
      {
        path: '/coupons',
        name: 'Coupons',
        icon: ArrowRight
      },
      {
        path: '/orders',
        name: 'Orders',
        icon: ArrowRight
      },
      {
        path: '/customers',
        name: 'Customers',
        icon: ArrowRight
      }
    ]
  },
  {
    path: '/pages',
    name: 'Pages',
    icon: ArtTrack,
    subRoutes: [
      {
        path: '/pages',
        name: 'Pages',
        icon: ArrowRight
      },
      {
        path: '/pages/new',
        name: 'New Page',
        icon: ArrowRight
      },
      {
        path: '/orders',
        name: 'Orders',
        icon: ArrowRight
      },
      {
        path: '/customers',
        name: 'Customers',
        icon: ArrowRight
      }
    ]
  },
  {
    path: '/users',
    name: 'Users',
    icon: ArrowRight,
    subRoutes: [
      {
        path: '/users',
        name: 'All Users',
        icon: ArrowRight
      },
      {
        path: '/users/new',
        name: 'Add New',
        icon: ArrowRight
      },
      {
        path: '/users/groups',
        name: 'Groups',
        icon: ArrowRight
      }
    ]
  },
  {
    path: "/media",
    name: "Media Files",
    icon: People,
    subRoutes: [
      {
        path: "/media",
        name: "All Media",
        icon: ArrowRight,
      }
    ]
  },
  {
    path: '/plugins',
    name: 'Plugins',
    icon: Power,
    subRoutes: [
      {
        path: '/plugins/all',
        name: 'All Plugins',
        icon: ArrowRight
      }
    ]
  }
];

export default dashboardRoutes;
