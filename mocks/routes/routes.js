const ROUTES = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'Dashboard',
    subRoutes: [
      {
        path: '/dashboard',
        name: 'View Dashboard',
        icon: 'ArrowRight'
      }
    ]
  },
  {
    path: '/products',
    name: 'Products',
    icon: 'ArtTrack',
    subRoutes: [
      {
        path: '/products',
        name: 'All Products',
        icon: 'ArrowRight'
      },
      {
        path: '/products/new',
        name: 'Add New',
        icon: 'ArrowRight'
      },
      {
        path: '/categories',
        name: 'Categories',
        icon: 'ArrowRight'
      },
      {
        path: '/attributes',
        name: 'Attributes',
        icon: 'ArrowRight'
      }
    ]
  },
  {
    path: '/shop',
    name: 'Shop',
    icon: 'ArtTrack',
    subRoutes: [
      {
        path: '/shipping',
        name: 'Shipping',
        icon: 'ArrowRight'
      },
      {
        path: '/coupons',
        name: 'Coupons',
        icon: 'ArrowRight'
      },
      {
        path: '/orders',
        name: 'Orders',
        icon: 'ArrowRight'
      },
      {
        path: '/customers',
        name: 'Customers',
        icon: 'ArrowRight'
      }
    ]
  },
  {
    path: '/pages',
    name: 'Pages',
    icon: 'ArtTrack',
    subRoutes: [
      {
        path: '/pages',
        name: 'Pages',
        icon: 'ArrowRight'
      },
      {
        path: '/pages/new',
        name: 'New Page',
        icon: 'ArrowRight'
      },
      {
        path: '/orders',
        name: 'Orders',
        icon: 'ArrowRight'
      },
      {
        path: '/customers',
        name: 'Customers',
        icon: 'ArrowRight'
      }
    ]
  },
  {
    path: '/users',
    name: 'Users',
    icon: 'ArrowRight',
    subRoutes: [
      {
        path: '/users',
        name: 'All Users',
        icon: 'ArrowRight'
      },
      {
        path: '/users/new',
        name: 'Add New',
        icon: 'ArrowRight'
      },
      {
        path: '/users/groups',
        name: 'Groups',
        icon: 'ArrowRight'
      }
    ]
  },
  {
    path: '/media',
    name: 'Media Files',
    icon: 'People',
    subRoutes: [
      {
        path: '/media',
        name: 'All Media',
        icon: 'ArrowRight'
      }
    ]
  },
  {
    path: '/plugins',
    name: 'Plugins',
    icon: 'Power',
    subRoutes: [
      {
        path: '/plugins/all',
        name: 'All Plugins',
        icon: 'ArrowRight'
      }
    ]
  }
];

module.exports = [
  {
    id: 'get-routes',
    url: '/api/routes',
    method: 'GET',
    variants: [
      {
        id: 'success',
        response: {
          status: 200,
          body: ROUTES
        }
      },
      {
        id: 'error',
        response: {
          status: 400,
          body: {
            message: 'Error'
          }
        }
      }
    ]
  }
];
