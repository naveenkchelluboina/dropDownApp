import React from 'react';
import { WarehouseSelector } from './components/warehouse-selector/WarehouseSelector';
import { Database } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-2 mb-6">
            <Database className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Warehouse Selection</h1>
          </div>
          <p className="text-gray-600 mb-6">
            Select warehouses to manage your data infrastructure. You can filter by name,
            Snowflake account, or line of business.
          </p>
          <WarehouseSelector />
        </div>
      </div>
    </div>
  );
}

export default App;