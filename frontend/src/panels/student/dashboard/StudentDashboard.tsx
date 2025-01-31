
import { LineChart, Line, XAxis, YAxis, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const StudentDashboard = () => {
  const weeklyData = [
    { week: 'Week 1', value: 15 },
    { week: 'Week 2', value: 30 },
    { week: 'Week 3', value: 18 },
    { week: 'Week 4', value: 26 }
  ];

  const data = [
    { name: "Programming", value: 35, color: '#FFD700' },
    { name: "Web Design", value: 25, color: '#9370DB' },
    { name: "Algorithms", value: 20, color: '#0000FF' },
    { name: "Networks", value: 15, color: '#FF0000' },
    { name: "Physics", value: 5, color: '#008000' }
  ];

  const totalQuizzes = 1381;
  const failedQuizzes = 92;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Recent Quiz Results */}
      <div className="md:col-span-8">
        <div className="border border-gray-200 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7 relative h-72">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        className="cursor-pointer"
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Center Statistics */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-2xl font-bold text-blue-600">{totalQuizzes}</p>
                <p className="text-sm text-gray-600">Quizzes taken</p>
              </div>

              {/* Failed Quizzes Count */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center gap-8 w-full">
                <div className="text-center">
                  <p className="text-xl text-blue-600">{totalQuizzes}</p>
                  <p className="text-sm text-gray-600">Quizzes taken</p>
                </div>
                <div className="text-center">
                  <p className="text-xl text-red-600">{failedQuizzes}</p>
                  <p className="text-sm text-gray-600">Failed quizzes</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <ul className="space-y-4">
                {[
                  { title: "Programming 220 quizzes", desc: "60% of them passed with A grade", color: "text-blue-600" },
                  { title: "Web design 220 quizzes", desc: "40% of them passed with B grade", color: "text-purple-600" },
                  { title: "Algorithms 220 quizzes", desc: "60% of them passed with A grade", color: "text-blue-600" },
                  { title: "Networking 220 quizzes", desc: "40% of them passed with B grade", color: "text-purple-600" },
                  { title: "Physics 220 quizzes", desc: "60% of them passed with A grade", color: "text-green-600" }
                ].map((item, index) => (
                  <li key={index} className="py-2">
                    <p className={`font-medium ${item.color}`}>{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Performance */}
      <div className="md:col-span-4">
        <div className="border border-gray-200 p-4 rounded-lg h-full flex flex-col justify-between">
          <h2 className="text-lg font-semibold mb-4">Weekly performance</h2>
          <div className="h-full">
            <ResponsiveContainer>
              <LineChart data={weeklyData}>
                <XAxis dataKey="week" />
                <YAxis />
                <Line type="monotone" dataKey="value" stroke="#1976d2" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Scheduled Test */}
      <div className="md:col-span-6">
        <div className="border border-gray-200 p-4 rounded-lg h-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Scheduled test</h2>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <i className="bi bi-facebook" />
            </button>
          </div>

          <div className="flex gap-4 mb-6">
            <span className="text-2xl font-bold">00</span>
            <span className="text-2xl font-bold">:</span>
            <span className="text-2xl font-bold">42</span>
            <span className="text-2xl font-bold">:</span>
            <span className="text-2xl font-bold">10</span>
          </div>

          <h3 className="text-lg mb-2">Programming quiz</h3>
          <p className="text-gray-600 mb-4">Created on: 12 May 2023</p>

          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Set another
          </button>
        </div>
      </div>

      {/* Overall Performance */}
      <div className="md:col-span-6">
        <div className="border border-gray-200 p-4 rounded-lg h-full">
          <h2 className="text-lg font-semibold mb-6">Overall performance</h2>

          <ul className="space-y-4 mb-6">
            {[
              { label: "Weekly tests", value: "80%" },
              { label: "Practice tests", value: "40%" },
              { label: "Questionnairs", value: "64%" },
              { label: "Monthly tests", value: "29%" }
            ].map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{item.label}</span>
                <span className="text-blue-600">{item.value}</span>
              </li>
            ))}
          </ul>

          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            See overall results
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;