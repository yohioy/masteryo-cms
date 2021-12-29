import React from 'react';

// layout for this page
import Admin from '../../components/Layout/Admin';

export default function Dashboard() {
  return <h1 data-testid="dashboard-header">MyShop Dashboard</h1>;
}

Dashboard.layout = Admin;
