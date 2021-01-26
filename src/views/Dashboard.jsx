import React from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";
import RankHistory from './dashboards/RankHistory';
import TopCharts from './dashboards/TopCharts';
import TrackedApps from './dashboards/TrackedApps';
import AppSuggestions from './dashboards/AppSuggestions';
import '../css/dashboard.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  return (  
    <div>
        <ResponsiveReactGridLayout className="dashboard-card">
          <div key="top-charts" className="dashboard-card-item" data-grid={{x: 0, y: 0, w: 6, h: 2}}>
            <TopCharts />
          </div>
          <div key="b" className="dashboard-card-item" data-grid={{x: 6, y: 0, w: 6, h: 2}}>
            <TrackedApps />
          </div>
          <div key="c" className="dashboard-card-item" data-grid={{x: 0, y: 2, w: 6, h: 2}}>
            <AppSuggestions />
          </div>
          <div key="d" className="dashboard-card-item" data-grid={{x: 6, y: 2, w: 6, h: 2}}>
            <RankHistory />
          </div>
        </ResponsiveReactGridLayout>
    </div>
  );
}

export default Dashboard;