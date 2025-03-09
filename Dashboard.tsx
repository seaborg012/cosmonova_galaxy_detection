import React, { useState } from 'react';
import {
  Upload,
  Image as ImageIcon,
  ChevronDown,
  ChevronUp,
  Bell,
  PieChart,
  LineChart as LineChartIcon,
  Users,
  Activity
} from 'lucide-react';
import {
  
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const [dragActive, setDragActive] = useState(false);
  const [activeTab, setActiveTab] = useState('image'); // 'image' or 'astrometrics'
  const [showNotifications, setShowNotifications] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Sample data for charts
  const pieData = [
    { name: 'Spiral', value: 8254, color: '#8B5CF6' },
    { name: 'Elliptical', value: 5320, color: '#EC4899' },
    { name: 'Irregular', value: 2058, color: '#10B981' }
  ];

  const recentUploads = [
    { id: '202401', name: 'M51', type: 'Spiral', size: 512, status: 'Classified' },
    { id: '202402', name: 'NGC 4889', type: 'Elliptical', size: 430, status: 'Classified' },
    { id: '202403', name: 'IC 1101', type: 'Elliptical', size: 678, status: 'Classified' },
    { id: '202404', name: 'Cartwheel', type: 'Irregular', size: 590, status: 'Processing' },
    { id: '202405', name: 'NGC 1300', type: 'Spiral', size: 480, status: 'Classified' }
  ];

  const userActivity = [
    { username: 'AstroHunter99', uploads: 15, classifications: 120, accuracy: 96.4 },
    { username: 'GalaxyGazer', uploads: 8, classifications: 85, accuracy: 93.1 },
    { username: 'DeepSpaceX', uploads: 21, classifications: 143, accuracy: 97.5 },
    { username: 'NebulaNerd', uploads: 5, classifications: 64, accuracy: 89.8 }
  ];

  const notifications = [
    '🔔 New update: Improved AI classification accuracy by 12%!',
    '🚀 Upcoming event: Live Astronomical Webinar on March 10, 2025',
    '🔭 Fun fact: The nearest spiral galaxy, Andromeda (M31), is moving toward the Milky Way at 110 km/s!'
  ];

  return (
    <div className="min-h-screen bg-[#0B0E18] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Galaxy Dashboard</h1>
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 text-gray-400 hover:text-white transition"
            >
              <Bell className="h-6 w-6" />
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-[#151929] rounded-lg shadow-lg border border-purple-500/20 p-4 z-50">
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="py-2 px-3 hover:bg-purple-500/10 rounded-lg transition cursor-pointer mb-2"
                  >
                    <p className="text-sm text-gray-300">{notification}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Galaxies"
            value="15,632"
            icon={<ImageIcon className="h-6 w-6 text-purple-500" />}
          />
          <StatCard
            title="Current Observed"
            value="1,205"
            icon={<Activity className="h-6 w-6 text-pink-500" />}
          />
          <StatCard
            title="Active Users"
            value="487"
            icon={<Users className="h-6 w-6 text-emerald-500" />}
          />
          <StatCard
            title="Accuracy Rate"
            value="94.2%"
            icon={<PieChart className="h-6 w-6 text-blue-500" />}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Upload and Input Options */}
          <div className="lg:col-span-2">
            <div className="bg-[#151929] rounded-xl border border-purple-500/20 p-6 mb-8">
              <div className="flex space-x-4 mb-6">
                <button
                  className={`px-4 py-2 rounded-lg transition ${
                    activeTab === 'image'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('image')}
                >
                  Image Upload
                </button>
                <button
                  className={`px-4 py-2 rounded-lg transition ${
                    activeTab === 'astrometrics'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('astrometrics')}
                >
                  Astrometrics Data
                </button>
              </div>

              {activeTab === 'image' ? (
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center ${
                    dragActive
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-gray-700 hover:border-purple-500/50'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrag}
                >
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-lg text-gray-300 mb-2">
                    Drag and drop your galaxy images here
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    or click to select files
                  </p>
                  <input type="file" className="hidden" accept="image/*" multiple />
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    Upload Files
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <InputField
                      label="Right Ascension"
                      placeholder="HH:MM:SS"
                    />
                    <InputField
                      label="Declination"
                      placeholder="DD:MM:SS"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <InputField
                      label="Ultraviolet Band"
                      placeholder="Magnitude"
                      type="number"
                      step="0.01"
                    />
                    <InputField
                      label="Green Band"
                      placeholder="Magnitude"
                      type="number"
                      step="0.01"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <InputField
                      label="Red Band"
                      placeholder="Magnitude"
                      type="number"
                      step="0.01"
                    />
                    <InputField
                      label="Near-Infrared Band"
                      placeholder="Magnitude"
                      type="number"
                      step="0.01"
                    />
                  </div>
                  <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    Submit Data
                  </button>
                </div>
              )}
            </div>

            {/* Recent Uploads Table */}
            <div className="bg-[#151929] rounded-xl border border-purple-500/20 p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Recent Galaxy Uploads</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-gray-400 text-sm">
                      <th className="text-left py-2">ID</th>
                      <th className="text-left py-2">Name</th>
                      <th className="text-left py-2">Type</th>
                      <th className="text-left py-2">Size (kB)</th>
                      <th className="text-left py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUploads.map((upload) => (
                      <tr key={upload.id} className="border-t border-gray-800">
                        <td className="py-3 text-gray-300">{upload.id}</td>
                        <td className="py-3 text-gray-300">{upload.name}</td>
                        <td className="py-3 text-gray-300">{upload.type}</td>
                        <td className="py-3 text-gray-300">{upload.size}</td>
                        <td className="py-3">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              upload.status === 'Classified'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {upload.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Stats and Charts */}
          <div className="space-y-8">
            {/* Galaxy Distribution Chart */}
            <div className="bg-[#151929] rounded-xl border border-purple-500/20 p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Galaxy Distribution</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                {pieData.map((entry, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-sm text-gray-400">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* User Activity */}
            <div className="bg-[#151929] rounded-xl border border-purple-500/20 p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Top Contributors</h2>
              <div className="space-y-4">
                {userActivity.map((user) => (
                  <div
                    key={user.username}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-purple-500/10 transition"
                  >
                    <div>
                      <p className="text-white font-medium">{user.username}</p>
                      <p className="text-sm text-gray-400">
                        {user.classifications} classifications
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-400 font-medium">{user.accuracy}%</p>
                      <p className="text-sm text-gray-400">{user.uploads} uploads</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => (
  <div className="bg-[#151929] rounded-xl border border-purple-500/20 p-6">
    <div className="flex items-center justify-between mb-2">
      <div className="p-2 bg-[#0B0E18] rounded-lg">{icon}</div>
    </div>
    <p className="text-gray-400 text-sm">{title}</p>
    <p className="text-2xl font-bold text-white">{value}</p>
  </div>
);

const InputField = ({ label, placeholder, type = "text", step }) => (
  <div>
    <label className="block text-sm font-medium text-gray-400 mb-1">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      step={step}
      className="w-full px-3 py-2 bg-[#0B0E18] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
    />
  </div>
);

export default Dashboard;