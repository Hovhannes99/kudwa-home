import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '@app/layout';
import Dashboard from '@pages/dashboard';
import Reports from '@pages/reports';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reports" element={<Reports />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
